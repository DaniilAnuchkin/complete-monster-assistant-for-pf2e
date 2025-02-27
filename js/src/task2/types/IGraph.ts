export interface IGraph {
  addNode: (
    ...node: [firstEdge: string, secondEdge: string, weight: number]
  ) => void;
  findNeighborNodes: (edge: string) => string[];
  removeNode: (edge: string) => void;
  updateNode: (
    ...node: [firstEdge: string, secondEdge: string, weight: number]
  ) => void;
  getShortestPath: (
    firstEdge: string,
    secondEdge: string
  ) => { path: string[] };
  countEdges: () => number;
}
