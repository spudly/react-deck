import Deck from '../src/Deck';
import cards from './cards.json';
import Card from 'react-card';
import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';

class DeckDemo extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      activeIndex: 0,
      activeFlipped: false
    };
  }

  render () {
    return (
      <div>
        <Deck>
          {this._getSortedCards().map(this._renderCard, this)}
        </Deck>
        <button type='button' onClick={this._flip.bind(this)}>Flip Active Card</button>
        <button type='button' onClick={this._prev.bind(this)}>Previous</button>
        <button type='button' onClick={this._next.bind(this)}>Next</button>
      </div>
    );
  }

  _getSortedCards () {
    return cards
      .slice(this.state.activeIndex)
      .concat(cards.slice(0, this.state.activeIndex))
      .slice(0, 10) // for performance
      .reverse();
  }

  _renderCard (card, i, cards) {
    const className = classnames('index-card', {
      'card-flipped': i === cards.length - 1 && this.state.activeFlipped
    });
    return (
      <Card key={card.front} className={className}>
        <Card.Front>
          <h1>{card.front}</h1>
        </Card.Front>
        <Card.Back>
          <p>{card.back}</p>
        </Card.Back>
      </Card>
    );
  }

  _prev () {
    const idx = this.state.activeIndex;
    this.setState({activeIndex: (cards.length + idx - 1) % cards.length});
  }

  _next () {
    const idx = this.state.activeIndex;
    this.setState({activeIndex: (idx + 1) % cards.length});
  }

  _flip () {
    this.setState({activeFlipped: !this.state.activeFlipped});
  }

}

ReactDOM.render(<DeckDemo />, document.querySelector('#container'));
