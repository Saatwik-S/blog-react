import React, { useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Card, { type CardProps } from '../../components/Card'
import { makeRequest } from '../../utils/makeRequest'
import { GET_BLOG_POSTS } from '../../constants'
export default function Home (): JSX.Element {
  const [data, setData] = React.useState<CardProps[] | null>(null)
  const [error, setError] = React.useState<Error | null>(null)
  useEffect(() => {
    makeRequest(GET_BLOG_POSTS()).then(setData).catch((error) => {
      console.log(error.message)

      setError(error)
    })
  }, [])
  if (error != null) {
    return <div>{error.message}</div>
  }

  return (
        <div className='body'>
            <Header />
            <div className='main-body paddings'>
               {(data != null)
                 ? data?.sort((a, b) => (a.title.localeCompare(b.title))).map((item, index) => (
                    <Card key={index} {...item} />
                 ))
                 : <div>Loading...</div>}
            </div>
            <Footer />
        </div>
  )
}
