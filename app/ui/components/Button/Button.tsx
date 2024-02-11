import styles from '@/app/ui/components/Button/Button.module.css'
import { ButtonProps } from '@/app/lib/definitions'
import cn from 'classnames'
import Image from 'next/image'

export const Button = ({ children, arrow = 'none', appearance, className, ...props} : ButtonProps) : JSX.Element => {
  return (
    <button 
        className={cn(styles.button, className, {
            [styles.primary]: appearance == 'primary',
            [styles.ghost]: appearance == 'ghost',
        })} 
        {...props}
    >
        {children}
        {arrow != 'none' && <span className={cn(styles.arrow, {
          [styles.down]: arrow == 'down',
          [styles.right]: arrow == 'right',          
        })}>
          <Image src="/vector.svg"
            width={10}
            height={10}
            alt=""
            className={cn({
              [styles.svgP]: appearance == 'primary'
            })}
            />
          </span>}
    </button>
  )
}

