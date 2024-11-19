module.exports = depthFirstSearch;
function depthFirstSearch(graph, startNode, targetNode) {
    function dfs(currentNode, visited, path) {
        path.push(currentNode);

        if (currentNode === targetNode) {
            return true;
        }

        visited.add(currentNode);

        for (let neighbor of graph[currentNode] || []) {
            if (!visited.has(neighbor)) {
                if (dfs(neighbor, visited, path)) {
                    return true;
                }
            }
        }

        path.pop();
        return false;
    }

    const visited = new Set();
    const path = [];

    if (dfs(startNode, visited, path)) {
        return path;
    }

    return [];
}

