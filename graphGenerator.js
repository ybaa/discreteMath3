export const graphGenerator = (numberOfVerticles, density) => {
    let graph = generateGraph(numberOfVerticles, density);
    let matrix = generateMatrix(graph, numberOfVerticles)
    
    return matrix;
};


const generateGraph = (numberOfVerticles, density) => {
    let maxCapacity = 20;
    let minEdges = numberOfVerticles - 1;
    let maxEdges = ((numberOfVerticles - 1) * numberOfVerticles) / 2;						

    let minDensity = Math.ceil((minEdges / maxEdges) * 100);    
    console.log('min density: ' + minDensity + "%");

    if(density < minDensity){
        return "too low density";
    }

    let edges = Math.ceil(maxEdges*(density / 100));	

    let visited = new Array(numberOfVerticles+1).join('0').split('').map(parseFloat)
    let result = [];
    let row = [];

    //set first
    let current = 0;   
    
    let next = Math.floor(Math.random() * (numberOfVerticles-2 - 1 + 1)) + 1; 
    let capacity = Math.floor(Math.random() * (maxCapacity - 4 + 1)) + 4;
    
    visited[current] = -1;
    result.push([current, next, capacity]);    
    current = parseInt(Object.assign(next));

    visited[next] = -1;

    visited[numberOfVerticles - 1 ] = -1;



    for(let i = 2; i < numberOfVerticles-1; i++){        
        while(true){
            next = Math.floor(Math.random() * (numberOfVerticles-2 - 1 + 1)) + 1; 
            if(visited[next] > -1){
                break;
            }
        }
        capacity = Math.floor(Math.random() * (maxCapacity - 4 + 1)) + 4;
        result.push([current, next, capacity]);        
        current = parseInt(Object.assign(next));
        visited[current] = -1;
    }
    capacity = Math.floor(Math.random() * (maxCapacity - 4 + 1)) + 4;
    result.push([current, numberOfVerticles-1, capacity]);
    

    for(let i = minEdges; i < edges; i++){        
        while(true){
            let from =  Math.floor(Math.random() * (numberOfVerticles-2 - 0 + 1)) + 0;
            let to =  Math.floor(Math.random() * (numberOfVerticles-2 - 1 + 1)) + 1;
            if(from === to){
                continue;
            }
            let edgeExists = result.forEach( (edge) => {
                if(edge[0] === from && edge[1] === to){
                    return true
                }            
            }) || false;
            if(!edgeExists){
                capacity = Math.floor(Math.random() * (maxCapacity - 4 + 1)) + 4;
                result.push([from, to, capacity]);
                break;
            }
        }
    }
    
    return result;
}

const generateMatrix = (graph, numberOfVerticles) => {
    let matrix = [];
    
    for (let i = 0; i < numberOfVerticles; i++) {
        let row = new Array(numberOfVerticles+1).join('0').split('').map(parseFloat)
        matrix.push(row);
    }

    graph.forEach( (item) => {
        matrix[item[0]][item[1]] = item[2];
    })
    
    return matrix;
}