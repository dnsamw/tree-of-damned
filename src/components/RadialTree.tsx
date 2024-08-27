import React from "react";
import * as d3 from "d3";
import { useD3 } from "../hooks/useD3";
import { FamilyMember } from "../types/FamilyMember";



interface RadialTreeProps {
  data: FamilyMember[];
  onNodeSelect: (node: FamilyMember | null) => void;
}

export const RadialTree: React.FC<RadialTreeProps> = ({
  data,
  onNodeSelect,
}) => {
  const svgRef = useD3(
    (svg) => {
      svg.selectAll("*").remove(); // Clear previous render

      const width = 1200;
      const height = 1200;
      const radius = Math.min(width, height) / 2 - 120;

      const g = svg
        .append("g")
        .attr("transform", `translate(${width / 2},${height / 2})`);

      // Group data by family
      const groupedData = Array.from(d3.group(data, (d) => d.family));

      console.log({ groupedData });

      // Create color scale for groups
      const colorScale = d3.scaleOrdinal(d3.schemeCategory10);

      // Create arc generator for segments
      const arcGenerator = d3
        .arc<d3.PieArcDatum<[string, FamilyMember[]]>>()
        .innerRadius(radius * 0.2)
        .outerRadius(radius);

      // Create pie layout
      const pie = d3
        .pie<[string, FamilyMember[]]>()
        .value(() => 1)
        .sort(null);

      // Draw segments
      // @ts-ignore
      const segments = g
        .selectAll(".segment")
        .data(pie(groupedData))
        .enter()
        .append("path")
        .attr("class", "segment")
        .attr("d", arcGenerator)
        .attr("fill", (d) => colorScale(d.data[0]))
        .attr("opacity", 0.2);

      // Node positioning
      const nodePositions = (() => {
        const familyGroups = d3.group(data, (d) => d.family);
        const pieLayout = d3
          .pie<[string, FamilyMember[]]>()
          .value(() => 1)
          .sort(null)(Array.from(familyGroups));

        let positions: (FamilyMember & { x: number; y: number })[] = [];

        // @ts-ignore
        pieLayout.forEach((slice, sliceIndex) => {
          const familyMembers = slice.data[1];
          const startAngle = slice.startAngle * (180 / Math.PI);
          const endAngle = slice.endAngle * (180 / Math.PI);
          const angleRange = endAngle - startAngle;

          const maxLevel = Math.max(...familyMembers.map((m) => m.level));

          familyMembers.forEach((member, memberIndex) => {
            const memberAngle =
              startAngle +
              (angleRange * (memberIndex + 0.5)) / familyMembers.length;
            const r = radius * (0.3 + (0.6 * member.level) / (maxLevel + 1)); // Adjust radial position based on level

            positions.push({
              ...member,
              x: memberAngle,
              y: r,
            });
          });
        });

        return positions;
      })();
  

      const createStepLink = (source: any, target: any) => {
        const sourceX = source.y * Math.cos(((source.x - 90) * Math.PI) / 180);
        const sourceY = source.y * Math.sin(((source.x - 90) * Math.PI) / 180);
        
        const targetX = target.y * Math.cos(((target.x - 90) * Math.PI) / 180);
        const targetY = target.y * Math.sin(((target.x - 90) * Math.PI) / 180);
        
        // Calculate angle difference
        let angleDiff = target.x - source.x;
        if (angleDiff > 180) angleDiff -= 360;
        if (angleDiff < -180) angleDiff += 360;
        
        // Determine the sweep flag based on the angle difference
        const sweepFlag = angleDiff > 0 ? 1 : 0;
        
        // Calculate the end point of the arc (point E)
        const eX = source.y * Math.cos(((target.x - 90) * Math.PI) / 180);
        const eY = source.y * Math.sin(((target.x - 90) * Math.PI) / 180);
      
        // Create the arc path
        const arcPath = `M${sourceX},${sourceY} A${source.y},${source.y} 0 0,${sweepFlag} ${eX},${eY}`;
      
        // Create the straight line from E to target
        const linePath = `L${targetX},${targetY}`;
        
        return arcPath + ' ' + linePath;
      };

      const createLinks = (nodePositions: (FamilyMember & { x: number; y: number })[]) => {
        let links: { source: any; target: any; type: string }[] = [];
        
        nodePositions.forEach(node => {
          node.relationships.forEach(rel => {
            const target = nodePositions.find(n => n.id === rel.targetId);
            if (target) {
              links.push({
                source: node,
                target: target,
                type: rel.type
              });
            }
          });
        });
        
        return links;
      };

      const links = createLinks(nodePositions);


      const linkColors:any = {
        parent: "#1f77b4",
        child: "#000",
        sibling: "#2ca02c",
        spouse: "#d62728",
        grandparent: "#9467bd",
        grandchild: "#8c564b"
      };
      
      g.selectAll(".link")
        .data(links)
        .enter()
        .append("path")
        .attr("class", "link")
        .attr("d", d => createStepLink(d.source, d.target))
        .attr("fill", "none")
        .attr("stroke", d => linkColors[d.type])
        .attr("stroke-width", 1)
        .attr("stroke-dasharray", d => d.type === 'sibling' ? "5,5" : "none");

      // @ts-ignore
      const nodes = g
        .selectAll(".node")
        .data(nodePositions)
        .enter()
        .append("circle")
        .attr("class", "node")
        .attr("transform", (d) => `rotate(${d.x - 90}) translate(${d.y},0)`)
        .attr("r", 10) // Reduced size for better visibility
        .attr("fill", (d) => colorScale(d.family))
        // @ts-ignore
        .on("click", (event, d) => onNodeSelect(d));

      // @ts-ignore
      const labels = g
        .selectAll(".label")
        .data(nodePositions)
        .enter()
        .append("text")
        .attr("class", "label")
        .attr("transform", (d) => {
          const rotation = d.x - 90;
          const translateX = d.y + 15; // Adjusted for smaller nodes
          return `rotate(${rotation}) translate(${translateX},-10) ${
            rotation > 90 ? "rotate(180)" : ""
          }`;
        })
        .attr("text-anchor", (d) => (d.x < 180 ? "start" : "end"))
        .text((d) => d.name)
        .attr("font-size", "8px"); // Reduced font size for better fit

      // Add central text
      g.append("text")
        .attr("text-anchor", "middle")
        .attr("font-size", "30px")
        .attr("w", "200px")
        .text("පවුල් ගස");

      // Implement zoom and pan
      const zoom = d3
        .zoom<SVGSVGElement, unknown>()
        .scaleExtent([0.5, 5])
        .on("zoom", (event) => {
          g.attr("transform", event.transform);
        });

        const legend = svg.append("g")
        .attr("class", "legend")
        .attr("x1", 0)
        // .attr("transform", `translate(60, ${height - 20})`);
        .attr("transform", `translate(-60, 80)`);
      
      Object.entries(linkColors).forEach(([type, color], i) => {
        legend.append("line")
          .attr("x1", 0)
          .attr("y1", i * 20)
          .attr("x2", 30)
          .attr("y2", i * 20)
          .attr("stroke", color as string)
          .attr("stroke-width", 5)
          .attr("stroke-dasharray", type === 'sibling' ? "5,5" : "none");
      
        legend.append("text")
          .attr("x", 40)
          .attr("y", i * 20)
          .attr("dy", "0.35em")
          .text(type);
      });

      svg.call(zoom);
    },
    [data, onNodeSelect]
  );

  return (
    <svg ref={svgRef} width="100%" height="100%" viewBox="0 0 1200 1200"></svg>
  );
};
