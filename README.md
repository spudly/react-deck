# react-deck

Render a stack of cards with React. See also: [react-card](https://www.npmjs.com/package/react-deck)

[![NPM](https://nodei.co/npm/react-deck.png)](https://www.npmjs.com/package/react-deck)

[![Build Status](https://travis-ci.org/spudly/react-deck.svg?branch=master)](https://travis-ci.org/spudly/react-deck) [![Test Coverage](https://codeclimate.com/github/spudly/react-deck/badges/coverage.svg)](https://codeclimate.com/github/spudly/react-deck/coverage)

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard) [![Code Climate](https://codeclimate.com/github/spudly/react-deck/badges/gpa.svg)](https://codeclimate.com/github/spudly/react-deck)

[![Dependencies](https://david-dm.org/spudly/react-deck.svg)](https://david-dm.org/spudly/react-deck) [![DevDependencies](https://david-dm.org/spudly/react-deck/dev-status.svg)](https://david-dm.org/spudly/react-deck#info=devDependencies)

# Usage

```jsx
import {Deck} from 'react-deck'
import {Card} from 'react-card'

React.render(
  <Deck>
    <Card>
      <Card.Front>1: front</Card.Front>
      <Card.Back>1: back</Card.Back>
    </Card>
    <Card>
      <Card.Front>2: front</Card.Front>
      <Card.Back>2: back</Card.Back>
    </Card>
    <Card>
      <Card.Front>3: front</Card.Front>
      <Card.Back>3: back</Card.Back>
    </Card>
  </Deck>,
  document.body
);
```

# Styling

See the [demo.css](demo/demo.css) file for sample CSS code you can use to style the component.

# License

MIT
