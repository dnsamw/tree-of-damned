import React from 'react';
import { TreeNode } from '../types/TreeData';

interface NodeInfoProps {
  node: TreeNode | null;
}

export const NodeInfo: React.FC<NodeInfoProps> = ({ node }) => {
  if (!node) return null;

  return (
    <div className="p-4 bg-white shadow rounded">
      <h2 className="text-xl font-bold">{node.name}</h2>
      {/* Add more details about the node here */}
    </div>
  );
};