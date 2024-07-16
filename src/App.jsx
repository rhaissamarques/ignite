import { Header } from "./Components/Header.jsx";
import { Post } from "./Components/Post.jsx";
import { Sidebar } from "./Components/Sidebar.jsx";

import "./global.css";
import styles from "./App.module.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post />
          <Post />
        </main>
      </div>
    </div>
  );
}
