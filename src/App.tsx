
import Stack from '@mui/material/Stack';
import { useState, useEffect } from 'react';

import ScoreBoard from './Scoreboard';
import GameSurface from './GameSurface';

import './App.css';

function App(): JSX.Element {
  const [timeLeft, setTimeLeft] = useState(60);
  const [gameStarted, setGameStarted] = useState(false);


  const calculateTimeLeft = (): number => {
    return timeLeft - 1;
  }

  useEffect(() => {
    if (timeLeft > 0 && gameStarted) {
      const timer = setTimeout(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
      return () => clearTimeout(timer)
    }
  })

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
      <GameSurface></GameSurface>
    </Stack>
  );
}

export default App;
