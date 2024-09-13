'use client';

import Test /*, { frontmatter }*/ from './_test.mdx';
// import { Metadata } from 'next';
import Giscus from '@giscus/react';

// export const metadata: Metadata = frontmatter;

export default function Page() {
	return (
		<>
			<Test />

			<Giscus
				id="comments"
				repo="EzioMercer/Blog"
				repoId="R_kgDOMwHW1Q"
				category="General"
				categoryId="DIC_kwDOMwHW1c4CidB2"
				mapping="title"
				reactionsEnabled="1"
				emitMetadata="1"
				inputPosition="bottom"
				theme="dark"
				lang="en"
				loading="lazy"
			/>

			<p>TEST</p>

			<iframe src="https://giscus.app/en/widget?origin=https%3A%2F%2Fcdpn.io%2Fcpe%2Fboomboom%2Findex.html%3Fkey%3Dindex.html-9c1830a0-606b-99bd-7c72-2b642aa944ab&session=&theme=dark&reactionsEnabled=1&emitMetadata=1&inputPosition=bottom&repo=EzioMercer%2FBlog&repoId=R_kgDOMwHW1Q&category=General&categoryId=DIC_kwDOMwHW1c4CidB2&strict=1&description=&backLink=https%3A%2F%2Fcdpn.io%2Fcpe%2Fboomboom%2Findex.html%3Fkey%3Dindex.html-9c1830a0-606b-99bd-7c72-2b642aa944ab&term=CodePen+Demo"></iframe>
		</>

	)
}