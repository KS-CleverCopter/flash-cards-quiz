import { atomWithStorage } from 'jotai/utils';

interface FlashCardsData {
  [id: string]: {
    title: string;
    content: string;
  };
}
export const FlashCardsAtom = atomWithStorage<FlashCardsData>('flashCardData', {
  ['1']: {
    title: '1',
    content: 'One',
  },
});
