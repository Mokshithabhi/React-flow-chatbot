# React-flow-chatbot
React-flow-chatbot


 Node Creation and Dragging
A "Send Message" node can be dragged from the left NodesPanel.

Nodes are positioned based on the drop location in the canvas.

✅ Node Types (Extensible)
 Implemented a custom node type textNode using nodeTypes in React Flow.

Each node displays:

A label Send Message (header)

A message (body)

Source and target handles for edge connections

✅ Edge Connection
Nodes can be connected using React Flow's built-in edge handles.

Each node has:

One source handle (right)

One target handle (left)

✅ Settings Panel
When a node is clicked, a Settings Panel appears on the right.

The panel allows:

Editing the text content of the node.

Navigating back to the Nodes Panel.

When no node is selected, the panel shows available draggable nodes instead.

✅ Save Changes
A Save Changes button is fixed in the top-right corner.

On click:

Validates the flow using a custom validateFlow() function.

Alerts success or shows an error.

Logs nodes and edges to the console.

✅ Validation Logic
Only one node is allowed without an outgoing edge if there are multiple nodes in the canvas.

Ensures logical flow integrity before saving.