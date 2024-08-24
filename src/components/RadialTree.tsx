import React from 'react';
import * as d3 from 'd3';
import { HierarchyNode } from 'd3';
import { TreeData, TreeNode } from '../types/TreeData';
import { useD3 } from '../hooks/useD3';

interface RadialTreeProps {
  data: TreeData;
  onNodeSelect: (node: TreeNode | null) => void;
}

export const RadialTree: React.FC<RadialTreeProps> = ({ data, onNodeSelect }) => {
  const svgRef = useD3((svg) => {
    svg.selectAll("*").remove(); // Clear previous render

    const width = 1200;
    const height = 1200;
    const radius = Math.min(width, height) / 2 - 120;

    const tree = d3.cluster<TreeNode>()
      .size([360, radius])
      .separation((a, b) => (a.parent == b.parent ? 1 : 2) / a.depth);

    const root = tree(d3.hierarchy(data) as HierarchyNode<TreeNode>);

    const g = svg.append('g')
      .attr('transform', `translate(${width/2},${height/2})`);

    const link = g.selectAll('.link')
      .data(root.links())
      .join('path')
      .attr('class', 'link')
      .attr('d', d3.linkRadial<d3.HierarchyPointLink<TreeNode>, d3.HierarchyPointNode<TreeNode>>()
        .angle(d => d.x * Math.PI / 180)
        .radius(d => d.y));

    const node = g.selectAll('.node')
      .data(root.descendants())
      .join('g')
      .attr('class','node')
      .attr('class', d => `node${d.children ? ' node--internal' : ' node--leaf'}`)
      .attr('transform', d => `rotate(${d.x - 90}) translate(${d.y},0)`)
      .on('click', (event, d) => onNodeSelect(d.data));

    node.append('circle')
      .attr('r', 4)
      .attr('fill', d => d.children ? '#555' : '#999');

    node.append('text')
      .attr('dy', '0.31em')
      .attr('x', d => d.x < 180 === !d.children ? 6 : -6)
      .attr('text-anchor', d => d.x < 180 === !d.children ? 'start' : 'end')
      .attr('transform', d => d.x >= 180 ? 'rotate(180)' : null)
      .text(d => d.data.name)
      .clone(true).lower()
      .attr('stroke', 'white');
    
    // Implement zoom and pan
    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.5, 5])
      .on('zoom', (event) => {
        g.attr('transform', event.transform);
      });

    svg.call(zoom);

  }, [data, onNodeSelect]);

  return <svg ref={svgRef} width="100%" height="100%" viewBox="0 0 1200 1200"></svg>;
};