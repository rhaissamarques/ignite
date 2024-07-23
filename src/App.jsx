import { Header } from "./Components/Header.jsx";
import { Post } from "./Components/Post.jsx";
import { Sidebar } from "./Components/Sidebar.jsx";

import "./global.css";
import styles from "./App.module.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: './src/assets/TatianaMaslany.png',
      name: "Tatiana Maslany",
      role: 'Clone | She Hulk'
    },
    content: [
      { type: 'paragraph', content: 'Lorem ipsum 👋' },
      {type: 'paragraph', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, reiciendis dolorum distinctio molestias error ex doloremque facere dicta quasi at placeat nulla aliquam in perspiciatis, tempore inventore? Autem, similique delectus.' },
      { type: 'link', content: 'clone.design'}
    ],
    publishedAt: new Date('2024-07-22 14:02:17')
  },

  {
    id: 2,
    author: {
      avatarUrl: './src/assets/MeghanOry.jpg',
      name: "Meghan Ory",
      role: 'Little Red Riding Hood'
    },
    content: [
      { type: 'paragraph', content: 'Lorem ipsum dolor sit amet' },
      {type: 'paragraph', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, reiciendis dolorum distinctio molestias error ex doloremque facere dicta quasi at placeat nulla aliquam in perspiciatis, tempore inventore? Autem, similique delectus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, reiciendis dolorum distinctio molestias error ex doloremque facere dicta quasi at placeat nulla aliquam in perspiciatis, tempore inventore? Autem, similique delectus.' },
      { type: 'link', content: 'jane.design'}
    ],
    publishedAt: new Date('2024-07-21 22:32:17')
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  );
}
