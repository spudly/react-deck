import Deck from '../src/Deck';
import Card from 'react-card';
import { strictEqual } from 'assert';
import React from 'react';
import { createRenderer } from 'react/lib/ReactTestUtils';
import { deepEqual } from 'assert-diff';

Card.displayName = 'foo';

const tests = {

  Deck: {

    'should provide a reference to Card': () => {
      strictEqual(Deck.Card, Card);
    },

    'render()': {

      'should render ul.deck>li>Card': () => {
        const renderer = createRenderer();
        renderer.render(
          <Deck>
            <Card />
            <Card />
          </Deck>
        );
        const reactComponent = renderer.getRenderOutput();
        deepEqual(
          reactComponent.props.children,
          {
            '.0': <li><Card /></li>,
            '.1': <li><Card /></li>,
          }
        );
      },

    },

  },

};

export default tests;
