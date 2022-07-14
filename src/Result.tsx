import Stack from '@mui/material/Stack';
import GameMessage from './UI/GameMessage';

interface ResultProps {
  wordsEntered: string;
  shuffledWords: any;
}

function Result({ wordsEntered, shuffledWords }: ResultProps) {
  function getTotalWords(): string {
    return (wordsEntered.split(' ').length - 1).toString();
  }

  function getWordsPerMinute(): string {
    return (wordsEntered.length / 5).toString();
  }

  function getCorrectWords(): string {
    let correctWords: number = 0;
    wordsEntered.split(' ').forEach((word: string, index: number) => {
      if (shuffledWords.split(' ')[index] === word) {
        correctWords = correctWords + 1
      }
    })
    return correctWords.toString();
  }

  return (
    <Stack display="flex" direction="row" justifyContent="center">
      <GameMessage label='Total words' message={getTotalWords()} />
      <GameMessage label="Correct words" message={getCorrectWords()} />
      <GameMessage label='WPM' message={getWordsPerMinute()} />
    </Stack>
  )
}

export default Result;