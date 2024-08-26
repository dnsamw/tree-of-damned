export const createCurvedLink = (source: any, target: any) => {
  const sourceX = source.y * Math.cos(((source.x - 90) * Math.PI) / 180);
  const sourceY = source.y * Math.sin(((source.x - 90) * Math.PI) / 180);
  const targetX = target.y * Math.cos(((target.x - 90) * Math.PI) / 180);
  const targetY = target.y * Math.sin(((target.x - 90) * Math.PI) / 180);

  const dx = targetX - sourceX;
  const dy = targetY - sourceY;
  const dr = Math.sqrt(dx * dx + dy * dy);

  return `M${sourceX},${sourceY}A${dr},${dr} 0 0,1 ${targetX},${targetY}`;
};

export const createElbowLink = (source: any, target: any) => {
  const sourceX = source.y * Math.cos(((source.x - 90) * Math.PI) / 180);
  const sourceY = source.y * Math.sin(((source.x - 90) * Math.PI) / 180);
  const targetX = target.y * Math.cos(((target.x - 90) * Math.PI) / 180);
  const targetY = target.y * Math.sin(((target.x - 90) * Math.PI) / 180);

  const midX = (sourceX + targetX) / 2;
  const midY = (sourceY + targetY) / 2;

  return `M${sourceX},${sourceY}
      L${midX},${midY}
      L${targetX},${targetY}`;
};

export const createLinkPath = (source: any, target: any) => {
  const dx = target.x - source.x;
  const dy = target.y - source.y;
  const dr = Math.sqrt(dx * dx + dy * dy);
  return `M${source.y * Math.cos(((source.x - 90) * Math.PI) / 90)},${
    source.y * Math.sin(((source.x - 90) * Math.PI) / 90)
  }A${dr},${dr} 0 0,1 ${
    target.y * Math.cos(((target.x - 90) * Math.PI) / 90)
  },${target.y * Math.sin(((target.x - 90) * Math.PI) / 90)}`;
};

// export const links = g
//   .selectAll(".link")
//   .data(nodePositions.filter((d) => d.parentId))
//   .enter()
//   .append("path")
//   .attr("class", "link")
//   .attr("d", (d) => {
//     const parent = nodePositions.find((n) => n.id === d.parentId);
//     if (parent) {
//       // return createCurvedLink(parent, d);
//       return createStepLink(parent, d);
//     }
//     return null;
//   })
//   .attr("fill", "none")
//   .attr("stroke", "#999")
//   .attr("stroke-width", 1);
