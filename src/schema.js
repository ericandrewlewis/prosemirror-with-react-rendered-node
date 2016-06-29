import {Doc, Paragraph} from "prosemirror/dist/schema-basic"
import {Schema, Text} from "prosemirror/dist/model"
import {ExampleNode} from "./example-node"

const schema = new Schema({
  nodes: {
    doc: {type: Doc, content: "block+"},

    paragraph: {type: Paragraph, content: "inline<_>*", group: "block"},
    example_node: {type: ExampleNode, group: "block"},

    text: {type: Text, group: "inline"}
  },

  marks: {}
})
exports.schema = schema
