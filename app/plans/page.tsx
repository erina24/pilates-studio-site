import { connection } from 'next/server';
import Image from 'next/image';
import { getPlansList } from '../_libs/microcms';
import styles from './page.module.css';

export const metadata = { title: '料金・サービス | KOKYU PILATES' };

export default async function PlansPage() {
  await connection();
  const { contents: plans } = await getPlansList();

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <Image
          className={styles.heroImage}
          src="/studio-hero.png"
          alt=""
          fill
          sizes="100vw"
          priority
        />
        <h1 className={styles.title}>料金・サービス</h1>
      </section>
      <div className={styles.plans}>
        {plans.length === 0 ? (
          <p className={styles.empty}>表示できるプランがありません。</p>
        ) : (
          plans.map((plan) => (
            <article className={styles.plan} key={plan.id}>
              <h2 className={styles.planName}>{plan.name}</h2>
              <p className={styles.price}>
                {plan.price?.toLocaleString('ja-JP') ?? '—'}
                <span className={styles.currency}>円</span>
              </p>
              <p className={styles.description}>{plan.description}</p>
            </article>
          ))
        )}
      </div>
    </div>
  );
}
