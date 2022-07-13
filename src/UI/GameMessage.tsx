import Box from '@mui/material/Box';

type GameMessageProps = {
  label: string,
  message: string,
}

function GameMessage({ label, message }: GameMessageProps) {
  return (
    <Box>
      <span>{`${label}: ${message}`}</span>
    </Box>
  )
}

export default GameMessage;