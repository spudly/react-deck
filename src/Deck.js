import React from 'react';
import validateChildren from './validateChildren';
import Card from 'react-card';

class Deck extends React.Component {
  render() {
    return (
      <ul className='deck'>
        {React.Children.map(this.props.children, child => (
          <li>{child}</li>
        ))}
      </ul>
    );
  }
}

Deck.Card = Card;

Deck.propTypes = {
  children: validateChildren,
};

export default Deck;
