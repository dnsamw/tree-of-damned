import { TreeData } from "./types/TreeData";

export const sampleData: TreeData = {
    name: "Root",
    children: [
      {
        name: "Category 1",
        children: [
          { name: "Subcategory 1.1", children: [
            { name: "Item 1.1.1" },
            { name: "Item 1.1.2" },
            { name: "Item 1.1.3" },
          ]},
          { name: "Subcategory 1.2", children: [
            { name: "Item 1.2.1" },
            { name: "Item 1.2.2" },
          ]},
        ]
      },
      {
        name: "Category 2",
        children: [
          { name: "Subcategory 2.1", children: [
            { name: "Item 2.1.1" },
            { name: "Item 2.1.2" },
          ]},
          { name: "Subcategory 2.2", children: [
            { name: "Item 2.2.1" },
            { name: "Item 2.2.2" },
            { name: "Item 2.2.3" },
          ]},
        ]
      },
      // Add more categories to fill out the circle
    ]
  };