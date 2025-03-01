import { atomWithStorage } from 'jotai/utils';

interface FlashCardsData {
  [id: string]: {
    title: string;
    content: string;
  };
}
export const FlashCardsAtom = atomWithStorage<FlashCardsData>('flashCardData', {
  ['1']: {
    title: 'One',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut gravida lorem. Ut turpis felis, pulvinar a semper sed, adipiscing id dolor. Pellentesque ipsum erat, facilisis ut congue eu, ultrices in dolor. El porttitor dictum sapien, ac tempus erat varius ut. Morbi mollis magna eget lectus consequat quis malesuada felis convallis. Sed sed odio nisi. Etiam at nulla a magna consequat convallis. Curabitur quis lectus quis massa ornare venenatis sed et nibh. Proin eget ipsum velit. Integer adipiscing, eros eleifend vestibulum vehicula, nibh odio dictum urna, ut aliquam massa nisl quis neque. Suspendisse in orci enim. Sed aliquam ultrices mauris. Integer eget neque vitae sapien porta varius. Sed nec leo nulla, sed commodo dolor.',
  },
});
