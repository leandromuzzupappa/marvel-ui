import './styles.scss';

import { useRef, useEffect } from 'react';
import { useContext } from 'hooks/useContext';
import gsap from 'gsap';

const Loading = () => {
  const tl = gsap.timeline();
  const { loadingPage } = useContext();

  const loadingElement = useRef(null);
  const loadingSelector = gsap.utils.selector(loadingElement);

  useEffect(() => {
    if (loadingPage) {
      gsap.from(loadingSelector('span'), {
        opacity: 0,
        y: 400,
        ease: 'power4.out',
        skewY: 30,
        delay: 0,
        stagger: {
          amount: 0.3,
          repeat: -1,
          repeatDelay: 1,
          yoyo: true,
        },
      });

      gsap.fromTo(
        loadingElement.current,
        {
          scale: 1,
          stagger: {
            repeat: -1,
          },
        },
        {
          scale: 1.1,
          delay: 0.2,
          stagger: {
            repeat: -1,
            yoyo: true,
          },
        },
      );
    }
  }, [tl, loadingSelector, loadingPage]);

  return (
    <div className="loading_screen" ref={loadingElement}>
      <div className="loading_screen--row">
        <span>MARVEL COMICS</span>
      </div>
      <div className="loading_screen--row">
        <span>MARVEL COMICS</span>
      </div>
      <div className="loading_screen--row">
        <span>MARVEL COMICS</span>
      </div>
    </div>
  );
};

export default Loading;
