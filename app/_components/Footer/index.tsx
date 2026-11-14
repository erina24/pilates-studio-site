import Link from 'next/link';
import styles from './index.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.nav} aria-label="フッター">
        <ul className={styles.items}>
          <li className={styles.item}>
            <Link href="/news">お知らせ</Link>
          </li>
          <li className={styles.item}>
            <Link href="/members">インストラクター</Link>
          </li>
          <li className={styles.item}>
            <Link href="/plans">料金・サービス</Link>
          </li>
        </ul>
      </nav>
      <p>© KOKYU PILATES</p>
    </footer>
  );
}