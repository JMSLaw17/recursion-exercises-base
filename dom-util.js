
const visitAllNodes = function(node, callback) {
  // Hint: read about DOM nodes and node methods here: https://developer.mozilla.org/en-US/docs/Web/API/Node
    let children = node.childNodes;
    children.forEach(function(childNode) {  
      visitAllNodes(childNode, callback);
    });
    callback(node);
  };

const flattenTreeToArray = function(node) {
  // Hint: Use visitAllNodes()
  let nodes = [];
  visitAllNodes(node, function(aNode) {
    nodes.push(aNode);
  });
  return nodes;
};

module.exports = {
  visitAllNodes: visitAllNodes,
  flattenTreeToArray: flattenTreeToArray
};