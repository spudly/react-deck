import React from 'react';
import validateChildren from './validateChildren';
import Card from 'react-card';

const Deck = ({children}) => (
  <ul className="deck">
    {React.Children.map(children, child => <li>{child}</li>)}
  </ul>
);

Deck.Card = Card;

Deck.propTypes = {
  children: validateChildren,
};

export default Deck;
