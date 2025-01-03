 
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './components/HomePage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AddEventPage from './components/AddEventPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/add-event',
    element: <AddEventPage />,
  },
]);

function App() {
  

  return (
    <>
       
      <RouterProvider router={router} />;
        
    </>
  )
}

export default App
