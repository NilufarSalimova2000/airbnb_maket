import React from 'react';
import { data } from './Data/data';
import { Card } from './components/card/card';
import './App.scss'
import MainLayout from "../src/Layout/main_layout"

function App() {

  return (
    <>
      <MainLayout>
        <div className='list'>
          {data.map((item) => (
            <Card
              key={item.id}
              img={item.img}
              title={item.title}
              star={item.star}
              cost={item.cost}
              description={item.description}
              time={item.time}
              price={item.price}
              night={item.night}
            />
          ))}

        </div>
      </MainLayout>
    </>
  )
}

export default App;
