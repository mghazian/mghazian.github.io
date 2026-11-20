import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { ReactNode } from "react";
import styles from './index.module.css';

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (<>
    <header className="sticky background top-0 h-[50px] w-full flex justify-center items-center">
      [ Hi I'm a header ]
    </header>
    <div className="flex flex-col justify-center max-w-[1024px]">
      <div className="flex w-full justify-center">
        <div className="h-screen flex flex-col justify-center">
          <p className="text-[20pt] mb-6">One day, I thought to myself</p>
          <h1>"Why don't I make a web page, a digital medium, using <i className="px-2">Serif</i> font? Will it work?</h1>
          <p className="text-[20pt] mt-6">Lo and behold. I mean, <i>welcome.</i></p>
        </div>
      </div>

      <div className="flex w-full justify-center">
        <div className="h-[33vh] flex flex-col">
          I'm sorry for the unfortunate soul who stumbled upon this corner of the world. But make yourself at home anyway.
        </div>
      </div>

      <div className="flex w-full justify-center">
        <div className="h-screen flex flex-col py-5">
          <h2>I wrote these!</h2>

          <div className="flex gap-3">
            <PostPreview title={'Title'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet commodi eligendi nulla rem saepe, incidunt porro accusantium inventore dolorem molestias fugiat! Facere temporibus iste maxime corporis beatae deserunt aperiam quos.'} />
            <PostPreview title={'Title'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore recusandae, eveniet numquam maxime officiis nihil rerum corporis ea rem quas, quidem neque nam incidunt, ipsa eligendi eaque veniam? At, voluptatem!'} />
            <PostPreview title={'Title'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id doloribus odio nihil placeat doloremque eum! Corporis sit dolore expedita eveniet, inventore explicabo provident optio illum rerum voluptatem. Placeat, repellat officiis.'} />
          </div>

        </div>
      </div>
    </div>
    <footer className="h-[120px] w-full flex justify-center items-center">
      [ And I'm footer ]
    </footer>
  </>
  )
}

function PostPreview(props: {title: string, description: string, wordLimit?: number}): ReactNode {
  const { title, description } = props;
  let words = description.split(' ')
  const wordLimit = props.wordLimit ?? 20;
  const overLimit = words.length > wordLimit;

  words = words.slice(0, wordLimit);

  return (
    <div className="relative">
      <div className="absolute" style={{zIndex: 100}}>
        <svg className={styles.postRibbon} viewBox="0 0 80 80" aria-hidden="true" focusable="false">
          <path d="M -6 58 L 2 48 L 2 67 L -6 77 Z" fill="#b90914" stroke="#111" strokeWidth="0" strokeLinejoin="round" />
          <path d="M -1 42 L 46 -2 L 66 -2 L -1 62 Z" fill="#ed1524" stroke="#111" strokeWidth="0" strokeLinejoin="round" />
        </svg>
      </div>
      <div className={`grow-1 border-1 p-4 ${styles.postPreview}`} style={{zIndex: 0}}>
        <h3>{title}</h3>
        <p>{words.join(' ') + (overLimit ? '...' : '')}</p>
      </div>
    </div>
  )
}