import styles from './header.module.css';
import {Link} from 'react-router-dom';

export default function Header() {
    return (
      <header className={styles.header}>
        <h1>My React App</h1>
        <nav className={styles.nav}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>
    );
    
}

