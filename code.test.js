const fs = require('fs');
const assert = require('assert');
const depthFirstSearch = require('./code.js');

function isValidPath(graph, path, startNode, targetNode) {
    if (path[0] !== startNode || path[path.length - 1] !== targetNode) {
        return false; 
    }
    for (let i = 0; i < path.length - 1; i++) {
        const current = path[i];
        const next = path[i + 1];
        if (!graph[current] || !graph[current].includes(next)) {
            return false; 
        }
    }
    return true;
}


