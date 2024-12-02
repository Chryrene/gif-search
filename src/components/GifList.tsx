import React from 'react';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  padding: 20px;
`;

const Card = styled.div`
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

interface GifListProps {
  gifs: {
    id: string;
    images: {
      fixed_height: {
        url: string;
      };
    };
    title: string;
  }[];
}

const GifList: React.FC<GifListProps> = ({ gifs }) => (
  <Grid>
    {gifs.map((gif) => (
      <Card key={gif.id}>
        <Image src={gif.images.fixed_height.url} alt={gif.title} />
      </Card>
    ))}
  </Grid>
);

export default GifList;
