import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Header from '../layouts/Header'
import 'react-toastify/dist/ReactToastify.css';

// import Footer from '../layouts/Footer'
// import ParticlesComponent from '../utils/Particles';

export default function Root() {
  return (
    <>
      <Header />
      <main className='w-full min-h-screen gradient_background pt-10 md:pt-28'>
        <Outlet />
        <ToastContainer />
      </main>
      {/* <Footer /> */}
    </>
  )
}
