'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import cx from 'classnames';
import styles from './index.module.css';

export default function Menu() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const open = () => setOpen(true);
  const close = () => setOpen(false);
  return (
    <div>
      <nav
        id="studio-navigation"
        aria-label="メインナビゲーション"
        className={cx(styles.nav, isOpen && styles.open)}
      >
        <ul className={styles.items}>
          <li>
            <Link href="/news" onClick={close}>
              お知らせ
            </Link>
          </li>
          <li>
            <Link href="/members" onClick={close}>
              インストラクター
            </Link>
          </li>
          <li>
            <Link href="/plans" onClick={close}>
              料金・サービス
            </Link>
          </li>
        </ul>
        <button className={cx(styles.button, styles.close)} onClick={close}>
          <Image src="/close.svg" alt="閉じる" width={24} height={24} priority />
        </button>
      </nav>
      <button
        className={styles.button}
        onClick={open}
        aria-expanded={isOpen}
        aria-controls="studio-navigation"
      >
        <Image src="/menu.svg" alt="メニュー" width={24} height={24} priority />
      </button>
    </div>
  );
}
