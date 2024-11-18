# Search in Graphs

Recall the pseudocode for Depth-First Search:

Given a graph, a start node, and a node we're looking for:
- starting at the start node, while unvisited nodes remain
    - if current vertex $v$ is the node we're looking for, return it
    - mark $v$ as visited
    - for each edge $(v,w)$
        - recursively process $w$ unless marked visited

Implement the algorithm. You can choose any of the data structures we covered
(adjacency matrix or adjacency list) for the implementation. Your function
should return the list of nodes on the path from the start to the target (not
the list of nodes that you looked at during the search). If start and target are
the same, it should return a list with only that node. If there is no path from
the start to the target, it should return an empty list. Start with the template
I provided in `code.js` and test your new function.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

///
In dfs, each node will be visited at most once, and the visited nodes will be marked. This operation requires O(1), so the time complexity of visiting V nodes is O(V).

The adjacency list stored in each node contains the edges connected to the node. The time to traverse the adjacency list is related to the length. The total number of edges is E, and the time complexity is O(E).

The total time complexity is O(V+E)

## Bonus

Implement and analyze breadth-first search.

###
https://memgraph.com/docs/advanced-algorithms/deep-path-traversal#depth-first-search

https://en.wikipedia.org/wiki/Graph_traversal#:~:text=In%20computer%20science%2C%20graph%20traversal%20%28also%20known%20as,%28checking%20and%2For%20updating%29%20each%20vertex%20in%20a%20graph.

Source: The website provides me with the basic knowledge of dfs and helps me understand the structure and the types of tests that may be needed

Plagiarism Statement: “I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice
