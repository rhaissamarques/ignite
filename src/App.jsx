import { Header } from "./Components/Header.jsx";
import { Post } from "./Post.jsx";


import "./global.css";
import styles from "./App.module.css";
import { Sidebar } from "./Components/Sidebar.jsx";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Rhaissa Marques"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quae animi earum nisi minima cupiditate sit doloremque excepturi dolores et, velit obcaecati itaque eligendi quidem ut nulla esse, enim deleniti!"
          />

          <Post
            author="Diego Fernandes"
            content="Perferendis quae animi earum nisi minima cupiditate sit doloremque excepturi dolores et, velit obcaecati itaque eligendi quidem ut nulla esse, enim deleniti!"
          />
        </main>
      </div>
    </div>
  );
}
