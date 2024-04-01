'use server'
import Image from "next/image"
import { getDummy, getDummyId } from "@/app/lib/actions"
import styles from '@/app/ui/components/SideBar/Sidebar.module.css'
import Link from "next/link"

export async function generateStaticParams() {
    const res = await fetch('https://dummyjson.com/products').then(res => res.json())

    //console.log(res)
    return res.products.map((prod : {id: number})  => {
        id: prod.id
    })
}

export default async function Page({ params } : PageParams) { 
    const data = await getDummyId(params);
    
    async function Tim() {
        const ti = await new Promise((res) => setTimeout(() => { res('something')}, 6000))
        return JSON.stringify(ti)
    }
    console.log(Tim())
    return (
        <div className={styles.wrapper}> 
            {data.title}
            {data.description}
            {data.brand}
            <Image 
                src={data.thumbnail}
                width={130}
                height={130}
                alt="Screenshots of the dashboard project showing desktop version"/>
            <p>promise - {Tim()}</p>
            <Link href='/products'>DOWN</Link>
        </div>)
}

interface PageParams {
    params: {
        id: number,
    }
}

// title: prod.title;
// description: prod.description;
// brand: prod.brand;
// thumbnail: prod.thumbnail;
// title: string,
// description: string,
// brand: string,
// thumbnail: string