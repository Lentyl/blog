import { render, screen } from '@testing-library/react'
import Navbar from '@/components/nav/Navbar'
import '@testing-library/jest-dom'
import { loadEnvConfig } from '@next/env'



describe('Navbar', () => {

  beforeEach(() => {
    loadEnvConfig(process.cwd())
  });

  it('should have Navbar text', () => {
    render(<Navbar />)
    const myElem = screen.getByText('DailyBlog')
    expect(myElem).toBeInTheDocument();

  })

  afterEach(() => {

  })



})



