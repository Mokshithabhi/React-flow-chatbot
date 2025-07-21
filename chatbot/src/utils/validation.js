export function validateFlow(nodes, edges) {
  const sourceNodeIds = new Set(edges.map(edge => edge.source));
  const nodesWithNoOutgoing = nodes.filter(node => !sourceNodeIds.has(node.id));

  if (nodes.length > 1 && nodesWithNoOutgoing.length > 1) {
    return 'Only one node can have no outgoing connection!';
  }

  return null; 
}
