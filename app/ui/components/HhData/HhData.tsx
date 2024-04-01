import { Card } from "../Card/Card"
import styles from '@/app/ui/components/HhData/HhData.module.css'
import Image from "next/image"
import { priceRu } from "@/app/lib/helpers"

export default function HhData({ count, juniorSalary, middleSalary, seniorSalary } : { count : string, juniorSalary: number, middleSalary: number, seniorSalary: number}) {
  return (
    <div className={styles.hh}>
        <Card className={styles.count}>
            <div className={styles.title}>Всего вакансии</div>
            <div className={styles.countValue}>{count}</div>
        </Card>
        <Card className={styles.salary}>
            <div>
                <div className={styles.title}>Start</div>
                <div className={styles.salaryValue}>{priceRu(juniorSalary)}</div>
                <div className={styles.rate}>
                    <Image className={styles.filled} src='/rate.svg' alt='' height={20} width={20}/>
                    <Image src='/rate.svg' alt='' height={20} width={20}/>
                    <Image src='/rate.svg' alt='' height={20} width={20}/>
                </div>
            </div>
            <div>
                <div className={styles.title}>Medium</div>
                <div className={styles.salaryValue}>{priceRu(middleSalary)}</div>
                <div className={styles.rate}>
                    <Image className={styles.filled} src='/rate.svg' alt='' height={20} width={20}/>
                    <Image className={styles.filled} src='/rate.svg' alt='' height={20} width={20}/>
                    <Image src='/rate.svg' alt='' height={20} width={20}/>
                </div>
            </div>
            <div>
                <div className={styles.title}>High level</div>
                <div className={styles.salaryValue}>{priceRu(seniorSalary)}</div>
                <div className={styles.rate}>
                    <Image className={styles.filled} src='/rate.svg' alt='' height={20} width={20}/>
                    <Image className={styles.filled} src='/rate.svg' alt='' height={20} width={20}/>
                    <Image className={styles.filled} src='/rate.svg' alt='' height={20} width={20}/>
                </div>
            </div>
                
        </Card>
    </div>
  )
}
