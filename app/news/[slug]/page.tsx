import { connection } from 'next/server';
import { Metadata } from 'next';
import { getNewsDetail } from '@/app/_libs/microcms';
import Article from '@/app/_components/Article';
import styles from './page.module.css';
import ButtonLink from '@/app/_components/ButtonLink';

type Props = {
  params: Promise<{
    slug: string;
  }>;
  searchParams: Promise<{
    dk: string;
  }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  await connection();
  const searchParams = await props.searchParams;
  const params = await props.params;
  const data = await getNewsDetail(params.slug, {
    draftKey: searchParams.dk,
  });

  return {
    title: `${data.title} | KOKYU PILATES`,
    description: data.description,
    openGraph: {
      title: `${data.title} | KOKYU PILATES`,
      description: data.description,
      images: data.thumbnail ? [data.thumbnail.url] : [],
    },
    alternates: {
      canonical: `/news/${params.slug}`,
    },
  };
}

export default async function Page(props: Props) {
  await connection();
  const searchParams = await props.searchParams;
  const params = await props.params;
  const data = await getNewsDetail(params.slug, {
    draftKey: searchParams.dk,
  });
  return (
    <>
      <Article data={data} />
      <div className={styles.footer}>
        <ButtonLink href="/news">お知らせ一覧へ</ButtonLink>
      </div>
    </>
  );
}
