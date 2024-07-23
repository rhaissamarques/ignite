import { Avatar } from './Avatar';
import styles from './Sidebar.module.css'
import { PencilLine } from "@phosphor-icons/react";


export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqO_PUJ4WIbgBpqCt8KD1OvtTjtitAy1TgLQ&s"
        alt=""
      />

      <div className={styles.profile}>
        <Avatar src="src\assets\RaymondAblack.jpg"/>

        <strong>Raymond Ablack</strong>
        <span>Blue Farm Coffee Owner</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}
