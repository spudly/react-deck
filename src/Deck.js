import Card from 'react-card';
import React from 'react';
import validateChildren from './validateChildren';

const Deck = ({children}) =>
  <ul className="deck">
    {React.Children.map(children, child => <li>{child}</li>)}
  </ul>;

Deck.displayName = 'Deck';

Deck.Card = Card;

Deck.propTypes = {
  children: validateChildren,
};

export default Deck;
