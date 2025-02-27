export class TreeNode {
  _value: number;
  _left: TreeNode | null;
  _right: TreeNode | null;

  constructor(value: number) {
    this._value = value;
    this._left = null;
    this._right = null;
  }

  get value(): number {
    return this._value;
  }

  set value(value: number) {
    this._value = value;
  }

  set left(node: TreeNode | null) {
    this._left = node;
  }

  set right(node: TreeNode | null) {
    this._right = node;
  }

  get left(): TreeNode | null {
    return this._left;
  }

  get right(): TreeNode | null {
    return this._right;
  }
}
