

export const edmondsKarp = (graph) => {           
    let s = 0;
    let t = graph.length-1;

    if (s < 0 || t < 0 || s > graph.length-1 || t > graph.length-1){
        return "invalid source or sink"
      }
      if(graph.length === 0){
        return "invalid graph"
      }

      let residualGraph = graph.map( (row) => {        
        let newRow = [...row];        
        return newRow;        
      });

      let maxFlow = 0;
      let parent = [];

      while (bfs(residualGraph, s, t, parent)) {
		let pathFlow = Number.MAX_VALUE;
		for (let v = t; v != s; v = parent[v]) {
			let u = parent[v];
			pathFlow = Math.min(pathFlow, residualGraph[u][v]);
		}
		for (let v = t; v != s; v = parent[v]) {
			let u = parent[v];
			residualGraph[u][v] -= pathFlow;
			residualGraph[v][u] += pathFlow;
		}

		maxFlow += pathFlow;
	}

    return maxFlow;
}

const bfs = (residualGraph, s, t, parent) => {   
	let visited = [];
	let queue = [];
	let numberOfVerticles = residualGraph.length;

	for (let i = 0; i < numberOfVerticles; i++) {
		visited[i] = false;
	}
	
	queue.push(s);
	visited[s] = true;
	parent[s] = -1;

	while (queue.length != 0) {
		let u = queue.shift();
		for (let v = 0; v < numberOfVerticles; v++) {
			if (visited[v] === false && residualGraph[u][v] > 0) {
				queue.push(v);
				parent[v] = u;
				visited[v] = true;
			}
		}
	}
	
	return (visited[t] === true);
}


