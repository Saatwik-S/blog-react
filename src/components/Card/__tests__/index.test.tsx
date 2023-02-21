import { fireEvent, render } from '@testing-library/react'
import Card from '..'
import React from 'react'
// import { jest } from '@jest/glosbals'

jest.mock('../../../utils/makeRequest', () => () => Promise.resolve({ data: { liked: true } }))

describe('Test Card Component', () => {
  describe('Like Button', () => {
    it('Should Change the like color from empty to red', () => {
      const props = {
        id: 2,
        date: '2023-01-01T07:46:22.001Z',
        reading_time: '1 min',
        title: 'How painting outdoors can transform your ',
        description: 'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your readers for more. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc egestas laoreet nibh euismod vestibulum.',
        claps: 1,
        liked: true,
        image: 'https://i.ibb.co/8cDkQkS/outdoor.png'
      }
      const { getByTestId } = render(<Card {...props} />)
      const likeButton = getByTestId('like-button')
      fireEvent.click(likeButton)
      expect(likeButton).toHaveClass('icon-heart-red')
    })

    // xit('should increment the claps', () => {
    //   const fnMocker = jest.requireActual('../../../utils/makeRequest')
    //   jest.spyOn(fnMocker, 'makeRequest').mockResolvedValue({ data: { claps: 11 } }

    //   const { getByTestId } = render(<Card claps={10} />)
    //   const clapButton = getByTestId('clap-button')
    //   fireEvent.click(clapButton)
    //   expect(clapButton).toHaveTextContent('11')
    // })
  })
})
