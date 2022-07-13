
import Stack from '@mui/material/Stack';

import ScoreBoard from './Scoreboard';
import GameSurface from './GameSurface';

import './App.css';

function App() {
  return (
    <Stack className="App"
      display="flex"
      flexDirection="column"
      alignItems="center">
      <h1>Typing game</h1>
      <ScoreBoard></ScoreBoard>
      <GameSurface></GameSurface>
    </Stack>
  );
}

export default App;
