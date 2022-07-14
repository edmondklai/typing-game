import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import GameMessage from './UI/GameMessage';
import GameOver from './GameOver';

type StartProps = {
  gameStarted: boolean,
  setGameStarted: React.Dispatch<React.SetStateAction<boolean>>,
}

function Start({ gameStarted, setGameStarted }: StartProps): JSX.Element {
  const [timeLeft, setTimeLeft] = useState<number>(60);

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

    if (timeLeft === 0) {
      setGameStarted(false);
    }

  }, [gameStarted, timeLeft])


  const handleStart = (): void => {
    setGameStarted(true);
  }

  return (
    <Box>
      {!gameStarted && <Button onClick={handleStart}>Start Game</Button>}
      {gameStarted && <GameMessage
        label="Time remaining"
        message={timeLeft.toString()}
      ></GameMessage>}
      {timeLeft === 0 && <GameOver></GameOver>}
    </Box>

  )
}

export default Start;