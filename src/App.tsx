import './App.css'
import Home from './pages/Home/home'
import ContactUs from './pages/ContactUs/contact-us'
import UserSettings from './pages/UserSettings/user-settings'
import UserPlants from './pages/UserPlants/user-plants'
import UserLocations from './pages/UserLocations/user-locations'
import { Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound/NotFound'
import { useState } from 'react'

export type CounterHookType = {
  count: number,
  inc: () => void,
  dec: () => void,
  incBy: (n: number) => void,
  decBy: (n: number) => void
}

export const useCounter = (initalVal:number): CounterHookType => {
  const [count, setCount] = useState(initalVal);
  const inc = () => setCount(count+1);
  const dec = () => setCount(count-1);
  const incBy = (num:number) => setCount(count + num);
  const decBy = (num:number) => setCount(count - num);

  return {count,inc,dec,incBy,decBy};
}

function App() {
  const {count,inc,dec,incBy,decBy} = useCounter(0);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/settings" element={<UserSettings />} />
        <Route path="/plants" element={<UserPlants />} />
        <Route path="/locations" element={<UserLocations />} />
        <Route path="*" element={<NotFound statusCode={1} />} />
      </Routes>
    </div>
  );
}

export default App
