// import Graph from "./task2/Graph";

import { BinaryTree } from "./task6/BinaryTree";

// const graph = new Graph();

// graph.addNode("A", "B", 10);
// graph.addNode("A", "C", 9);
// graph.addNode("C", "D", 1);
// graph.addNode("D", "E", 5);
// graph.addNode("D", "G", 1);
// graph.addNode("G", "E", 2);
// graph.addNode("D", "A", 20);

// console.log(graph.getShortestPath("A", "E"));

const tree = new BinaryTree();

tree.insert(12);
tree.insert(18);
tree.insert(8);
tree.insert(5);
tree.insert(11);
tree.insert(4);
tree.insert(1);

console.log(tree.height());

tree.remove(8);

console.log(tree.root?.value);
console.log(tree.root?.left?.value);
