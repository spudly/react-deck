import Card from 'react-card'
import {assert} from 'chai'
import React from 'react'
import validateChildren from '../src/validateChildren'

let {isDefined, isUndefined, instanceOf, strictEqual} = assert

let tests = {

  'validateChildren()': {

    'should return an error if any children are non-cards': function() {
      let props = {
        children: [
          <Card />,
          "foo",
          <Card />
        ]
      }
      let error = validateChildren(props, 'children', 'foo')
      isDefined(error, 'defined')
      instanceOf(error, Error, 'instanceof Error')
      strictEqual(
        error.message,
        'All children of Deck must be instances of Card! ' +
        'Check the render method of foo',
        'correct message'
      )
    },

    'should return undefined if all children are cards': function() {
      let props = {
        children: [<Card />, <Card />]
      }
      let error = validateChildren(props, 'children', 'foo')
      isUndefined(error)
    }

  }

}

export default tests
