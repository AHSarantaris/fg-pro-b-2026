
# Korteste Vej i et Grid - Løsning (Dijkstra)

Frederikssund Gymnasium - Programmering B - 2026

Forløb 15: Algoritmer og Datastrukturer

## Opgaven

Denne undermappe indeholder en udvidelse af løsningen til opgaven i [https://github.com/AHSarantaris/shortest-path-exercise](https://github.com/AHSarantaris/shortest-path-exercise).

I stedet for en binær matrix (åben/blokeret) bruges en vægtet matrix, hvor hvert felt har en omkostning:
- `0` = blokeret (cannot pass)
- `1` = normalt terræn (omkostning 1)
- `2` = langsomt terræn (omkostning 2), osv.

Algoritmen der bruges er **Dijkstra's algoritme**, som finder den billigste (ikke nødvendigvis den med færrest kanter) vej fra start til mål.

Filer:
- `WeightedMatrixGraph.js` - grid-graf med vægtede celler
- `PriorityQueue.js` - min-prioritetskø til Dijkstra
- `shortestPathDijkstra.js` - Dijkstra implementation
- `sketch.js` - visuelt demo hvor man kan skifte mellem normal / langsom / blokeret

Mapperne `solutions/shortest-path-td/` (BFS på binær matrix) er uændret.
