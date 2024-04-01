'use server'
import React from 'react'
import { getDummy } from '@/app/lib/actions'
import Link from 'next/link';
import Menu from '../Menu/Menu';
import Image from 'next/image';
import cn  from 'classnames'
import styles from '@/app/ui/components/SideBar/Sidebar.module.css'

export default async function Sidebar({className, ...props}): Promise<JSX.Element> {

  return (
    <div className={cn(className, styles.sidebar)} {...props} >
        <Image src='/logo.svg' alt='' height={43} width={159} className={styles.logo}/>
        <Link href='/' className={styles.link}>HOME</Link>
        <Menu className={styles.menu}/>
    </div>
  )
}
