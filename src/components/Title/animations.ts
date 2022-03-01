import { ETitleAnimations } from 'utils/enums/generalEnums';
import { getScreen } from 'utils/screenUtils';

export const animations = {
  [ETitleAnimations.fadeup]: {
    opacity: 0,
    y: getScreen().width > 1000 ? 400 : 0,
    ease: 'power4.out',
    skewY: 30,
    delay: 1,
  },
};
