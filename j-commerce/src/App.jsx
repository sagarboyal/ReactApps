import { FaBeer } from 'react-icons/fa';
import './App.css'


function App() {
  toast.success('Successfully toasted!');
  toast.error("This didn't work.")
  return (
    <div className='flex justify-center items-center h-screen bg-gray-800 text-white text-2xl font-bold'>
      <Toaster/>
      <FaBeer />
    </div>
  )
}

export default App;
