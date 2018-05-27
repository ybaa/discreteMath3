import style from './main.css';
import { edmondsKarp } from './edmondsKarp';
import { graphGenerator } from './graphGenerator';
import { drawChart, drawTable } from './drawChart';


//for number of verticles
let sizesAndTimes = [];

for(let i = 50; i <= 900; i += 50){    
    console.log(i);
    let density = 25;
    let verticles = i;
    
    let graph = graphGenerator(verticles, density);

    let t0 = performance.now();    
    let maxFlow = edmondsKarp(graph);
    let t1 = performance.now();
    
    sizesAndTimes.push({
        numberOfVerticles: graph.length,
        time: (t1-t0),
        maxFlow: maxFlow,
        density: density
    });
}

drawChart(sizesAndTimes, "amountOfVerticlesChart", 'Dependency between increasing amount of verticles and time',  'amount of verticles','time', 'numberOfVerticles');
document.getElementById("amountOfVerticlesTable").innerHTML =  drawTable(sizesAndTimes,'amount of verticles', 'time', 'numberOfVerticles');

//for density

let densityAndTimes = [];

for(let i = 25; i <= 100; i += 25){  
    if(i === 100)
        i--;

    console.log(i);
    let density = i;    
    let verticles = 500;
    
    let graph = graphGenerator(verticles, density);

    let t0 = performance.now();    
    let maxFlow = edmondsKarp(graph);
    let t1 = performance.now();

    densityAndTimes.push({
        numberOfVerticles: graph.length,
        time: (t1-t0),
        maxFlow: maxFlow,
        density: density
    });
}


drawChart(densityAndTimes, "densityChart", 'Dependency between density and time for 100 verticles', 'density', 'time', 'density');
document.getElementById("densityTable").innerHTML =  drawTable(densityAndTimes,'density', 'time', 'density');




