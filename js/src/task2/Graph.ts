import path from "path";
import { IGraph } from "./types";

export default class Graph implements IGraph {
  protected graphMap: Record<string, Record<string, number>>;

  constructor() {
    this.graphMap = {};
  }

  protected _addEdge(edge: string) {
    this.graphMap[edge] = {};
  }

  addNode(firstEdge: string, secondEdge: string, weight: number) {
    if (!this.graphMap[firstEdge]) {
      this._addEdge(firstEdge);
    }
    if (!this.graphMap[secondEdge]) {
      this._addEdge(secondEdge);
    }

    this.graphMap[secondEdge] = {
      ...this.graphMap[secondEdge],
      [firstEdge]: weight,
    };
    this.graphMap[firstEdge] = {
      ...this.graphMap[firstEdge],
      [secondEdge]: weight,
    };
  }
  updateNode(firstEdge: string, secondEdge: string, weight: number) {
    if (!this.graphMap[firstEdge] || !this.graphMap[secondEdge]) {
      throw new Error("Node doesn't exist in graph");
    }

    this.graphMap[firstEdge]![secondEdge] = weight;
    this.graphMap[secondEdge]![firstEdge] = weight;
  }
  findNeighborNodes(edge: string) {
    if (!this.graphMap[edge]) {
      throw new Error("Node doesn't exist in graph");
    }

    return Object.keys(this.graphMap[edge]);
  }
  removeNode(edge: string) {
    if (!this.graphMap[edge]) {
      throw new Error("Node doesn't exist in graph");
    }
    Object.keys(this.graphMap[edge]).forEach((node) => {
      if (this.graphMap[node]) {
        delete this.graphMap[node][edge];
      }
    });

    delete this.graphMap[edge];
  }
  getShortestPath(firstEdge: string, secondEdge: string) {
    const nodeDistance: Record<string, number> = {};
    const visitedNode: Set<string> = new Set();
    const path: Record<string, string> = {};

    if (!this.graphMap[firstEdge] || !this.graphMap[secondEdge]) {
      throw new Error("Node doesn't exist in graph");
    }

    if (firstEdge === secondEdge) {
      return { path: [firstEdge] };
    }

    for (const node in this.graphMap) {
      nodeDistance[node] = Infinity;
    }

    nodeDistance[firstEdge] = 0;

    while (!visitedNode.has(secondEdge)) {
      let minDistance = Infinity;
      let minNode = null;

      for (const node in nodeDistance) {
        if (!visitedNode.has(node) && nodeDistance[node] < minDistance) {
          minDistance = nodeDistance[node];
          minNode = node;
        }
      }

      const neighborNodes = this.graphMap[minNode!];

      for (const neighborNode in neighborNodes) {
        const distance = nodeDistance[minNode!] + neighborNodes[neighborNode];
        if (distance < nodeDistance[neighborNode]) {
          nodeDistance[neighborNode] = distance;
          path[neighborNode] = minNode!;
        }
      }

      visitedNode.add(minNode!);
    }

    const shortDistance = [];
    let current = secondEdge;
    while (current !== firstEdge) {
      shortDistance.unshift(current);
      current = path[current];
    }
    shortDistance.unshift(current);

    return { path: shortDistance };
  }
  countEdges() {
    return Object.keys(this.graphMap).length;
  }
}
