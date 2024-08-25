export interface TreeNode {
  name: string;
  children?: TreeNode[];
}

export type TreeData = TreeNode;

export interface LinkDatum {
  source: { x: number; y: number };
  target: { x: number; y: number };
}
