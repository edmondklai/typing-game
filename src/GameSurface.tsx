

import Box from '@mui/material/Box';

import WordsInput from './WordsInput';
import './GameSurface.css';

type GameSurfaceProps = {
  shuffledWords: string[] | null,
  setWordsEntered: React.Dispatch<React.SetStateAction<string>>,
}

function GameSurface({ shuffledWords, setWordsEntered }: GameSurfaceProps) {

  return (
    <div className="GameSurface">
      <Box>
        {shuffledWords && shuffledWords.map((word: string) => {
          return <span>{word} </span>
        })}
      </Box>
      <WordsInput
        setWordsEntered={setWordsEntered}></WordsInput>
    </div>
  )
}

export default GameSurface;