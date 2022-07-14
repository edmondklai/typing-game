

import { useState, useEffect } from 'react';
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

  useEffect(() => {
    const el = document.getElementById(`word-${wordsEntered.length}`);
    if (el) {
      console.log(el)
      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth' });
      }, 0)
    }
  }, [wordsEntered])

  return (
    <div className="GameSurface">
      <Box className="GameSurface_words">
        {shuffledWords && shuffledWords.split('').map((character: string,
          index: number) => {
          let className: string;
          if (wordsEntered[index] === undefined) {
            className = ''
          } else if (wordsEntered[index] === shuffledWords[index]) {
            className = "highlight-correct"
          } else {
            className = "highlight-incorrect"
          }
          return <span key={index} id={`word-${index}`} className={className}>{character}</span>
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