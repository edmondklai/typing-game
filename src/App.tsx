
import Stack from '@mui/material/Stack';
import { useState, useEffect } from 'react';

import ScoreBoard from './Scoreboard';
import GameSurface from './GameSurface';

import { words } from './Data/words';
import './App.css';

function App(): JSX.Element {
  const [timeLeft, setTimeLeft] = useState(60);
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [wordsEntered, setWordsEntered] = useState<string>('');
  const [shuffledWords, setShuffledWords] = useState<Array<string> | null>(null);


  function shuffle(array: string[]): string[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }


  useEffect(() => {
    setShuffledWords(shuffle(words));
  }, [])

  useEffect(() => {
    function calculateTimeLeft(): number {
      return timeLeft - 1;
    }

    if (timeLeft > 0 && gameStarted) {
      const timer = setTimeout(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
      return () => clearTimeout(timer)
    }
  }, [gameStarted, timeLeft])

  return (
    <Stack className="App"
      display="flex"
      flexDirection="column"
      alignItems="center">
      <h1>Typing game</h1>
      <ScoreBoard
        gameStarted={gameStarted}
        setGameStarted={setGameStarted}
        timeLeft={timeLeft}></ScoreBoard>
      <GameSurface
        shuffledWords={shuffledWords}
        setWordsEntered={setWordsEntered}
        gameStarted={gameStarted}
        wordsEntered={wordsEntered}
      ></GameSurface>
    </Stack>
  );
}

export default App;
