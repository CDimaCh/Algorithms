class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    adddVertex(vertex) {
        if(this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    removeEdge(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(
            v => v !== v2
        );

        this.adjacencyList[v2] = this.adjacencyList[v2].filter(
            v => v !== v1
        );
    }

    removeVertex(vertex) {
        while(this.adjacencyList[vertex].length){
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        
        delete this.adjacencyList[vertex];
    }

    depthFirstRecursive(vertex) {
        const result = [];
        const visited = [];
        const adjacencyList = this.adjacencyList;

        (function dfs(vertex) {
            if(!vertex) return null;

            visited[vertex] = true;
            visited.push(vertex);

            adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]) {
                    return dfs(neighbor);
                }
            });
        })(start);

        return result;
    }

    depthFirstIterative(start) {
        let result = [];
        let visited = {};
        let stack = [start];
        let currentVertex

        visited[start] = true;
        while(stack.length) {
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            });
        }

        return result;
    }

    breadthFirstGraph(start) {
        const queue = [start];
        const result = [];
        const visited = {};
        visited[start] = true;

        while(queue.length) {
            currentVertex = queue.shift();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor)
                }
            });
        }

        return result;
    }
}

let g = new Graph();
g.adddVertex('A')
g.adddVertex('B')
g.adddVertex('C')
g.adddVertex('D')
g.adddVertex('E')
g.adddVertex('F')

g.addEdge('A', 'B')
g.addEdge('A', 'C')
g.addEdge('B', 'D')
g.addEdge('C', 'E')
g.addEdge('D', 'E')
g.addEdge('D', 'F')
g.addEdge('E', 'F')
