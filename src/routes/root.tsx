import { Outlet } from 'react-router-dom';

import Header from '../layouts/Header'
import Footer from '../layouts/Footer'

export default function Root() {
  return (
    <>
      <Header />
      <main className='w-full min-h-screen bg-gray-600 py-20'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
