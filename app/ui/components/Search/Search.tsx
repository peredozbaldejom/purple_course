'use client'
import styles from '@/app/ui/components/Search/Search.module.css'
import Input from '../Input/Input'
import { Button } from '../Button/Button'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Search() {
  const [search, setSearch] = useState('')  
  const router = useRouter()
  
  const goSearch = () => {
    router.push(`/search/${search}`)
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key == 'Enter') {
        goSearch()
    }
  } 
  return (
    <div className={styles.search}>
        <Input 
            className={styles.input} 
            placeholder='поиск...'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyDown}
            />
        <Button 
            appearance='primary' 
            className={styles.button} 
            onClick={goSearch}
            >
            <Image className={styles.image} src='/glass.svg' height={15} width={15} alt=''/>
        </Button>
    </div>
  )
}
