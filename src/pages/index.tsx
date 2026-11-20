import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { ReactNode } from "react";
import styles from './index.module.css';
import { usePluginData } from "@docusaurus/useGlobalData";
import Link from "@docusaurus/Link";

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();

  type Post = {
    title: string,
    description: string,
    permalink: string
  }

  const { posts } = usePluginData('blog-posts') as { posts: Post[] }

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
        <div className="min-h-[50vh] mb-[90px] flex flex-col">
          <p>A front page is supposed to showcase a product.</p>
          <p>And I was supposed to be the product.</p>
          <p></p>
          <p>But I genuinely don't know how to market myself.</p>
          <p>I guess that sort of explains the blankness of the page's design.</p>
          <p></p>
          <p>Oh, I like cats. Surely that amount for something.</p>
          <p>Well I'm also a 5 YOE full stack engineer in Node.js, Java, PHP, and React that has records in getting deep into product building with startups and startup-minded company, with histories in performance optimization across frontend, backend, and database stack. <strong>But I also like cats</strong>. That's important.</p>
          <p>I once got 2 stray cats that routinely say hi to me when we passed by. Technically they meow, but I like to think they are saying hi to me.</p>
          <p></p>
          <p>Do you like cats?</p>
        </div>
      </div>

      <div className="flex w-full justify-center">
        <div className="h-screen flex flex-col py-5">
          <h2>I wrote these!</h2>

          <div className="flex gap-3">
            {posts.map(post => (
              <PostPreview title={post.title} description={post.description} url={post.permalink} />
            ))}
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

function PostPreview(props: {title: string, description: string, url: string, wordLimit?: number}): ReactNode {
  const { title, description, url } = props;
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
        <div className="mt-4 flex justify-end p-3">
          <Link className="text-sm" to={url}>Read more</Link>
        </div>
      </div>
    </div>
  )
}