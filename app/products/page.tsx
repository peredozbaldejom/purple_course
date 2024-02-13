'use server'

import { getDummy } from "../lib/actions"
import Link from "next/link";


export default async function Page() {
    const data = await getDummy();
    return <div>
                <ul>
                    products is {data.products.map((p : {id: number, title: string}) => (<li key={p.id}><Link href={`/products/${p.id}`}>{p.title}</Link></li>))}
                    
                </ul>
            </div>
}