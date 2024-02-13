'use server'
import React from 'react'
import { getDummy } from '@/app/lib/actions'
import Link from 'next/link';


export default async function Sidebar({...props}): Promise<JSX.Element> {
  const data = await getDummy();
  return (
    <div {...props}>
        Sidebar
        <Link href='/'>HOME</Link>
        {data && data.products.map((p : {id: number, title: string}) => <li key={p.id}><Link href={`/products/${p.id}`}>{p.title}</Link></li>)}
    </div>
  )
}
