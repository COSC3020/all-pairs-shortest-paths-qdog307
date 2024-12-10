//To start I looked the the psudeo function that was given to us and tried closley resemble that in code 


function floydWarshall(graph) {
    const vertices = graph.length;

    const dist = graph.map(row => row.slice()); // this part is from chatGPT when I was ruinningto issues, it Initialize the distance matrix based on the graph
    

    // This updates using the floyd warshall algorithm with same i,j,k values as the psudeo code. 
    //Each for is the vertex  as seen in the psudeo code
    for (let k = 0; k < vertices; k++) {
        for (let i = 0; i < vertices; i++) {
            for (let j = 0; j < vertices; j++) {
                if (dist[i][j] > dist[i][k] + dist[k][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j];
                }
            }
        }
    }

    return dist;
}

module.exports = { floydWarshall };
