export type Artikull = {
  id: string;
  titulli: string;
  pershkrimi: string;
  cmimi: number;
};

export const artikujt: Artikull[] = [
  {
    id: "a1",
    titulli: "Laptop",
    pershkrimi: "Laptop për studime dhe programim.",
    cmimi: 650,
  },
  {
    id: "a2",
    titulli: "Telefon",
    pershkrimi: "Telefon inteligjent për përdorim të përditshëm.",
    cmimi: 350,
  },
  {
    id: "a3",
    titulli: "Kufje",
    pershkrimi: "Kufje për muzikë dhe komunikim.",
    cmimi: 45,
  },
  {
    id: "a4",
    titulli: "Tastierë",
    pershkrimi: "Tastierë për punë dhe programim.",
    cmimi: 30,
  },
  {
    id: "a5",
    titulli: "Maus",
    pershkrimi: "Maus për laptop ose kompjuter.",
    cmimi: 20,
  },
  {
    id: "a6",
    titulli: "Monitor",
    pershkrimi: "Monitor për një hapësirë pune.",
    cmimi: 180,
  },
];

export function gjeArtikullin(id: string) {
  return artikujt.find((artikulli) => artikulli.id === id);
}
