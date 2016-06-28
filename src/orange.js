import {Block} from "prosemirror/dist/model"
import React from "react"
import ReactDOM from "react-dom"

class OrangeComponent extends React.Component {
  render() {
    return (<div style={{backgroundColor: 'orange', height: '150px'}}></div>)
  }
}

class Orange extends Block {
  toDOM(node) {
    if ( !node.DOM) {
      node.DOM = document.createElement("div")
    }
    ReactDOM.render(<OrangeComponent />, node.DOM)
    return node.DOM
  }
}

exports.Orange = Orange
