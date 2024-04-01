import { getMenu, getPage } from '@/app/lib/actions'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
 

export const metadata: Metadata = {
    title: 'PageProd'
}

export async function generateStaticParams() {
    const data = await getMenu(0);

    return data.flatMap(item => item.pages.map(page => ({prod: page.alias})))
}

export default async function PageProd({params} : {params: { prod: string }}) {
  const page = await getPage(params.prod)
  
  if (!page || !params) {
    notFound()
  }

  return (
    <div>page with alias - is {params.prod} page is {page.title}</div>
  )
}

 