# Code documentation

Here are some notes regarding the structure of the app.

## Vuex

Vuex is used to manage the state and data of the app.

## Terminology

Learn these well! They won't be defined anywhere else.

Model = An object that is a machine-readable representation of the HTML code.
Node = An HTML node or the object in the model dedicated to it. Example: in ```<p>Foo<i></i>baz</p>```, the p tag, i tag, "Foo", and "baz" are all nodes, and the p node contains the other three nodes. Nodes can be either tag or text ("Foo" and "baz" are text nodes); this distinction is important.
Position = An array acting as an identifier for a node. For example, the array [0, 2, 5] is zero-indexed and means "go to the first element, then go to the third child, then the sixth child of that."
Code = A string of the user-entered HTML code.
Panel = A module of the user interface. Most of the code is divided into panels.
Website = The website output of the user-entered HTML code.
Selection = The node that is currently selected in the user interface. Panels can change the current selection and change content depending on the selection.
