import { useState } from 'react';

import Box from '@mui/material/Box';
import StartGame from './StartGame';
import './ScoreBoard.css';


function ScoreBoard() {
  const [gameStarted, setGameStarted] = useState(false);

  return (
    <Box className="ScoreBoard">
      <h2>Scoreboard</h2>
      {!gameStarted && <StartGame setGameStarted={setGameStarted} />}
    </Box>
  )
}

export default ScoreBoard;