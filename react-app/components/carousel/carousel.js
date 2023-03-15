import React, { useState } from 'react';

const Carousel = (props) => {  
  const data = props.data.movie;
  const [prev, setPrev] = useState(0);
  const [next, setNext] = useState(1);
  const [current, setCurrent] = useState(2);

  function setNextF(){
    setPrev(current);
    setCurrent(current+1);
    setNext(next+1);
  }

  function setPrevF(){
    setCurrent(current-1)
    setPrev(prev-1);
    setNext(current+1);
  }
  // Fetch data from latest movie endpoint 
  /**
   * response be like 
   * Full image url
   * Title name
   * Description
   * ratings
   * movie id
   */
  return (
    <div className='w-full h-96 flex flex-row'>
      <div style={{ width: '10%', borderRadius: '6px', padding: '4px', border: '1px solid blue' }}>
        <img src={data[prev].img} style={{ maxWidth: '100%' }} className='w-full h-full object-fill' />
      </div>
      <div style={{ width: '80%', borderRadius: '6px', padding: '4px', border: '1px solid blue' }}>
        <img src={data[current].img} style={{ maxWidth: '100%' }} className='w-full h-full object-fill' />
        <div className='flex flex-col w-full h-full justify-between absolute top-0 left-36' style={{zIndex:2}}>
          <div>a</div>
          <div className='flex flex-row justify-between'>
            <div><button onClick={setPrevF}>prev</button></div>
            <div><button onClick={setNextF}>next</button></div>
          </div>
          <div>c</div>
        </div>
      </div>
      <div style={{ width: '10%', borderRadius: '6px', padding: '4px', border: '1px solid blue' }}>
        <img src={data[next].img} style={{ maxWidth: '100%' }} className='w-full h-full object-fill' />
      </div>
    </div>
  )
}
export default Carousel;
export {
  Carousel
}