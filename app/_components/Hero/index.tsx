import Image from 'next/image';
import styles from './index.module.css';

type Props = {
  title: string;
  sub: string;
};

export default function Hero({ sub }: Props) {
  return (
    <section className={styles.container}>
      <div>
        <h1 className={styles.title}>{sub}</h1>
      </div>
      <Image className={styles.bgimg} src="/studio-hero.png" alt="" fill sizes="100vw" priority />
    </section>
  );
}
