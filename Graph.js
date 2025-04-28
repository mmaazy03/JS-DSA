class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vtx) {
    if (!this.adjacencyList[vtx]) {
      this.adjacencyList[vtx] = [];
      return true;
    }
    return false;
  }

  addEdge(vtx1, vtx2) {
    if (this.adjacencyList[vtx1] && this.adjacencyList[vtx2]) {
      this.adjacencyList[vtx1].push(vtx2);
      this.adjacencyList[vtx2].push(vtx1);
      return true;
    }
    return false;
  }

  removeEdge(vtx1, vtx2) {
    if (this.adjacencyList[vtx1] && this.adjacencyList[vtx2]) {
      this.adjacencyList[vtx1] = this.adjacencyList[vtx1].filter(
        (v) => v != vtx2
      );
      this.adjacencyList[vtx2] = this.adjacencyList[vtx2].filter(
        (v) => v != vtx1
      );
      return true;
    }

    return false;
  }

  removeVertex(vtx) {
    if (!this.adjacencyList[vtx]) return undefined;

    for (let neighbor of this.adjacencyList[vtx]) {
      // ?? finding the neighbors of vertex basically elements of that vertex
      // ?? then go through each neighbor elements and remove the deleted node from their elements as as well
      // ?? and after this remove that vertex from whole adjacency list

      this.adjacencyList[neighbor] = this.adjacencyList[neighbor].filter(
        (v) => v !== vtx
      );
    }

    delete this.adjacencyList[vtx];
  }
}

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("B", "D");
graph.addEdge("C", "D");
// graph.removeEdge("A", "B");
graph.removeVertex("D");

console.log(graph);
