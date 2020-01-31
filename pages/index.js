import Head from 'next/head';
import styled from 'styled-components';
import Search from '../components/search/Search';

const Layout = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
`;

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
`;

const Homepage = () => (
  <>
    <Head>
      <title>Unsplash'd - Image search for Upgrowth</title>
    </Head>

    <Layout>
      <Title>Unsplash'd</Title>
      <Search />
    </Layout>
  </>
);

export default Homepage;
