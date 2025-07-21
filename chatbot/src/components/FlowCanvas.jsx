import React, { useState } from "react";
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  applyNodeChanges,
  applyEdgeChanges,
} from "react-flow-renderer";
import "react-flow-renderer/dist/style.css";
import NodesPanel from "./NodesPanel";
import SettingsPanel from "./SettingsPanel";
import { validateFlow } from "../utils/validation";
import { nodeTypes } from "../constants/nodeTypes";

export default function FlowCanvas() {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [selectedNode, setSelectedNode] = useState(null);

  const onConnect = (params) => setEdges((eds) => addEdge(params, eds));

  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  const onDrop = (event) => {
    event.preventDefault();

    const type = event.dataTransfer.getData("application/reactflow");
    if (!type) return;

    const reactFlowBounds = event.target.getBoundingClientRect();
    const position = {
      x: event.clientX - reactFlowBounds.left,
      y: event.clientY - reactFlowBounds.top,
    };

    const newNode = {
      id: `${+new Date()}`,
      type: "textNode",
      position,
      data: { label: "New Message" },
    };

    setNodes((nds) => nds.concat(newNode));
  };

  const handleSave = () => {
    try {
      const error = validateFlow(nodes, edges);
      if (error) {
        alert(`Error: ${error}`);
      } else {
        alert(" Flow saved successfully!");
        console.log("Flow Data:", { nodes, edges });
      }
    } catch (err) {
      console.error("Save failed:", err);
      alert("Something went wrong during save.");
    }
  };
  const onNodeClick = (_, node) => {
    setSelectedNode(node);
  };

  const onTextChange = (value) => {
    setNodes((nds) =>
      nds.map((n) =>
        n.id === selectedNode.id
          ? { ...n, data: { ...n.data, label: value } }
          : n
      )
    );
    setSelectedNode((prev) => ({
      ...prev,
      data: { ...prev.data, label: value },
    }));
  };

  const handleBack = () => setSelectedNode(null);

  return (
    <ReactFlowProvider>
      <div style={{ display: "flex", height: "100vh" }}>
        <div
          style={{ flexGrow: 1, position: "relative" }}
          onDrop={onDrop}
          onDragOver={(e) => e.preventDefault()}
        >
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onConnect={onConnect}
            onNodesChange={(chs) =>
              setNodes((nds) => applyNodeChanges(chs, nds))
            }
            onEdgesChange={(chs) =>
              setEdges((eds) => applyEdgeChanges(chs, eds))
            }
            onNodeClick={(_, node) => setSelectedNode(node)}
            onPaneClick={() => setSelectedNode(null)}
            nodeTypes={nodeTypes}
          ></ReactFlow>

          <button
            onClick={handleSave}
            style={{
              position: "absolute",
              top: 10,
              right: 10,
              zIndex: 1000,
              background: "#2563eb",
              color: "white",
              padding: "8px 12px",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Save Changes
          </button>
        </div>

        <div style={{ width: "300px" }}>
          {selectedNode ? (
            <SettingsPanel
              selectedNode={selectedNode}
              onBack={handleBack}
              onTextChange={onTextChange}
            />
          ) : (
            <NodesPanel onDragStart={onDragStart} />
          )}
        </div>
      </div>
    </ReactFlowProvider>
  );
}
