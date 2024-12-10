# All Pairs Shortest Paths

In the lectures, we've seen Dijkstra's algorithm for finding the shortest paths
from a given vertex to all other vertices in the graph. We've also covered the
Floyd-Warshall algorithm for finding the shortest path between all *pairs* of
vertices. It works as follows:

Given a graph $G = (V, E)$ with weighted edges:
- initialize a $|V|\times|V|$ matrix `dist` to $\infty$
- for each vertex $v \in V$, `dist[v][v] = 0`
- for each edge $(u,v) = e \in E$, `dist[u][v] = weight((u,v))`
- for each vertex $k\in V$:
    - for each vertex $i\in V$:
        - for each vertex $j\in V$:
            - `if dist[i][j] > dist[i][k] + dist[k][j]:`
              `dist[i][j] = dist[i][k] + dist[k][j]`

Implement this algorithm, starting with the template I provided in `code.js`.
The function takes a weighted graph graph and returns the matrix with the
distances, as described above. You can choose any data structures you like for
the implementation.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the worst-case time complexity ($\Theta$) of the algorithm? Add your
answer, including your reasoning, to this markdown file. 

The Floyd-Warshall algorithm has a worst-case time complexity of ($\Theta$(V^3)) because: The algorithm consists of three nested loops over \(V\) vertices. Each iteration compares and updates shortest paths in constant time and checks everything with the i, j, k loops. 


## Sources 
 For this I started with the psudeo code that we were given. I went with the appraoch of the adjancey approach as seen in my test. This test code was generated from chatgpt. From what I understood and why I did not include the Dist vv =0 and dist uv= weight but I already have the matrix. I was running into an issues and got the constant distance part of the code.js from chat. This was used to get the distance initalized. https://www.geeksforgeeks.org/floyd-warshall-algorithm-dp-16/


I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.