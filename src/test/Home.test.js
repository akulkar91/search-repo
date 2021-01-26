import React from 'react'
import { render, fireEvent, screen, cleanup } from '@testing-library/react'
import Home from '../components/Home/Home'
import * as userFetch from '../customHooks/useFetch'
import MockResponse from '../components/Cards/reponse.json'

afterEach(cleanup)

test('Intiall the result should be zero', async () => {
  const { container } = render(<Home />)
  expect(container.getElementsByClassName('card').length).toBe(0)
})

test('Mock response and result should match with response', async () => {
  const mockGetUsers = jest.spyOn(userFetch, 'useFetch')
  mockGetUsers.mockResolvedValue(MockResponse)
  const { container } = render(<Home />)

  fireEvent.change(
    screen.getByTestId('user-input', { target: { value: 'test' } })
  )
  fireEvent.click(screen.getByTestId('user-input-search'))
  expect(screen.getByTestId('148854779')).toBeTruthy()
  expect(container.getElementsByClassName('card').length).toBe(4)
  mockGetUsers.mockRestore()
})
