

import Box from '@mui/material/Box';

import WordsInput from './WordsInput';
import './GameSurface.css';

type GameSurfaceProps = {
  shuffledWords: any,
  setWordsEntered: React.Dispatch<React.SetStateAction<string>>,
  gameStarted: boolean,
  wordsEntered: string,
}

function GameSurface({ shuffledWords,
  setWordsEntered, gameStarted, wordsEntered }: GameSurfaceProps) {

  console.log('game surface')
  return (
    <div className="GameSurface">
      <Box>
        {shuffledWords && shuffledWords.split('').map((character: string,
          index: number) => {

          console.log()
          if (wordsEntered[index] === shuffledWords.split('')[index]) {
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