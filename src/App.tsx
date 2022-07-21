import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

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
      <div>
          <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>Vite + React</h1>
      <div className="card">
          <button onClick={() => {inc()}}>
            count is {count}
          </button>
          <p className='text-red-500'>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
