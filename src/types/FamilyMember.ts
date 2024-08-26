export interface FamilyMember {
  id: string;
  name: string;
  family: string;
  level: number;
  relationships: Relationship[];
}

interface Relationship {
  type: 'parent' | 'child' | 'sibling' | 'spouse' | 'grandparent' | 'grandchild';
  targetId: string;
}