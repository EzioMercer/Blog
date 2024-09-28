import { Metadata } from 'next';
import { MyMetadata } from './types/MyMetadata';

const generateMetadata = (frontmatter: MyMetadata): Metadata => {
	const {
		title,
		description,
	} = frontmatter;

	const productionLinkPrefix = 'https://EzioMercer.github.io/Blog/';

	return {
		...frontmatter,
		title: `${title} | EzioMercer`,
		openGraph: {
			title: title as string,
			description: description as string,
			type: 'article',
			images: productionLinkPrefix + 'favicon.ico',
			authors: ['EzioMercer'],
			publishedTime: frontmatter.publishDate,
			tags: frontmatter.tags.split(', '),
		},
		other: {
			'giscus:backlink': productionLinkPrefix + title
		}
	}
}

export default generateMetadata;