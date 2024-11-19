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


function testDepthFirstSearch() {
    let graph = {
        A: ['B', 'C'],
        B: ['D', 'E'],
        C: ['F'],
        D: [],
        E: ['F'],
        F: []
    };
    let startNode = 'A';
    let targetNode = 'F';
    let result = depthFirstSearch(graph, startNode, targetNode);
    console.log("Test case 1 result:", result);
    assert(isValidPath(graph, result, startNode, targetNode), "Test Case 1 Failed");

    startNode = 'A';
    targetNode = 'A';
    result = depthFirstSearch(graph, startNode, targetNode);
    console.log("Test case 2 result:", result);
    assert.deepStrictEqual(result, ['A'], "Test Case 2 Failed");

    startNode = 'A';
    targetNode = 'G';
    result = depthFirstSearch(graph, startNode, targetNode);
    console.log("Test case 3 result:", result);
    assert.deepStrictEqual(result, [], "Test Case 3 Failed");

    graph = {
        1: [2, 3],
        2: [4],
        3: [4, 5],
        4: [6],
        5: [],
        6: []
    };
    startNode = 1;
    targetNode = 6;
    result = depthFirstSearch(graph, startNode, targetNode);
    console.log("Test case 4 result:", result);
    assert(isValidPath(graph, result, startNode, targetNode), "Test Case 4 Failed");

    graph = {
        1: [2],
        2: [],
        3: [4],
        4: []
    };
    startNode = 1;
    targetNode = 4;
    result = depthFirstSearch(graph, startNode, targetNode);
    console.log("Test case 5 result:", result);
    assert.deepStrictEqual(result, [], "Test Case 5 Failed");

    console.log("pass");
}

testDepthFirstSearch();
