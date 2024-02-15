import React from "react";

//because eatSushi will be changing the state in App.js, we'll need to pass it through to SushiContainer
function Sushi({ sushi, eatSushi}) {
  const { name, img_url, price } = sushi //alternative to writing out "sushi.name", "sushi.img_url", etc. - destructures sushi
  
  return (
    <div className="sushi">
      <div className="plate" onClick={() => eatSushi(sushi)}>
        {sushi.eaten ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}
//sushi.eaten property is added and is possible due to db being json. "eaten" property is not immedietly supported by the db

export default Sushi;