import { TreeNode } from "./TreeNode";
import { IBinaryTree } from "./types";

// Написать класс, реализующий бинарное дерево. Предусмотреть методы поиска, вставки, удаления, изменения элемента и определения высоты дерева.
export class BinaryTree implements IBinaryTree {
  root: TreeNode | null;

  constructor() {
    this.root = null;
  }
  insert(value: number) {
    const node = new TreeNode(value);
    if (this.root === null) {
      this.root = node;
    } else {
      let current = this.root;
      while (true) {
        if (value < current.value) {
          if (current.left === null) {
            current.left = node;
            break;
          }
          current = current.left;
        } else {
          if (current.right === null) {
            current.right = node;
            break;
          }
          current = current.right;
        }
      }
    }
  }
  update(oldValue: number, newValue: number) {
    this._deleteNode(this.root, oldValue);

    this.insert(newValue);
  }
  remove(value: number) {
    if (!this.root) {
      throw new Error("Tree is empty");
    }

    this._deleteNode(this.root, value);
  }
  search(value: number) {
    let current = this.root;
    while (current) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return current;
      }
    }

    return null;
  }
  height() {
    return this._getHeight(this.root);
  }

  _getHeight(root: TreeNode | null): number {
    if (!root) {
      return 0;
    }
    const hLeft = this._getHeight(root.left);
    const hRight = this._getHeight(root.right);

    return Math.max(hLeft, hRight) + 1;
  }

  _deleteNode(root: TreeNode | null, value: number) {
    if (!root) {
      return null;
    }

    if (value < root.value) {
      root.left = this._deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this._deleteNode(root.right, value);
    } else {
      if (root.left === null) {
        return root.right;
      }

      if (root.right === null) {
        return root.left;
      }

      root.value = this._getMinNodeValue(root.right);
      root.right = this._deleteNode(root.right, root.value);
    }

    return root;
  }

  _getMinNodeValue(node: TreeNode) {
    while (node.left) {
      node = node.left;
    }

    return node.value;
  }
}
