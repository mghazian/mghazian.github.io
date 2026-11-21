import Link from '@docusaurus/Link';
import React, {type ReactNode} from 'react';

export default function Navbar(): ReactNode {
  return (<nav className="sticky background top-0 h-[50px] w-full flex justify-center items-center">
      <div className='grow py-5 px-10 flex justify-begin items-center'>
        <Link to="/">Home</Link>
      </div>
      <div className='shrink'>
        [ Hi I'm a navbar ]
      </div>
      <div className='py-5 px-10 grow flex justify-end items-center'>
        <Link to="/blog">Blog</Link>
      </div>
    </nav>);
}
