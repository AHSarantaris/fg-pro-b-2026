
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

## Shortest path Dijkstra

```pseudo
Algorithm ShortestPathDijkstra

Input: 
- A graph G with non-negative edge weights.
- A start node s.
- A terminal node t.

Output: 
- If a path from s to t exists: A list of nodes containing a cheapest path from s to t,
- If there is no path from s to t: An empty list.

Procedure:
    Let dist be a map from node to number, initially all Infinity.
    Let prev be a map from node to node, initially empty.
    Let processed be an empty set of nodes.
    Let PQ be an empty priority queue (min-heap).

    dist[s] := 0
    Insert s into PQ with priority 0.

    While PQ is not empty:
        Let n be the node in PQ with the smallest priority, and remove it from PQ.

        If n is already in processed:
            Continue to the next iteration.

        Add n to processed.

        If n is the terminal node t:
            Reconstruct the path from s to t by following prev backwards from t,
            reverse it, and return it.
        End If

        For each neighbor m of n:
            If m is in processed:
                Continue to the next neighbor.

            Let newDist be dist[n] + weight(n, m)   // cost of entering m
            If newDist < dist[m]:
                dist[m] := newDist
                prev[m] := n
                Insert m into PQ with priority newDist.
            End If
        End For
    End While

    Return an empty list (no path from s to t exists).
End procedure
```
