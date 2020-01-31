import styled from 'styled-components';

const Wrapper = styled.ul`
  margin: 0 -1rem;
  padding: 0;
  display: flex;
  flex-wrap: wrap;

  li {
    list-style: none;
    padding: 1rem;
    flex-basis: 50%;
    align-self: center;

    @media (min-width: 500px) {
      flex-basis: 33%;
    }

    @media (min-width: 800px) {
      flex-basis: 25%;
    }

    @media (min-width: 1200px) {
      flex-basis: 20%;
    }
  }
`;

const Results = ({ children }) => <Wrapper>{children}</Wrapper>;

export default Results;
