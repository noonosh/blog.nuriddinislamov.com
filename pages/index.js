import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import layoutStyle from '../components/layout.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import Image from 'next/image';

export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	return {
		props: {
			allPostsData,
		},
	};
}

export default function Home({ allPostsData }) {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<p>
					🥸 Greets! I am a Software Engineer working in Python and
					JavaScript. You can reach me out on{' '}
					<a href='https://t.me/nuriddin_i' target='_blank'>
						Telegram
					</a>
					.
				</p>
			</section>
			<section
				className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
				<h2 className={utilStyles.headingLg}>Blog</h2>
				<ul className={utilStyles.list}>
					{allPostsData.map(({ id, date, title }) => (
						<li className={utilStyles.listItem} key={id}>
							<Link href={`/posts/${id}`}>
								<a>{title}</a>
							</Link>
							<br />
							<small className={utilStyles.lightText}>
								<Date dateString={date} />
							</small>
						</li>
					))}
				</ul>
			</section>
			<footer>
				<div className={`${layoutStyle.footer} ${utilStyles.border}`}>
					<div>
						<Link href='https://github.com/nuriddinislamov'>
							<a target='_blank'>
								<Image
									priority
									src='/images/github.png'
									className={utilStyles.borderCircle}
									height={32}
									width={32}
									alt='GitHub logo'
								/>
							</a>
						</Link>
					</div>
					<div>
						<Link href='https://t.me/nuriddin_i'>
							<a target='_blank'>
								<Image
									priority
									src='/images/telegram.png'
									className={utilStyles.borderCircle}
									height={32}
									width={32}
									alt='Telegram logo'
								/>
							</a>
						</Link>
					</div>
					<div>
						<Link
							href='mailto:nuriddinislamov@icloud.com'
							target='_blank'>
							<a>
								<Image
									priority
									src='/images/mail.png'
									className={utilStyles.borderCircle}
									height={32}
									width={32}
									alt='Mail logo'
								/>
							</a>
						</Link>
					</div>
				</div>
			</footer>
		</Layout>
	);
}
