import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([])
  const [budget, setBudget] = useState(100)

    useEffect(() => 
      fetch(API)
      .then(res => res.json())
      .then(setSushis), [])

  return (
    <div className="app">
      <SushiContainer sushis={sushis} eatSushi={eatSushi} />
      <Table budget={budget} plates={sushis.filter(sushi => sushi.eaten)} />
    </div>
  );

  //video 052223 Sushi Saga review 58:00
  function eatSushi(sushi) {

    if(budget >= sushi.price) {
    setBudget(budget - sushi.price)

    const newSushis = sushis.map(s => s.id !== sushi.id ? s : {...s, eaten: true})
    setSushis(newSushis)
    }
  }

}

export default App;