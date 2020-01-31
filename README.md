# Upgrowth Tech Task

Image search box using the Unsplash API

- [x] create a micro app that allows a user to search for a tag and show the matching photos

## Built with

Given the request was to spend around 30 minutes on the task, I've used some tech I use commonly to bootstrap an environment.

This actually took me an hour or so to do, but hopefully you like it!

- [Next.js starter](https://github.com/zeit/next.js/tree/canary/examples/with-styled-components)
- using [styled-components](https://github.com/styled-components/styled-components).
- [styled normalize](https://github.com/sergeysova/styled-normalize)
- [isomorphic-unfetch](https://www.npmjs.com/package/isomorphic-unfetch)
- [Unsplash JS Library](https://github.com/unsplash/unsplash-js)

### Things I get for free

For this purpose we are extending the `<Document />` and injecting the server side rendered styles into the `<head>`, and also adding the `babel-plugin-styled-components` (which is required for server side rendering).

Additionally we set up a global [theme](https://www.styled-components.com/docs/advanced#theming) for styled-components using NextJS custom [`<App>`](https://nextjs.org/docs#custom-app) component.
