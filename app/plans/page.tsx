import { connection } from 'next/server';
import Hero from '@/app/_components/Hero';
import Sheet from '@/app/_components/Sheet';
import { getPlansList } from '../_libs/microcms';

export default async function PlansPage() {
  await connection();  
  const { contents: plans } = await getPlansList();

  return (
    <>
      <Hero title="Plans" sub="料金・サービス" />
      <Sheet>
        {plans.length === 0 ? (
          <p>表示できるプランがありません。</p>
        ) : (
          plans.map((plan) => (
            <article key={plan.id}>
              <h2>{plan.name}</h2>
              <p>{plan.price?.toLocaleString('ja-JP') ?? '—'} 円</p>
              <p>{plan.description}</p>
            </article>
          ))
        )}
      </Sheet>
    </>
  );
}