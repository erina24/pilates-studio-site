import { connection } from 'next/server';
import { notFound } from 'next/navigation';
import { getNewsList } from '@/app/_libs/microcms';
import { NEWS_LIST_LIMIT } from '@/app/_constants';
import Pagination from '@/app/_components/Pagination';
import ArticleList from '@/app/_components/NewsList';

type Props = {
  params: Promise<{
    current: string;
  }>;
};

export default async function Page(props: Props) {
  await connection();
  const params = await props.params;
  const current = Number(params.current);
  if (!/^\d+$/.test(params.current) || !Number.isSafeInteger(current) || current < 1) notFound();
  const data = await getNewsList({
    limit: NEWS_LIST_LIMIT,
    offset: NEWS_LIST_LIMIT * (current - 1),
  });
  if (current > 1 && data.contents.length === 0) notFound();
  return (
    <>
      <ArticleList articles={data.contents} />
      <Pagination totalCount={data.totalCount} current={current} basePath="/news" />
    </>
  );
}
