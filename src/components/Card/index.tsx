import React from 'react'
import { parseDate } from '../../utils/common'
import { makeRequest } from '../../utils/makeRequest'
import { UPDATE_POST_DATA } from '../../constants'

export interface CardProps {
  id: number
  date: string
  readingTime?: string
  title: string
  description: string
  claps: number
  liked: boolean
  image: string
}

export default function Card ({
  id,
  date,
  readingTime,
  title,
  image,
  description,
  claps,
  liked
}: CardProps): JSX.Element {
  const [like, setLike] = React.useState(liked)
  const [currentClaps, setClaps] = React.useState((claps))
  const handleLikeChange = (): void => {
    makeRequest(UPDATE_POST_DATA(id, { liked: !like })).then((data) => {
      setLike(data.data.liked)
    }).catch((error) => {
      console.log(error.message)
    })
  }

  const handleClapChange = (): void => {
    makeRequest(UPDATE_POST_DATA(id, { claps: currentClaps + 1 })).then((data) => {
      setClaps(data.data.claps)
    }).catch((error) => {
      console.log(error.message)
    })
  }
  return (
        <div className='display-box' data-testid='box'>
            <img src={image} />
            <div className='box-data'>
                <div className='box-date'>
                    <p> {parseDate(date)}</p>
                    <p>{readingTime ?? '1 min'}</p>
                </div>
                <div className='box-title'><p>{title}</p></div>
                <div className='box-desc'><p>{description}</p></div>
                <div className='box-divider'></div>

                <div className='box-likes'>
                    <div data-testid='clap-button' onClick={handleClapChange} className='claps'>
                        <i className='icon-clap'></i>
                        <p >{currentClaps}</p>
                    </div>
                    <i
                        data-testid='like-button'
                    onClick={handleLikeChange}
                        className={
                            like ? 'icon-heart-red' : 'icon-heart-black'
                        }
                    ></i>
                </div>
            </div>
        </div>
  )
}
