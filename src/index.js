import {ProseMirror} from "prosemirror/dist/edit"
import {schema} from "./schema"
import {exampleSetup, buildMenuItems} from "prosemirror/dist/example-setup"
import {tooltipMenu, menuBar} from "prosemirror/dist/menu"

let place = document.querySelector("#editor")

let pm = window.pm = new ProseMirror({
  place: place,
  schema: schema,
  plugins: [exampleSetup.config({menuBar: false, tooltipMenu: false})]
})

let menu = buildMenuItems(schema)

setMenuStyle(place.getAttribute("menustyle") || "bar")

function setMenuStyle(type) {
  if (type == "bar") {
    tooltipMenu.detach(pm)
    menuBar.config({float: true, content: menu.fullMenu}).attach(pm)
  } else {
    menuBar.detach(pm)
    tooltipMenu.config({selectedBlockMenu: true,
                        inlineContent: menu.inlineMenu,
                        blockContent: menu.blockMenu}).attach(pm)
  }
}

let menuStyle = document.querySelector("#menustyle")
if (menuStyle) menuStyle.addEventListener("change", () => setMenuStyle(menuStyle.value))

document.querySelector(".insert-orange").addEventListener('click', function() {
  let node = pm.schema.nodes.orange.create()
  pm.tr.replaceSelection(node, true).apply()
})
