
# Algoritmer til Tower Defence med shortest path

## Shortest path BFS

```pseudo
Algorithm ShortestPathBFS

Input: 
- A graph G.
- A start node s.
- A terminal node t.

Output: 
- If a path from s to t exists: A list of nodes containing a shortest path from s to t,
- If there is no path from s to t: The shortest-path tree rooted at node s, containing the shortest path to all other vertices.

Procedure:
    Let Q be a Queue of length at least equal to the number of nodes in G.
    Add s to Q.

    While Q is not empty:
        Let n be the front node of Q and remove it from Q.
        Mark n as visited.

        if n is the terminal node t:
            Return the list of nodes that the procedure has traversed to reach n.
        End If

        Add the unvisited neighbors of n to Q, and mark n as the node they came from.
    End While

    Return the shortest-path tree rooted at node s.
End procedure
```
