'use client';

import Giscus from '@giscus/react';

const Comments = () => (
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
)

export default Comments;