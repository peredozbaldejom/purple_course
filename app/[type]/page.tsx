import { getMenu, getPage, getProducts } from '@/app/lib/actions'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { firstLevelMenu } from '@/app/lib/helpers'


export const metadata: Metadata = {
    title: 'first category'
}

export async function generateStaticParams() {    
    return firstLevelMenu.map(m => ({type: m.route}))
}

export default async function Courses({params} : {params: {type: string }}) {  

  const firstCategory = firstLevelMenu.find(m => params.type == m.route)

  if (!firstCategory) {
    notFound()
  }

  if (!params ) {
    notFound()
  }

  return (
    <div>page with only TYYYPEEE - is  {JSON.stringify(params)} and firstCategory {JSON.stringify(firstCategory)}</div>
  )
}
