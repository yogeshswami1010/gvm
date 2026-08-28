import { notFound } from 'next/navigation';
import { GvmPage } from '../gvm-page';
import { pages } from '../gvm-content';

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pages[slug];
  if (!page) notFound();
  return <GvmPage page={page}/>;
}
