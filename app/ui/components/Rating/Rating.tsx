import { RatingProps } from "../../../lib/definitions";
import styles from "@/app/ui/components/Rating/Rating.module.css"
import Image from "next/image";
import { useEffect, useState, KeyboardEvent } from "react";
import cn from 'classnames'

export default function Rating({ isEditable = false, rating, setRating, ...props} : RatingProps) : JSX.Element {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>))  

  useEffect(() => {
    constructRating(rating);
  }, [rating])  

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
        return (
            <span 
                key={i}
                className={cn(styles.star, {
                    [styles.filled]: i < currentRating,
                    [styles.iseditable]: isEditable 
                })}
                onMouseEnter={() => changeDisplay(i + 1)}
                onMouseLeave={() => changeDisplay(rating)}
                onClick={() => onClick(i+1)}>
                <Image 
                    src='/star.svg'
                    alt=''
                    height={20}
                    width={20}
                    tabIndex={isEditable ? 0 : -1}
                    onKeyDown={(e: KeyboardEvent<HTMLImageElement>) => isEditable && handleClick(i + 1, e)}
                />
            </span>
        )
    })
    setRatingArray(updatedArray);
  }

  const changeDisplay = (rating: number) => {
    if (!isEditable) {
        return ;
    }
    constructRating(rating)
  }

  const onClick = (i: number) => {
    if (!isEditable || !setRating ) {
        return ;
    }
    setRating(i)
  }

  const handleClick = (i: number, e: KeyboardEvent<HTMLImageElement>) => {
    if (e.code != 'Space' || !setRating) {
        return
    }
    setRating(i);
  }

  return (
    <div {...props}>
        {ratingArray.map((r, i) => (<span key={i}>{r}</span>))}
    </div>
  )
}

