import {assert} from 'chai';
import Card from 'react-card';
import React from 'react';
import validateChildren from '../src/validateChildren';

const {isDefined, isNull, instanceOf, strictEqual} = assert;

const tests = {

  'validateChildren()': {

    'should return an error if any children are non-cards': () => {
      const props = {
        children: [
          <Card key="0" />,
          'foo',
          <Card key="1" />,
        ],
      };
      const error = validateChildren(props, 'children', 'foo');
      isDefined(error, 'defined');
      instanceOf(error, Error, 'instanceof Error');
      strictEqual(
        error.message,
        'All children of Deck must be instances of Card! ' +
        'Check the render method of foo',
        'correct message'
      );
    },

    'should return null if all children are cards': () => {
      const props = {
        children: [<Card key="0" />, <Card key="1" />],
      };
      const error = validateChildren(props, 'children', 'foo');
      isNull(error);
    },

  },

};

export default tests;
