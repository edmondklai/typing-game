

import Box from '@mui/material/Box';

import WordsInput from './WordsInput';
import './GameSurface.css';

type GameSurfaceProps = {
  shuffledWords: string[] | null,
  setWordsEntered: React.Dispatch<React.SetStateAction<string>>,
  gameStarted: boolean,
  wordsEntered: string,
}

function GameSurface({ shuffledWords,
  setWordsEntered, gameStarted, wordsEntered }: GameSurfaceProps) {

  return (
    <div className="GameSurface">
      <Box>
        {shuffledWords && shuffledWords.map((word: string) => {
          return <span>{word} </span>
        })}
      </Box>
      <WordsInput
        setWordsEntered={setWordsEntered}
        gameStarted={gameStarted}
        wordsEntered={wordsEntered}
      ></WordsInput>
    </div >
  )
}

export default GameSurface;