import Box from '@mui/material/Box';

type WordsInputProps = {
  setWordsEntered: React.Dispatch<React.SetStateAction<string>>,
  gameStarted: boolean,
  wordsEntered: string,
}


function WordsInput({ wordsEntered, setWordsEntered, gameStarted }: WordsInputProps) {

  function handleChange(e: any) {
    setWordsEntered(e.target.value)
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
        value={getInput(wordsEntered)}
      >
      </input>
    </Box>

  )
}

export default WordsInput;