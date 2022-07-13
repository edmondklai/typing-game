import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import StartGame from './StartGame';
import GameOver from './GameOver';
import GameMessage from './UI/GameMessage';

import './ScoreBoard.css';

type ScoreBoardProps = {
  timeLeft: number,
  gameStarted: boolean,
  setGameStarted: React.Dispatch<React.SetStateAction<boolean>>,
}

function ScoreBoard(
  { timeLeft, gameStarted, setGameStarted }: ScoreBoardProps): JSX.Element {

  return (
    <Box className="ScoreBoard">
      <h2>Scoreboard</h2>
      {!gameStarted && <StartGame setGameStarted={setGameStarted} />}
      <Stack>
        {gameStarted && <GameMessage
          label="Time remaining"
          message={timeLeft.toString()}
        ></GameMessage>}
        {timeLeft === 0 && <GameOver></GameOver>}
      </Stack>

    </Box>
  )
}

export default ScoreBoard;