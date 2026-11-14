import Hero from '@/app/_components/Hero';
import Sheet from '@/app/_components/Sheet';

export const metadata = {
  title: 'インストラクター | KOKYU PILATES',
  openGraph: {
    title: 'インストラクター | KOKYU PILATES',
  },
  alternates: {
    canonical: '/members',
  },
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Hero title="Instructors" sub="インストラクター" />
      <Sheet>{children}</Sheet>
    </>
  );
}
