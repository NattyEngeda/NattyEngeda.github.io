import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './styles/tailwind.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/root';
import ErrorPage from './other/error-page';
import Index from './pages/Index';
import ParticlesComponent from './utils/Particles';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Index />,
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root')!);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ParticlesComponent />
    </>
  );
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
