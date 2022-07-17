import React from "react";
import Images from "./Images";
function Cards(props) {
    return (
        <div className="cards">
            <div className="card">
                <Images imgsrc={props.imgsrc} className='card_img' />
                <div className="card-info">
                    <span className="card_catg">{props.title}</span>
                    <h3 className="card_title"> {props.SName}</h3>
                    <a href={props.refrence} target="_blank">
                        <div className="cent">
                            <button> Watch Now</button>
                        </div>
                    </a>

                </div>
            </div>

        </div>

    );
}
export default Cards;