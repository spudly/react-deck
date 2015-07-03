import Deck from '../src/Deck'
import Card from 'react-card'
import {stub} from 'sinon'
import {strictEqual} from 'assert'
import React from 'react'
import {createRenderer} from 'react/lib/ReactTestUtils'
import {deepEqual} from 'assert-diff'

Card.displayName = 'foo'

let tests = {

  'Deck': {

    'should provide a reference to Card': function() {
      strictEqual(Deck.Card, Card)
    },

    'render()': {

      'should render ul.deck>li>Card': function() {
        let renderer = createRenderer()
        renderer.render(
          <Deck>
            <Card />
            <Card />
          </Deck>
        )
        let reactComponent = renderer.getRenderOutput()
        deepEqual(
          reactComponent.props.children,
          {
            '.0': <li><Card /></li>,
            '.1': <li><Card /></li>
          }
        )
      }

    }

  }

}

export default tests
