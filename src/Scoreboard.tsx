import Box from '@mui/material/Box';
import StartGame from './StartGame';
import GameOver from './GameOver';
import './ScoreBoard.css';

type ScoreBoardProps = {
  timeLeft: number,
  gameStarted: boolean,
  setGameStarted: React.Dispatch<React.SetStateAction<boolean>>,
}

function ScoreBoard({ timeLeft, gameStarted, setGameStarted }: ScoreBoardProps) {

  return (
    <Box className="ScoreBoard">
      <h2>Scoreboard</h2>
      {!gameStarted && <StartGame setGameStarted={setGameStarted} />}
      {timeLeft === 0 && <GameOver></GameOver>}
    </Box>
  )
}

export default ScoreBoard;