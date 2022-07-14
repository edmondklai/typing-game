import Box from '@mui/material/Box';

interface GameMessageProps {
  label: string;
  message: string;
}

function GameMessage({ label, message }: GameMessageProps) {
  return (
    <Box padding="5px">
      <span>{`${label}: ${message}`}</span>
    </Box>
  )
}

export default GameMessage;