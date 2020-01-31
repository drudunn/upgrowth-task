import { useState, useEffect } from 'react';
import styled from 'styled-components';

import Image from '../image/Image';
import Results from './Results';

const SearchBox = styled.input`
  width: 100%;
  max-width: 500px;
  margin: 3rem auto;
  display: block;
  padding: 1rem;
  border: 1px solid #eee;
  transition: all 0.3s ease;
  line-height: 1.5;
  text-align: center;

  &:hover {
    border-color: ${({ theme }) => theme.colors.secondary};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.secondary};
    background: ${({ theme }) => theme.background.highlight};
    color: ${({ theme }) => theme.colors.secondaryDark};

    &::placeholder {
      color: ${({ theme }) => theme.colors.secondaryDark};
    }
  }
`;

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const handleChange = event => setSearchTerm(event.target.value);

  const [searchResults = [], setSearchResults] = useState([]);

  useEffect(() => {
    if (searchTerm.length < 2) {
      setSearchResults([]);
      return;
    }

    const fetchImages = async () => {
      const search = `/api/search?tag=${searchTerm}`;
      const response = await fetch(search);
      const results = await response.json();

      setSearchResults(results);
    };
    fetchImages();
  }, [searchTerm]);

  return (
    <div>
      <SearchBox
        type="text"
        placeholder="Search by Unsplash tag"
        value={searchTerm}
        onChange={handleChange}
      />

      <section>
        <Results>
          {searchResults.length > 0 &&
            searchResults.map(image => (
              <li key={image.id}>
                <Image src={image.urls.regular} alt={image.alt} />
              </li>
            ))}
        </Results>
      </section>
    </div>
  );
};

export default Search;
