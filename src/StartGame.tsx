import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

type StartProps = {
  setGameStarted: React.Dispatch<React.SetStateAction<boolean>>,
}

function Start({ setGameStarted }: StartProps): JSX.Element {
  const handleStart = (): void => {
    setGameStarted(true);
  }

  return (
    <Box>
      <Button onClick={handleStart}>Start Game</Button>
    </Box>

  )
}

export default Start;