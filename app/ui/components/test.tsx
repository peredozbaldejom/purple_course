import { getData } from '@/app/lib/actions'
import { useState } from 'react';
import { Test } from '@/app/lib/definitions';

 
export default function Test({dummyData} : Test) {

  const [state, setState] = useState('empty')
  const [count, setCount] = useState(1)

  async function  getting() {
    setCount(count + 1)
    const data = await getData({ id: count });
    const nextState = data.title;
    setState(nextState)
  }
  
  return (
    <div>
      <button onClick={getting}>Test Data - {count} </button>
      <h1>{state}</h1>
      <ul>
          {dummyData && dummyData.products.map((p) => (<li key={p.id}>{p.title} thid is title {p.category}</li>))}
      </ul>
    </div>)
}