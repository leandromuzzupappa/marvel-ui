import './styles.scss';
import { FC, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ITitleComponent } from 'utils/interfaces/generalInterfaces';
import { ETitleAnimations } from 'utils/enums/generalEnums';
import { animations } from './animations';

const Title: FC<ITitleComponent> = ({
  classes,
  children,
  handleClick,
  animation,
  megaTitle,
}) => {
  const tl = gsap.timeline();
  const titleElement = useRef<null | HTMLHeadingElement>(null);
  const titleSelector = gsap.utils.selector(titleElement);

  useEffect(() => {
    if (animation && animation in ETitleAnimations) {
      const animationName =
        ETitleAnimations[animation as keyof typeof ETitleAnimations];
      tl.from(titleSelector('span'), animations[animationName]);
    }
  }, [tl, titleSelector, animation]);

  return (
    <h2
      ref={titleElement}
      className={`title ${megaTitle && 'title-megaTitle'} ${classes}`}
      onClick={(e) => {
        handleClick && handleClick(e);
      }}
    >
      {children}
    </h2>
  );
};

export default Title;
