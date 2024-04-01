'use server'
import { MenuItem, FirstLevelMenuItem, TopLevelCategory } from "./definitions";


const API = {
    topPage: {
        find: process.env.NEXT_PUBLIC_DOMAIN2 + '/api/top-page/find',
        byAlias: process.env.NEXT_PUBLIC_DOMAIN2 + '/api/top-page/byAlias'
    },
    product: {
        find: process.env.NEXT_PUBLIC_DOMAIN2 + '/api/product/find'
    },
    review: {
        createDemo: process.env.NEXT_PUBLIC_DOMAIN2 + '/api/review/create-demo'
    }
} 

export async function getPage(prod: string) {
    const res = await fetch(`${API.topPage.byAlias}/${prod}`);
    if (!res.ok) {
        return null
    }
    return res.json()
}

export async function getMenu(firstCategory: number) : Promise<MenuItem[]> {
    const res = await fetch(API.topPage.find, {
        method: 'POST',
        body: JSON.stringify({firstCategory}),
        headers: new Headers({'content-type': 'application/json'})
    })
    return res.json();
}

export async function getProducts(prod: string) {
    const res = await fetch(API.product.find, {
        method: 'POST',
        body: JSON.stringify({
            category: prod,
            limit: 10
        }),
        headers: new Headers({'content-type': 'application/json'})
    });

    if (!res.ok) {
        return null
    }
    return res.json()
}

export async function getData({ id = 1 }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
    
    return res.json()
}

export async function getTest() {
    // const data = await fetch('http://localhost:5560/data')
    const data = await fetch('http://192.168.0.100:5560/data')
    

    if (!data.ok) {
      throw new Error('local server fail')
    }
    
    return data.json()
  }


export async function getDummy<RootDummy>() {
    const res = await fetch(process.env.NEXT_PUBLIC_DOMAIN + '/products')

    if (!res.ok) {
        throw new Error('Failed to fetch DummyData')
    }

    return res.json()
}

export async function getDummyId({ id } : {id: number}) {
    const res = await fetch(process.env.NEXT_PUBLIC_DOMAIN + '/products/' + id)

    if (!res.ok) {
        throw new Error('Failed to fetch DummyData')
    }

    return res.json()
}

export async function Categories<TCategories>() {
    const res = await fetch(process.env.NEXT_PUBLIC_DOMAIN + '/products/categories/')

    if (!res.ok) {
        throw new Error('Failed to fetch Categories')
    }

    return res.json()
}