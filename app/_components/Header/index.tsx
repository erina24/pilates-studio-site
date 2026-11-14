import Menu from '@/app/_components/Menu';
import Link from 'next/link';
import styles from './index.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link
        href="/"
        className={styles.logoLink}
        style={{
          color: '#fff',
          fontFamily: 'Georgia, serif',
          fontSize: '0.95rem',
          letterSpacing: '0.14em',
        }}
      >
        KOKYU PILATES
      </Link>
      <Menu />
    </header>
  );
}