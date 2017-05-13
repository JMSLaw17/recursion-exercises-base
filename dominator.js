const { flattenTreeToArray } = require('./dom-util');
const _ = require('underscore');

const getElementById = function(root, id) {
  let result;
  let nodes = flattenTreeToArray(root);
  _.each(nodes, function(node) {
    if (node.id === id) {
      if (result === undefined) {
        result = node;
      }
    }
  });
  return result;
};

const getElementsByClassName = function(root, className) {
  let nodes = flattenTreeToArray(root);
  return _.filter(nodes, function(node) {
    if (typeof node.className === 'string') {
      return node.className.includes(className);
    }
  });
};

const getElementsByTagName = function(root, tagName) {
  let nodes = flattenTreeToArray(root);
  return _.filter(nodes, function(node) {
      return node.tagName === tagName;
  });
};

module.exports = {
  getElementById: getElementById,
  getElementsByClassName: getElementsByClassName,
  getElementsByTagName: getElementsByTagName
};
