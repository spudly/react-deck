import Card from 'react-card';
import React from 'react';
import ReactElement from 'react/lib/ReactElement';

const validateChildren = (props, propName, componentName) => {
  const children = props[propName];
  let isValid = true;

  React.Children.forEach(children, child => {
    const isCard = ReactElement.isValidElement(child) && child.type === Card;
    if (!isCard) {
      isValid = false;
    }
  });

  if (!isValid) {
    return Error(
      'All children of Deck must be instances of Card! ' +
      `Check the render method of ${componentName}`
    );
  }

  return null;
};

export default validateChildren;
