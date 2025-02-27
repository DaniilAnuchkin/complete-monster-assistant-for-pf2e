import { TreeNode } from "../TreeNode";

export interface IBinaryTree {
  insert: (value: number) => void;
  update: (oldValue: number, newValue: number) => void;
  remove: (value: number) => void;
  search: (value: number) => TreeNode | null;
  height: () => number;
}
