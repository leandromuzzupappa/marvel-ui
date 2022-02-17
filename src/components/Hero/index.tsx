import './styles.scss';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import Title from 'components/Title';

const Hero = () => {
  const tl = gsap.timeline();
  const sectionElement = useRef<null | HTMLElement>(null);
  const sectionSelector = gsap.utils.selector(sectionElement);

  useEffect(() => {
    tl.fromTo(
      sectionElement.current,
      {
        scale: 1,
      },
      {
        scale: 1.1,
        delay: 0.5,
      },
    );
  }, [tl, sectionSelector]);

  return (
    <section className="section section_hero" ref={sectionElement}>
      <div className="section_container">
        <Title classes="section_hero-title" animation="fadeup" megaTitle>
          <span>NEW</span>
          <span>SYMBIOTE</span>
          <span>COMING</span>
        </Title>
      </div>
    </section>
  );
};

export default Hero;
