

import { useState } from 'react';
import Box from '@mui/material/Box';

import WordsInput from './WordsInput';
import './GameSurface.css';

type GameSurfaceProps = {
  shuffledWords: any,
  gameStarted: boolean,
}

function GameSurface({ shuffledWords,
  gameStarted }: GameSurfaceProps) {
  const [wordsEntered, setWordsEntered] = useState<string>('');

  return (
    <div className="GameSurface">
      <Box>
        {shuffledWords && shuffledWords.split('').map((character: string,
          index: number) => {

          if (wordsEntered[index] === shuffledWords[index]) {
            return <span key={index} className="highlight-correct">{character}</span>
          } else {
            return <span key={index} className="">{character}</span>
          }

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