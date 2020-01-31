require('dotenv-safe').config();

import fetch from 'isomorphic-unfetch';
global.fetch = fetch;

import UnsplashFactory from 'unsplash-js';

const unsplash = new UnsplashFactory({
  accessKey: process.env.ACCESS_KEY
});

const search = async ({ query: { tag } }, res) => {
  if (!tag) {
    res.status(400).json({ nope: 'try searching with ?tag=something' });
  }

  try {
    const response = await unsplash.search.photos(tag, {
      orientation: 'squarish'
    });

    if (response.ok) {
      response.json().then(data => {
        const { total, total_pages, results } = data;

        const tidyResponse = results.map(
          ({ id, color, alt_description: alt, urls, user }) => {
            const { userId, links, profile_image: profileImages } = user;

            return {
              id,
              alt,
              urls,
              user: {
                userId,
                links,
                profileImages
              }
            };
          }
        );

        res.status(200).json(tidyResponse);
      });
    } else {
      const error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  } catch (error) {
    const { response } = error;

    return response
      ? res.status(response.status).json({ message: response.statusText })
      : res.status(400).json({ message: error.message });
  }
};

export default search;
