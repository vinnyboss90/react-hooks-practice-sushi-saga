import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"; //imported Sushi to use as React component in SushiContainer return

function SushiContainer({ sushis, eatSushi }) {
  const sliceSize = 4 //creates constant for "bare" number - helps if we need to change size of slice later
  const [startIndex, setStartIndex] = useState(0) //creates state to "move" sushi along instead of only starting at "0" index. useState(0) helps us create different "slices" and starts off at 0 index
 
  return (
    <div className="belt">
      {sushis
      .slice(startIndex, startIndex + sliceSize) //before we "map" the array, we only want to "slice" out 4 sushi to display at a time - see sliceSize const 
      .map(sushi => <Sushi sushi={sushi} eatSushi={eatSushi} key={sushi.id} />) }
      <MoreButton handleClick={showMore}/>
    </div>
  );

  //function for MoreButton.js. Passes "handleClick" into MoreButton function
  function showMore() {
    setStartIndex(startIndex + sliceSize)
  }
}

export default SushiContainer;