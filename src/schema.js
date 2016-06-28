import {Doc, Paragraph} from "prosemirror/dist/schema-basic"
import {Schema, Text} from "prosemirror/dist/model"
import {Orange} from "./orange"

const schema = new Schema({
  nodes: {
    doc: {type: Doc, content: "block+"},

    paragraph: {type: Paragraph, content: "inline<_>*", group: "block"},
    orange: {type: Orange, group: "block"},

    text: {type: Text, group: "inline"}
  },

  marks: {}
})
exports.schema = schema
