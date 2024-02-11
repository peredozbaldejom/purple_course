import React from 'react';
import { Tag } from '@/app/lib/definitions';
import styles from '@/app/ui/components/Tag/Tag.module.css'
import cn from 'classnames'
import Link from 'next/link';

export default function Tag({ size='m', children, color='ghost', href, className, ...props  } : Tag) : JSX.Element {
  return (
    <div
        className={cn(styles.tag, className, {
            [styles.s]: size === 's',
            [styles.m]: size === 'm',
            [styles.ghost]: color === 'ghost',
            [styles.green]: color === 'green',
            [styles.primary]: color === 'primary',
            [styles.grey]: color === 'grey',
            [styles.red]: color === 'red',
        })} 
        {...props}
        >{
            href ? <Link href={href}>{children}</Link> : <>{children}</>
        }
    </div>
  )
}
