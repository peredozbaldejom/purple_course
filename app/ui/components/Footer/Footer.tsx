import { FooterProps } from '@/app/lib/definitions'
import React from 'react'
import styles from '@/app/ui/components/Footer/Footer.module.css'
import cn from 'classnames'
import { format } from 'date-fns'
import Link from 'next/link'

export default function Footer({className, ...props} : FooterProps) : JSX.Element {
  return (
        <footer {...props} className={cn(className, styles.footerGrid)}>
            <div className={styles.data}>Data this year is -{format(new Date(), 'yyyy')}</div>
            <Link href='#' target='_blank' className={styles.info}>First link to site</Link>
            <Link href='#' target='_blank' className={styles.info}>Second link to site</Link>
        </footer>
  )
}

