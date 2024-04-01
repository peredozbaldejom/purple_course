import { getMenu, getPage, getProducts } from '@/app/lib/actions'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { firstLevelMenu } from '@/app/lib/helpers'
import TopPageComponent from '@/app/ui/components/TopPage/TopPageComponent'

export const metadata: Metadata = {
    title: 'PageProd'
}

export async function generateStaticParams() {
    // const data = await getMenu(0);
    let testData : {type: string, alias: string}[] = []
    

    for (let m of firstLevelMenu) {
      const menu = await getMenu(m.id)
      if (!menu) {
        notFound()
      }
      testData = testData.concat(menu.flatMap(item => item.pages.map(p => ({type: m.route, alias: p.alias}))))
    }
    
    return testData
}

export default async function TopPage({params} : {params: { alias: string, type: string }}) {
  const page = await getPage(params.alias)
  
  const firstCategory = firstLevelMenu.find(m => params.type == m.route)

  if (!firstCategory) {
    notFound();
  }

  if (!page || !params) {
    notFound()
  }

  const products = await getProducts(page.category)

  return <TopPageComponent page={page} products={products} firstCategory/>
}
