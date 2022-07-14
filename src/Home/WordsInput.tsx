import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

type WordsInputProps = {
  setWordsEntered: React.Dispatch<React.SetStateAction<string>>,
  gameStarted: boolean,
  wordsEntered: string,
}

function WordsInput({ wordsEntered, setWordsEntered, gameStarted }: WordsInputProps) {
  const [currentWord, setCurrentWord] = useState('');

  function handleChange(e: React.KeyboardEvent): void {
    const key = e.key;

    if (key === ' ') {
      setCurrentWord('');
      setWordsEntered(wordsEntered + key);
    }

    if (key === 'Backspace') {
      setWordsEntered(wordsEntered.slice(0, -1));
      if (currentWord === '' && wordsEntered) {
        const wordsAry: string[] = wordsEntered.split(' ');
        setCurrentWord(wordsAry[wordsAry.length - 2])
      } else {
        setCurrentWord(currentWord.slice(0, -1))
      }
    }

    if (key.match(/^[a-z]$/)) {
      setCurrentWord(currentWord + key);
      setWordsEntered(wordsEntered + key);
    }
  }

  return (
    <Box padding="10px">
      <TextField
        size="small"
        disabled={!gameStarted}
        type="text"
        onKeyDown={handleChange}
        value={currentWord}
      >
      </TextField>
    </Box >

  )
}

export default WordsInput;