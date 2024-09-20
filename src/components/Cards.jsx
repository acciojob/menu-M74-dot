import React from "react";

const Cards = ({img,title,price,desc}) => {
    return(
        <div data-test-id={"menu-item-" + category} style={{display:"flex",width:"450px",height:"150px",border:"1px solid black",marginTop:"30px"}}>
            <div style={{padding:"20px"}}>
                <img src={img} alt="image-borken"/>
            </div>
            <div>
                <div style={{display:"flex",justifyContent:"space-around",padding:"10px"}}>
                    <span style={{fontSize:"18px",fontWeight:"bold"}}>{title}</span>
                    <span style={{color:"orange"}}>${price}</span>
                </div>
                <div style={{textAlign:"justify",padding:"10px"}}>
                    {desc}
                </div>
            </div>
        </div>
    )
}

export default Cards;