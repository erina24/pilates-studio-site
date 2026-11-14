import { Metadata } from 'next';
import { getMeta } from '@/app/_libs/microcms';
import Footer from '@/app/_components/Footer';
import Header from '@/app/_components/Header';
import './globals.css';
import styles from './layout.module.css';

export async function generateMetadata(): Promise<Metadata> {
  const data = await getMeta();

  return {
    icons: { icon: '/icon.svg' },
    metadataBase: new URL(process.env.BASE_URL || 'http://localhost:3000'),
    title: 'KOKYU PILATES',
    description: data?.description || '呼吸からはじめる、ピラティス。KOKYU PILATESのスタジオ案内。',
    openGraph: {
      title: 'KOKYU PILATES',
      description: data?.ogDescription,
      images: ['/studio-hero.png'],
    },
    alternates: {
      canonical: data?.canonical,
    },
  };
}

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: Props) {
  return (
    <html lang="ja">
      <body className={styles.body}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
