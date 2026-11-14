import { connection } from 'next/server';
import Image from 'next/image';
import { getNewsList, getPlansList } from '@/app/_libs/microcms';
import { TOP_NEWS_LIMIT } from '@/app/_constants';
import NewsList from '@/app/_components/NewsList';
import ButtonLink from '@/app/_components/ButtonLink';
import styles from './page.module.css';
import { TRIAL_PLAN_ID } from '@/app/_constants';

export default async function Page() {
  await connection();
  const data = await getNewsList({
    limit: TOP_NEWS_LIMIT,
  });
  const { contents: plans } = await getPlansList({ ids: TRIAL_PLAN_ID });
  const trialPlan = plans.find((plan) => plan.id === TRIAL_PLAN_ID);
  return (
    <>
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>呼吸からはじめる、ピラティス</h1>
          <p className={styles.description}>
            初めての方も、自分のペースで。呼吸と基本の動きから始めるピラティススタジオです。
          </p>
          <div className={styles.trialLink}>
            <ButtonLink href="/plans">体験レッスンを見る</ButtonLink>
          </div>
        </div>
        <Image
          className={styles.bgimg}
          src="/studio-hero.png"
          alt=""
          width={1672}
          height={941}
          priority
        />
      </section>

      {typeof trialPlan?.price === 'number' && (
        <div className={styles.trialPrice}>
          <ButtonLink href="/plans">
            体験レッスン {trialPlan.price.toLocaleString('ja-JP')}円
          </ButtonLink>
        </div>
      )}

      <section className={styles.news}>
        <h2 className={styles.newsTitle}>お知らせ</h2>
        <NewsList articles={data.contents} />
        <div className={styles.newsLink}>
          <ButtonLink href="/news">お知らせ一覧を見る</ButtonLink>
        </div>
      </section>
    </>
  );
}
