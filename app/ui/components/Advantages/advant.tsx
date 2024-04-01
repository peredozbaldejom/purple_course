import Image from "next/image"
import Htag from "../Htag/Htag"
import PTag from "../PTag/PTag"
import styles from '@/app/ui/components/Advantages/advant.module.css'
import { Advantage } from "@/app/lib/definitions"

export default function Advant({advantages} : {advantages : Advantage[]}) {
  return (
    advantages.map(a => (
      <div key={a._id} className={styles.wrapper}>
          <Image className={styles.pic} src='/advant.svg' width={50} height={50} alt=' '/>
          <Htag className={styles.title} tag="h3">{a.title}</Htag>
          <PTag className={styles.desc} size="m">{a.description}</PTag>    
      </div>
    ))
  )  
}
