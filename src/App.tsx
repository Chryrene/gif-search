import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import SearchBar from './components/SearchBar';
import GifList from './components/GifList';
import GlobalStyles from './styles/GlobalStyles';

interface Gif {
  id: string;
  images: {
    fixed_height: {
      url: string;
    };
  };
  title: string;
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Header = styled.header`
  width: 100%;
  text-align: center;
  padding: 20px;
  background: linear-gradient(135deg, #007bff, #0056b3);
  color: white;
  font-size: 2.5rem;
  font-weight: bold;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const App: React.FC = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);

  const fetchGifs = async (searchTerm: string) => {
    const API_KEY = '3jsJX1VKpQRAHQYQ8bcp2FUW4cWqa6qs';
    const URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchTerm}&limit=12`;

    try {
      const response = await axios.get(URL);
      setGifs(response.data.data);
    } catch (error) {
      console.error('Error fetching GIFs:', error);
    }
  };

  return (
    <>
      <GlobalStyles />
      <Header>GIF Search App</Header>
      <AppContainer>
        <SearchBar onSearch={fetchGifs} />
        <GifList gifs={gifs} />
      </AppContainer>
    </>
  );
};

export default App;
