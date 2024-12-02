import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  margin: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

interface GifCardProps {
  gif: {
    images: {
      fixed_height: {
        url: string;
      };
    };
    title: string;
  };
}

const GifCard: React.FC<GifCardProps> = ({ gif }) => (
  <Card>
    <Image src={gif.images.fixed_height.url} alt={gif.title} />
  </Card>
);

export default GifCard;
