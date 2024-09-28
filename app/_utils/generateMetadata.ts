import { Metadata } from 'next';
import { MyMetadata } from './types/MyMetadata';

const generateMetadata = (frontmatter: MyMetadata): Metadata => {
	const {
		title,
		description,
	} = frontmatter;

	const productionLinkPrefix = 'https://EzioMercer.github.io';

	return {
		...frontmatter,
		title: `${title} | EzioMercer`,
		metadataBase: new URL(productionLinkPrefix),
		openGraph: {
			title: title as string,
			description: description as string,
			type: 'article',
			authors: ['EzioMercer'],
			publishedTime: frontmatter.publishDate,
			tags: frontmatter.tags.split(', ')
		},
		other: {
			'giscus:backlink': `${productionLinkPrefix}/Blog/${title}`
		}
	}
}

export default generateMetadata;