import { ProductProps } from "@/app/lib/definitions";
import { Card } from "../Card/Card";
import styles from '@/app/ui/components/Product/Product.module.css'
import Rating from "../Rating/Rating";
import Tag from "../Tag/Tag";
import Image from "next/image";
import { Button } from "../Button/Button";
import { declOfNum, priceRu } from "@/app/lib/helpers";
import { Divider } from '../Divider/Divider'
import cn from 'classnames'

export default function Product({product, className, ...props} : ProductProps) : JSX.Element {
  return (
        <Card className={styles.product}>
            <div className={styles.logo}><Image src={product.image} alt='' width={60} height={60}/></div>
            <div className={styles.title}>{product.title}</div>
            <div className={styles.price}>
                {priceRu(product.price)}
                {product.oldPrice && <Tag color="green" className={styles.oldPrice}>{priceRu(product.price - product.oldPrice)}</Tag>}
            </div>
            <div className={styles.credit}>{priceRu(product.credit)}/<span className={styles.month}>мес</span></div>
            <div className={styles.rating}><Rating rating={product.reviewAvg ?? product.initialRating} /></div>
            <div className={styles.tags}>{product.categories.map(c => (<Tag key={c} className={styles.category} color='ghost'>{c}</Tag>))}</div>
            <div className={styles.priceTitle}>цена</div>
            <div className={styles.creditTitle}>кредит</div>
            <div className={styles.rateTitle}>{product.reviewCount} {declOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}</div>
            <Divider className={styles.hr} />
            <div className={styles.description}>{product.description}</div>
            <div className={styles.feature}>
                {product.characteristics.map(c => (
                    <div className={styles.characteristics} key={c.name}>
                        <span className={styles.characteristicsName}>{c.name}</span>
                        <span className={styles.characteristicsDots}></span>
                        <span className={styles.characteristicsValue}>{c.value}</span>
                    </div>    
                ))}
            </div>
            <div className={styles.advBlock}>
                {product.advantages && <div className={styles.advantages}>
                    <div className={styles.advTitle}>Преимущества</div>
                    <div>{product.advantages}</div>
                </div>}
                {product.disadvantages && <div className={styles.disadvantages}>
                    <div>Недостатки</div>
                    <div>{product.disadvantages}</div>
                </div>}
            </div>
            <Divider className={cn(styles.hr, styles.hr2)} />
            <div className={styles.actions}>
                <Button appearance="primary">Узнать подробности</Button>
                <Button appearance="ghost" arrow={'right'} className={styles.reviewButton}>Узнать подробности</Button>
            </div>
        </Card>
  )
}
