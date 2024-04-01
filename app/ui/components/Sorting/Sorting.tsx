'use client'
import { SortEnum, SortProps } from "@/app/lib/definitions";
import cn from 'classnames'
import styles from '@/app/ui/components/Sorting/Sorting.module.css'
import Image from "next/image";

export default function Sorting({sort, setSort, className, ...props} : SortProps) : JSX.Element {
  return (
    <div className={cn(styles.sort, className)} {...props}>
        <span 
            onClick={() => setSort(SortEnum.rating)}
            className={cn({
                [styles.active] : sort == SortEnum.rating
            })}>
            <Image className={styles.icon} src='/sort.svg' width={20} height={20} alt=' '/>По&nbsp;рейтингу
        </span>
        <span
            onClick={() => setSort(SortEnum.price)}
            className={cn({
                [styles.active] : sort == SortEnum.price
            })}>
            <Image className={styles.icon} src='/sort.svg' width={20} height={20} alt=' '/>По&nbsp;цене
        </span>
    </div>
  )
}
