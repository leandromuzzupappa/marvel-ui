import { FC, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Hero from 'components/Hero';
import Characters from 'components/Characters';

const Homepage: FC<{}> = () => {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    element &&
      gsap.fromTo(
        element.querySelector('.section--2 h1'),
        {
          opacity: 0,
          y: -20,
        },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: element.querySelector('.section--2'),
            start: 'top 70%',
            end: 'center 70%',
            markers: true,
            scrub: true,
          },
        },
      );
  }, []);

  return (
    <div ref={ref}>
      <Hero />
      <Characters />
      <section
        className="section--3"
        style={{ height: '100vh', background: '#333' }}
      ></section>
      <section
        className="section--4"
        style={{ height: '70vh', background: '#cc0000' }}
      ></section>
      <section
        className="section--5"
        style={{ height: '100vh', background: '#333' }}
      ></section>
    </div>
  );
};

export default Homepage;
