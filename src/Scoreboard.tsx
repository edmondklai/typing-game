import Box from '@mui/material/Box';
import StartGame from './StartGame';


import './ScoreBoard.css';

type ScoreBoardProps = {
  gameStarted: boolean,
  setGameStarted: React.Dispatch<React.SetStateAction<boolean>>,
}

function ScoreBoard(
  { gameStarted, setGameStarted }: ScoreBoardProps): JSX.Element {

  console.log('ScoreBoard')
  return (
    <Box className="ScoreBoard">
      <h2>Scoreboard</h2>
      <StartGame
        gameStarted={gameStarted}
        setGameStarted={setGameStarted} />

    </Box>
  )
}

export default ScoreBoard;