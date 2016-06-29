import {Block} from "prosemirror/dist/model"
import React from "react"
import ReactDOM from "react-dom"

class ExampleComponent extends React.Component {
  render() {
    return (
    <div style={{backgroundColor: 'orange', textAlign: 'center', padding: '30px'}}>
      This is a React component
    </div>)
  }
}

class ExampleNode extends Block {
  toDOM(node) {
    let dom = document.createElement("div")
    ReactDOM.render(<ExampleComponent />, dom)
    return dom
  }
}

exports.ExampleNode = ExampleNode
