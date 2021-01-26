import { fireEvent, render, screen } from '@testing-library/react'
import App from '../App'
import { themes } from '../Theme/ThemeContext'

test('Renders app component and nav bar menus should display', () => {
  render(<App />)
  expect(screen.getByText(/Home/i)).toBeTruthy()
  expect(screen.getByText(/Git Hub/i)).toBeTruthy()
  expect(screen.getByTestId('container')).toHaveStyle(themes.dark)
})
test('Switch themes', async () => {
  render(<App />)
  const rootEle = screen.getByTestId('container')
  fireEvent.click(screen.getByTestId('switch-theme'))
  expect(rootEle).not.toHaveStyle(themes.dark)
  expect(rootEle).toHaveStyle(themes.light)
})
