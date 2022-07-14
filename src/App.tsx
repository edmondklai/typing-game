
import Stack from '@mui/material/Stack';
import { useState, useEffect } from 'react';

import ScoreBoard from './Scoreboard';
import GameSurface from './GameSurface';

import { words } from './Data/words';
import './App.css';

function App(): JSX.Element {
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [shuffledWords, setShuffledWords] = useState<string>('');


  function shuffle(array: string[]): string {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array.join(' ')
  }

  useEffect(() => {
    setShuffledWords(shuffle(words));
  }, [])

  return (
    <Stack className="App"
      display="flex"
      flexDirection="column"
      alignItems="center">
      <h1>Typing game</h1>
      <ScoreBoard
        gameStarted={gameStarted}
        setGameStarted={setGameStarted}
      ></ScoreBoard>
      <GameSurface
        shuffledWords={shuffledWords}
        gameStarted={gameStarted}
      ></GameSurface>
    </Stack>
  );
}

export default App;
