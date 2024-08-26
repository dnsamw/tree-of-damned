import { FamilyMember } from "./types/FamilyMember";

const Jayawardena: FamilyMember[] = [
  {
    id: "1",
    name: "",
    family: "JAYAWARDENA",
    level: 0,
    relationships: [],
  },
  {
    id: "2",
    name: "Cornalis Jayawardena",
    family: "JAYAWARDENA",
    level: 1,
    relationships: [{ type: "child", targetId: "1" }],
  },
  {
    id: "3",
    name: "James Jayawardena",
    family: "JAYAWARDENA",
    level: 1,
    relationships: [{ type: "sibling", targetId: "2" }],
  },

  {
    id: "4",
    name: "Daniel Jayawardena",
    family: "JAYAWARDENA",
    level: 2,
    relationships: [{ type: "child", targetId: "2" }],
  },

  {
    id: "5",
    name: "Theodore Godfri Jayawardena",
    family: "JAYAWARDENA",
    level: 2,
    relationships: [{ type: "child", targetId: "3" }],
  },

  {
    id: "6",
    name: "Wilford Jayawardena",
    family: "JAYAWARDENA",
    level: 2,
    relationships: [{ type: "child", targetId: "3" }],
  },

  {
    id: "7",
    name: "Felix Jayawardena",
    family: "JAYAWARDENA",
    level: 3,
    relationships: [{ type: "child", targetId: "4" }],
  },

  {
    id: "8",
    name: "J.R Jayawardena",
    family: "JAYAWARDENA",
    level: 3,
    relationships: [{ type: "child", targetId: "4" }],
  },

  {
    id: "9",
    name: "Girly Jayawardena",
    family: "JAYAWARDENA",
    level: 3,
    relationships: [{ type: "child", targetId: "4" }],
  },

  {
    id: "10",
    name: "Ivy Jayawardena",
    family: "JAYAWARDENA",
    level: 4,
    relationships: [{ type: "child", targetId: "7" }],
  },
];
const Wijewardene: FamilyMember[] = [
  {
    id: "11",
    name: "Don Phillip Wijayawardene",
    family: "WIJAYAWARDENE",
    level: 1,
    relationships: [],
  },
  {
    id: "12",
    name: "Helena Depp Weerasinghe",
    family: "WIJAYAWARDENE",
    level: 1,
    relationships: [{ type: "spouse", targetId: "11" }],
  },
  {
    id: "13",
    name: "Agnes Wijayawardene",
    family: "WIJAYAWARDENE",
    level: 2,
    relationships: [{ type: "sibling", targetId: "11" }, {type: "spouse", targetId: "6"}],
  },

  {
    id: "14",
    name: "Don Walter Wijayawardene",
    family: "WIJAYAWARDENE",
    level: 2,
    relationships: [{ type: "child", targetId: "11" }],
  },

  {
    id: "15",
    name: "Don Charles Wijayawardene",
    family: "WIJAYAWARDENE",
    level: 2,
    relationships: [{ type: "child", targetId: "11" }],
  },

  {
    id: "16",
    name: "Wimala Wijayawardene",
    family: "WIJAYAWARDENE",
    level: 2,
    relationships: [{type: "spouse", targetId: "15"}],
  },

  {
    id: "17",
    name: "Don Edmond Wijayawardene",
    family: "WIJAYAWARDENE",
    level: 2,
    relationships: [{ type: "child", targetId: "11" }],
  },

  {
    id: "18",
    name: "Don Luise Wijayawardene",
    family: "WIJAYAWARDENE",
    level: 2,
    relationships: [{ type: "child", targetId: "11" }],
  },

  {
    id: "19",
    name: "Don Phillip Alexander Wijayawardene",
    family: "WIJAYAWARDENE",
    level: 2,
    relationships: [{ type: "child", targetId: "11" }],
  },

  {
    id: "20",
    name: "Don Richard Wijayawardene",
    family: "WIJAYAWARDENE",
    level: 2,
    relationships: [{ type: "child", targetId: "11" }],
  },

  {
    id: "21",
    name: "Upali Wijayawardene",
    family: "WIJAYAWARDENE",
    level: 3,
    relationships: [{ type: "child", targetId: "15" }],
  },
  {
    id: "22",
    name: "Anoja Devu Wijayawardene",
    family: "WIJAYAWARDENE",
    level: 3,
    relationships: [{ type: "child", targetId: "15" }, {type: "sibling", targetId: "21"}],
  },
  {
    id: "23",
    name: "Stanley Wijesundara",
    family: "WIJAYAWARDENE",
    level: 3,
    relationships: [{type: "spouse", targetId: "22"}],
  },
  {
    id: "24",
    name: "Rewatha Wijewardene",
    family: "WIJAYAWARDENE",
    level: 3,
    relationships: [{type: "child", targetId: "17"}],
  },
  {
    id: "25",
    name: "Donald Joseph Wijewardene",
    family: "WIJAYAWARDENE",
    level: 3,
    relationships: [{type: "child", targetId: "18"}],
  },
  {
    id: "26",
    name: "Irangani Wijewardene",
    family: "WIJAYAWARDENE",
    level: 3,
    relationships: [{type: "child", targetId: "19"},{type: "spouse", targetId: "24"}],
  },
  {
    id: "27",
    name: "Ranjith Wijewardene",
    family: "WIJAYAWARDENE",
    level: 3,
    relationships: [{type: "child", targetId: "20"}],
  },
  {
    id: "28",
    name: "Nalini Wijewardene",
    family: "WIJAYAWARDENE",
    level: 3,
    relationships: [{type: "child", targetId: "20"}],
  },
  {
    id: "29",
    name: "Ruwan Wijewardene",
    family: "WIJAYAWARDENE",
    level: 4,
    relationships: [{type: "child", targetId: "27"}],
  },


];
const Meedeniya: FamilyMember[] = [
  {
    id: "30",
    name: "Joseph Henry Meedeniya",
    family: "MEEDENIYA",
    level: 1,
    relationships: [],
  },
  {
    id: "31",
    name: "Emilia Maddalena",
    family: "MEEDENIYA",
    level: 1,
    relationships: [{ type: "spouse", targetId: "30" }],
  },
  {
    id: "32",
    name: "Alice Ruby Meedeniya",
    family: "MEEDENIYA",
    level: 2,
    relationships: [{ type: "child", targetId: "30" }, {type: "spouse", targetId: "20"}],
  },

  {
    id: "33",
    name: "Adeline Meedenya",
    family: "MEEDENIYA",
    level: 2,
    relationships: [{ type: "child", targetId: "30" }],
  },
];

const Other1: FamilyMember[] = [
  {
    id: "34",
    name: "Francis Molamure",
    family: "OTHER_1",
    level: 1,
    relationships: [{type: "spouse", targetId: "33"}],
  },
  {
    id: "35",
    name: "",
    family: "OTHER_1",
    level: 1,
    relationships: [],
  },
  {
    id: "36",
    name: "Danny Weerathunga",
    family: "OTHER_1",
    level: 3,
    relationships: [{type: "child", targetId: "35"}],
  },
  {
    id: "37",
    name: "Emaline Weerathunga",
    family: "OTHER_1",
    level: 3,
    relationships: [{type: "child", targetId: "35"}],
  },
]
const Rajapaksa: FamilyMember[] = [
  {
    id: "38",
    name: "Don David Rajapaksa",
    family: "RAJAPAKSA",
    level: 1,
    relationships: [],
  },
  {
    id: "39",
    name: "Gimara Munasinghe",
    family: "RAJAPAKSA",
    level: 1,
    relationships: [{type: "spouse", targetId: "38"}],
  },
  {
    id: "40",
    name: "Don Matthew Rajapaksa",
    family: "RAJAPAKSA",
    level: 2,
    relationships: [{type: "child", targetId: "38"},{type: "spouse", targetId: "37"}],
  },
  {
    id: "41",
    name: "Don Alvin Rajapaksa",
    family: "RAJAPAKSA",
    level: 2,
    relationships: [{type: "child", targetId: "38"}],
  },
  {
    id: "41",
    name: "Dandina Samarasinghe",
    family: "RAJAPAKSA",
    level: 2,
    relationships: [{type: "spouse", targetId: "41"}],
  },
]
export const sampleFamilyData: FamilyMember[] = [
  ...Jayawardena,
  ...Wijewardene,
  ...Meedeniya,
  ...Other1,
  ...Rajapaksa
];
