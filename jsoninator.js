const _ = require('underscore'); // the real one! :)

// This is what you would do if you liked things to be easy:
// const stringify = JSON.stringify;
// But you don't. So you're going to write it from scratch...



const stringify = function(obj) {
  var result = '';

  if (obj === null) {
    return 'null';
  }

  if (typeof obj === 'object') {
    if (Array.isArray(obj)) {
      result = '[';
      for (let i = 0; i < obj.length; i++) {
        result += stringify(obj[i]);
        if (i < obj.length - 1) {
          result += ',';
        }
      }
      result += ']';
      return result;
    } else {
      result = '{';
      for (let j in obj) {
        result += stringify(j) + ':' + stringify(obj[j]);
      }
      result += '}';
      return result;
    }
  }

  if (typeof obj === 'boolean') {
    if (obj) {
      return 'true';
    } else {
      return 'false';
    }
  }

  if (typeof obj === 'number') {
    return obj.toString();
  }

  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
};

module.exports = {
  stringify: stringify
};