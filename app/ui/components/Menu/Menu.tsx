'use client'
import { useContext } from 'react'
import { TopLevelCategory, FirstLevelMenuItem, MenuItem, PageItem } from '@/app/lib/definitions'
import Link from 'next/link'
import cn from 'classnames'
import styles from '@/app/ui/components/Menu/Menu.module.css'
import { getMenu } from '@/app/lib/actions'
import { AppContext } from '../Context/App.Context'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { firstLevelMenu } from '@/app/lib/helpers'



export default function Menu({className}): JSX.Element {
    const { menu, firstCategory, setMenu } = useContext(AppContext);
    const pathname = usePathname();

    const openSecondLevel = (secondCategory: string) => {
        console.log(secondCategory)
        setMenu && setMenu(menu.map(m => {
            if (m._id.secondCategory == secondCategory) {
                console.log(m.isOpen)
                m.isOpen = !m.isOpen
                console.log(m.isOpen)
            }
            return m;
        }))
    }

    const bulidFirstLevel = () => {
        return (
            <>
                {firstLevelMenu.map(m => 
                    (<div key={m.route}>
                        <Link href={`/${m.route}`}>
                            <div className={cn(styles.firstLevel, {
                                [styles.firstLevelActive]: m.id == firstCategory
                            })}>
                                <Image src={m.icon} height={20} width={20} alt=''/>
                                <span>{m.name}</span>
                            </div>
                        </Link>
                        {m.id == firstCategory && bulidSecondLevel(m)}
                    </div>
                ))}
            </>)
  }   
  
  const bulidSecondLevel = (menuItem: FirstLevelMenuItem) => {
      return (
        <div className={styles.secondBlock}>
            {menu.map(m => {
                // console.log(pathname.split('/')[2], m.pages)
                if (m.pages.map(p => p.alias).includes(pathname.split('/')[2])) {
                    m.isOpen = true;
                    // console.log(m.isOpen, '<m is open and - pathname>', pathname)
                }
                return (
                    <div key={m._id.secondCategory}>
                        <div className={styles.secondLevel} onClick={() => openSecondLevel(m._id.secondCategory)}>{m._id.secondCategory}</div>
                        <div className={cn(styles.secondLevelBlock, {
                            [styles.secondLevelBlockOpened]: m.isOpen
                        })}>
                            {bulidThirdLevel(m.pages, menuItem.route)}
                        </div>
                    </div>    
            )})}
        </div>)
  }   
  
  const bulidThirdLevel = (pages: PageItem[], route: string) => {
      return (
        pages.map(p => (
            <Link href={`/${route}/${p.alias}`} key={p.alias} className={cn(styles.thirdLevel, {
                [styles.thirdLeveActive]: `/${route}/${p.alias}` == pathname
            })}>
                {p.category}
            </Link>
            ))
      )
  } 
    
return (
    <div className={styles.menu}>
        Menu: {bulidFirstLevel()}
    </div>
    )}


