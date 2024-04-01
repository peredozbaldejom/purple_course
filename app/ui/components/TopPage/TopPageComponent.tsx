'use client'
import HhData from "../HhData/HhData";
import Htag from "../Htag/Htag";
import Tag from "../Tag/Tag";
import styles from '@/app/ui/components/TopPage/TopPageComponent.module.css'
import Advant from "../Advantages/advant";
import PTag from "../PTag/PTag";
import Sorting from "../Sorting/Sorting";
import { SortEnum } from "@/app/lib/definitions";



export default function TopPageComponent({page, products, firstCategory}) {

  return (
    <div className={styles.wrapper}>
        <div className={styles.title}>
            <Htag tag='h1'>{page.title}</Htag>
            {products && <Tag className={styles.tag} color='grey' size='m'>{products.length}</Tag>}
            <Sorting sort={SortEnum.rating} setSort={() => {console.log('sort')}}/>
        </div>
        <div>
            {products && products.map(p => (<div key={p._id}>{p.title}</div>))}
        </div>
        <div className={styles.hhTitle}>
            <Htag  tag='h2'>Вакансии {page.category}</Htag>
            {products && <Tag className={styles.tag} color='red' size='m'>hh.ru</Tag>}
        </div>
        <HhData {...page.hh} />
        <div className={styles.hhTitle}>
            <Htag  tag='h2'>Преимущества </Htag>
        </div>
        {page.advantages && page.advantages.length > 0 && <Advant advantages={page.advantages}/>}
        {page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{ __html: page.seoText}}/>}
        <Htag tag='h2'>Получаемые навыки</Htag>
        {page.tags && page.tags.map(t => <Tag key={t} size="m" color='primary'>{t}</Tag>)}
    </div>
  )
}
 