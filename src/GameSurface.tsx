import Box from '@mui/material/Box';
import { words } from './Data/words';
import './GameSurface.css';



function GameSurface() {
  function shuffle(array: string[]): string[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  return (
    <div className="GameSurface">
      <Box>
        {shuffle(words).map((word: string) => {
          return <span>{word} </span>
        })}
      </Box>
    </div>
  )
}

export default GameSurface;