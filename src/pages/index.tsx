import {useEffect, useRef, useState, type ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBullseye, faLightbulb, faUsers } from '@fortawesome/free-solid-svg-icons';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}
/// END OF TEMPLATE


function Navbar(): ReactNode {
  return <>
    <nav className="navbar sticky-top" style={{ background: '#081422' }}>
      <ul className='navbar-nav'>
        <li className="nav-item">
          YIHA
        </li>
      </ul>
    </nav>
  </>
}

function WordList(): ReactNode {
  const texts = [
    'solution',
    'application',
    'system',
    'website'
  ];

  const shiftDurationMs = 600;

  const [ currentIndex, setCurrentIndex ] = useState(0);
  const [ isAnimating, setIsAnimating ] = useState(false);

  useEffect(() => {
    let animationId: NodeJS.Timeout;

    const handler = () => {
      setIsAnimating(true);
      animationId = setTimeout(() => {
        setIsAnimating(false);
        setCurrentIndex(idx => (idx + 1) % texts.length);
      }, shiftDurationMs);
    };

    const id = setInterval(handler, 1600 + shiftDurationMs);

    return () => {
      clearInterval(id);
      clearTimeout(animationId);
    }
  }, [ ]);

  const rotate = (arraySource: any[], count: number) => {
    let actualCount = count % arraySource.length;

    while (actualCount --> 0) {
      arraySource.push(arraySource.shift());
    }

    return arraySource;
  }

  const rotatedTexts = rotate([...texts], currentIndex);

  return <div style={{ display: 'inline-block', height: '1lh', verticalAlign: 'top', overflow: 'hidden' }}>
    <div style={{ transition: `${isAnimating ? 'all' : 'none'} ease-out ${shiftDurationMs}ms`, transform: `translateY(${isAnimating ? -1 : 0}lh)` }}>
      {
        rotatedTexts.map((v, id) => <div style={{ background: 'linear-gradient(45deg, rgb(34, 174, 206), rgb(209, 255, 184))', backgroundClip: 'text', color: 'transparent', transition: 'all ease-out 0.25s' }} key={v} ><b>{v}</b></div>)
      }
    </div>
  </div>
}

function HeroSection(): ReactNode {
  return <div style={{ color: 'whitesmoke', minHeight: '100vh', background: '#0b1b2d', padding: '1rem', width: '100%' }} className='d-flex flex-column justify-content-around align-items-center' >
    <div style={{ maxWidth: '900px' }} className='d-flex flex-column justify-content-center align-items-center text-center'>
      <div style={{ fontSize: '40pt', lineHeight: '120%' }}>Creating <WordList/> to make people's life easier</div>
      <div className='mt-3' style={{ fontSize: '24pt' }}>One step at a time</div>
    </div>
    <div className='d-flex flex-column justify-content-center align-items-center' style={{ maxWidth: '900px', width: '100%', marginBottom: '100px' }}>
      <div className='d-flex align-items-center' style={{ fontSize: '20pt' }}>
        <div style={{ color: '#F2E14F' }}><b>Muhammad Ghazian</b></div>
        <div style={{ borderRight: '1px solid white', margin: '0 20px', height: '1lh', width: '2px' }}></div>
        <div>Full-stack Engineer</div>
      </div>
      <div className="mt-3" style={{ fontSize: '20pt', display: 'flex', gap: '1rem' }}>
        <a href='https://github.com/mghazian' className={styles.linkLogo}><FontAwesomeIcon icon={faGithub} /></a>
        <a href='https://www.linkedin.com/in/muhghazian' className={styles.linkLogo}><FontAwesomeIcon icon={faLinkedin} /></a>
      </div>
    </div>
  </div>
}


function ProfessionalValueSection() : ReactNode {
  return <div style={{ color: 'whitesmoke', minHeight: '100vh', background: 'rgb(18, 38, 61)', padding: '1rem', width: '100%' }} className='d-flex flex-column align-items-center' >
      <div className="d-flex flex-column" style={{ width: '1000px' }}>

        <h1 style={{ fontSize: '32pt', fontWeight: 'bold' }} className='my-5'>Professional Value</h1>
        <div style={{ fontSize: '20pt' }}>
          <div className='d-flex flex-row align-items-center'>
            <FontAwesomeIcon icon={faUsers} style={{ width: '100px', height: '100px', marginRight: '50px' }} />
            <div className="d-flex flex-column">
              <h2 className='mb-3' style={{ fontSize: '28pt', fontWeight: 'bold', color: '#F2E14F' }}>Listen and Understand</h2>
              <div>
                Everyone has specific problem and ideas
              </div>
              <div>
                So I try to listen and understand what they need
              </div>
            </div>
          </div>
          <div className="d-flex flex-row mt-4 align-items-center">
            <FontAwesomeIcon icon={faLightbulb} style={{ width: '100px', height: '100px', marginRight: '50px' }} />
            <div className="d-flex flex-column">
              <h2 className='mb-3' style={{ fontSize: '28pt', fontWeight: 'bold', color: '#F2E14F' }}>Problem Solving</h2>
              <div>
                I capitalize my love in problem solving
              </div>
              <div>
                So I hunger to help other people
              </div>
            </div>
          </div>
          <div className="d-flex flex-row mt-4 align-items-center">
            <FontAwesomeIcon icon={faBullseye} style={{ width: '100px', height: '100px', marginRight: '50px' }} />
            <div className="d-flex flex-column">
              <h2 className='mb-3' style={{ fontSize: '28pt', fontWeight: 'bold', color: '#F2E14F' }}>Searching for Impact</h2>
              <div>
                Work that nobody use is not useful
              </div>
              <div>
                So I want to make sure what I build helps people
              </div>
            </div>
          </div>

        </div>
      </div>
  </div>
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (<>
      <Navbar/>
      <HeroSection/>
      <ProfessionalValueSection/>
      <div style={{ minHeight: '100vh', background: '#fb1b2d' }}>
        YEI
      </div>
    </>
  );
}
