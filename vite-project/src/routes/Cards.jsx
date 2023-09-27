import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";

export const Cards = () => {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.card.cards);
  console.log(cards)

  return (
    <>
      <h2>Your cards:</h2>
      <div>
        {cards.map((card, i) => {
          return (
            <>
              <div key={card.id} className="card">
                <p>{card.cardNumber}</p>
                <p>{card.firstName.toUpperCase()} {card.lastName.toUpperCase()}</p>
                <div className="wrapper-valid-cvv-vendor">
                  <p>{card.validMonth}/{card.validYear}</p>
                  <p>{card.cvv}</p>
                  <p>{card.vendor}</p>
                </div>
              </div>
            </>
          )
        })}
      </div>
    </>
  );
};