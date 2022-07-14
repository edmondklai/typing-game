import Box from '@mui/material/Box';
import StartGame from './StartGame';
import Result from './Result';

import './ScoreBoard.css';

interface ScoreBoardProps {
  gameStarted: boolean;
  setGameStarted: React.Dispatch<React.SetStateAction<boolean>>;
  wordsEntered: string;
  shuffledWords: string;
}

function ScoreBoard(
  { gameStarted, setGameStarted,
    wordsEntered, shuffledWords }: ScoreBoardProps): JSX.Element {

  return (
    <Box className="ScoreBoard">
      <h2>Scoreboard</h2>
      <StartGame
        gameStarted={gameStarted}
        setGameStarted={setGameStarted} />
      <Result
        wordsEntered={wordsEntered}
        shuffledWords={shuffledWords}
      ></Result>
    </Box>
  )
}

export default ScoreBoard;