'use server'

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


export async function getDummy() {
    const res = await fetch(process.env.NEXT_PUBLIC_DOMAIN + '/products')

    if (!res.ok) {
        throw new Error('Failed to fetch DummyData')
    }

    return res.json()
}
