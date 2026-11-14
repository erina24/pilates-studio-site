import Image from 'next/image';
import { getMembersList } from '@/app/_libs/microcms';
import styles from './page.module.css';
import { connection } from 'next/server';

type Props = {
  searchParams: Promise<{
    dk: string;
  }>;
};

export default async function Page(props: Props) {
  await connection();
  const searchParams = await props.searchParams;
  const data = await getMembersList({
    draftKey: searchParams.dk,
  });
  return (
    <div className={styles.container}>
      {data.contents.length === 0 ? (
        <p className={styles.empty}>インストラクターの情報は準備中です。</p>
      ) : (
        <ul>
          {data.contents.map((member) => (
            <li key={member.id} className={styles.list}>
              {member.image?.url &&
                !/(?:simple|no-image)/i.test(decodeURIComponent(member.image.url)) && (
                  <Image
                    src={member.image.url}
                    alt={`${member.name}の写真`}
                    width={member.image.width || 480}
                    height={member.image.height || 600}
                    className={styles.image}
                  />
                )}
              <dl>
                <dt className={styles.name}>{member.name}</dt>
                <dd className={styles.position}>{member.position}</dd>
                <dd className={styles.profile}>{member.profile}</dd>
              </dl>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
