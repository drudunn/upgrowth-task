import styled from 'styled-components';

const Img = styled.img`
  width: 100%;
`;

const Image = ({ src, alt }) => <Img src={src} alt={alt} />;

export default Image;
