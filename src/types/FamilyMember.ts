// types/FamilyMember.ts
export interface FamilyMember {
    id: string;
    name: string;
    family: string;
    parentId?: string;
    level: number;
  }