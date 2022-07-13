import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";

type WordsInputProps = {
  setWordsEntered: React.Dispatch<React.SetStateAction<string>>,
}

function WordsInput({ setWordsEntered }: WordsInputProps) {

  function handleChange(e: any) {
    console.log(e.target.value)
    setWordsEntered(e.target.value)
  }

  return (
    <Box padding="10px">
      <TextField
        size="small"
        onChange={handleChange}
      >
      </TextField>
    </Box>

  )
}

export default WordsInput;