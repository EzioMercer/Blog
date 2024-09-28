import { Metadata } from 'next';

export type MyMetadata = Metadata & {
	tags: string,
	publishDate: string
}