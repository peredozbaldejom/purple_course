'use client'
import styles from './page.module.css'
import Htag from './ui/components/Htag/Htag';
import { Button } from './ui/components/Button/Button';
import PTag from './ui/components/PTag/PTag';
import Tag from './ui/components/Tag/Tag';
import { useEffect, useState } from 'react';
import Rating from './ui/components/Rating/Rating';
import Test from './ui/components/test';
import { getData, getDummy, getTest } from './lib/actions';
import Link from 'next/link';

export default function Home() {

  const a = '!';
  const [count, setCount] = useState(1)
  const [rating, setRating] = useState<number>(3)
  const [info, setInfo] = useState({userId: '',  id: '', title: '', completed: ''})
  const [prod, setProd] = useState({products: Array(100)})
  const [test, setTest] = useState({"message": {"first": "easy","second":"","third":""}, "download": {"mass":['nothing']}})


  async function getServ() {
    const data = await getTest();
    // console.log(data);
    const nextData = {...test, ...data}
    setTest(nextData);
  }

  useEffect(() => {
    console.log(count + '    <--- its count');

    async function getInfo() {
      const data = await getData({ id: count});
      const nextData = {...info, ...data}
      setInfo(nextData)
    }  

    async function getProd() {
      const data = await getDummy();
      const nextData = {...prod, products: [...data.products]};
      // console.log(nextData);
      setProd(nextData);
    }
    
    getInfo();
    getProd();

    return function clean() {
      console.log('Hook is done')
    }
  }, [count])

  
  return (
    <main className={styles.main}>
      <h1>Main Page - {count}</h1>
      <p>it is string</p>
      <Htag tag='h1'>{info.id} --- {info.title}</Htag>
      <Htag tag='h1'>Text h1</Htag>
      <Htag tag='h2'>H2</Htag>
      <Htag tag='h3'>Text h3</Htag>
      <Htag tag='h3'>{test.message.first}</Htag>
      <Button appearance='primary' arrow='down' onClick={() => {setCount(count + 1)}}>button p</Button>
      <Button appearance='ghost' arrow='right'>button g</Button>
      <Button appearance='ghost' arrow='right' onClick={getServ}>button console</Button>
      <PTag size='s'> Text P1 </PTag>
      <PTag > {test.download.mass[0]} </PTag>
      <PTag size='l'> Text P3 </PTag>
      <Link href='/products'><Tag size='s' color='green'>Green Products</Tag></Link>
      <Tag size='m' color='primary'>primary</Tag>
      <Tag size='m' color='red'>RED</Tag>
      <Tag href='/' color='grey'> grey href</Tag>
      <Rating rating={rating} isEditable setRating={setRating}></Rating>
      <Test dummyData={prod} />
    </main>
  )
}
