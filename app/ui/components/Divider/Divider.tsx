import { DividerProps } from '@/app/lib/definitions'
import styles from '@/app/ui/components/Divider/Divider.module.css'
import cn from 'classnames'

export const Divider = ({className, ...props}: DividerProps): JSX.Element => {
    return (
        <hr className={cn(className, styles.hr)} {...props} />
    )
}