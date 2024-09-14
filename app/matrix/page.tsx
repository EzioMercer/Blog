import Matrix, { frontmatter } from './_matrix.mdx';
import { Metadata } from 'next';

export const metadata: Metadata = frontmatter;

const Page = () => <Matrix />

export default Page;