import { IInput, ITextArea } from '@/app/lib/definitions'
import styles from '@/app/ui/components/Textarea/Textarea.module.css'
import cn from 'classnames'

export default function Textarea({className, children, ...props} : ITextArea ) : JSX.Element {
  return (
    <textarea className={cn(styles.textarea, className)} {...props}/>
  )
}
