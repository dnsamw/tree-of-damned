// App.tsx
import React, { useState } from 'react';
import { RadialTree } from './components/RadialTree';
import { NodeInfo } from './components/NodeInfo';
import { FamilyMember } from './types/FamilyMember';
import { sampleFamilyData } from './fakeData';

const App: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<FamilyMember | null>(null);

  return (
    <div className="flex h-screen bg-slate-200">
      <div className="w-3/4">
        <RadialTree data={sampleFamilyData} onNodeSelect={setSelectedNode} />
      </div>
      <div className="w-1/4 p-4 bg-slate-300">
        <NodeInfo node={selectedNode} />
      </div>
    </div>
  );
};

export default App;