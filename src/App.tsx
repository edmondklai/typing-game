
import Stack from '@mui/material/Stack';
import { useState, useEffect } from 'react';

import ScoreBoard from './Home/Scoreboard';
import GameSurface from './Home/GameSurface';

import { words } from './Data/words';
import './App.css';

function App(): JSX.Element {
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [shuffledWords, setShuffledWords] = useState<string>('');
  const [wordsEntered, setWordsEntered] = useState<string>('');


  function shuffle(array: string[]): string {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array.join(' ')
  }

  useEffect((): void => {
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
        wordsEntered={wordsEntered}
        shuffledWords={shuffledWords}
      ></ScoreBoard>
      <GameSurface
        shuffledWords={shuffledWords}
        gameStarted={gameStarted}
        wordsEntered={wordsEntered}
        setWordsEntered={setWordsEntered}
      ></GameSurface>
    </Stack>
  );
}

export default App;
