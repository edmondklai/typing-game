import { useState } from 'react';
import Box from '@mui/material/Box';
import { strictEqual } from 'assert';

type WordsInputProps = {
  setWordsEntered: React.Dispatch<React.SetStateAction<string>>,
  gameStarted: boolean,
  wordsEntered: string,
}


function WordsInput({ wordsEntered, setWordsEntered, gameStarted }: WordsInputProps) {
  const [currentWord, setCurrentWord] = useState('');

  function handleChange(e: any) {

    const value = e.target.value;
    console.log(value.length, value.charAt(value.length - 1))
    setWordsEntered(value)


    if (value.charAt(value.length - 1) === ' ') {
      console.log('in')
      setCurrentWord('');
    } else {
      setCurrentWord(value);
    }
    setCurrentWord(value)
  }

  function getInput(words: string): string {
    const wordsAry = words.split(' ');
    return wordsAry[wordsAry.length - 1]
  }

  return (
    <Box padding="10px">
      <input
        disabled={!gameStarted}
        onChange={handleChange}
        value={currentWord}
      >
      </input>
    </Box>

  )
}

export default WordsInput;