import React from 'react'
import Card from 'react-card'
import ReactElement from 'react/lib/ReactElement'

function validateChildren (props, propName, componentName) {
  let children = props[propName]
  let isValid = true

  React.Children.forEach(children, function (child) {
    let isCard = ReactElement.isValidElement(child) && child.type === Card
    if (!isCard) {
      isValid = false
    }
  })

  if (!isValid) {
    return new Error(
      'All children of Deck must be instances of Card! ' +
      'Check the render method of ' + componentName
    )
  }
}

export default validateChildren
