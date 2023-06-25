export const getExampleData = () => {
  const cells = Array.from({ length: 100 }, () => []);
  return [
    [
      {
        ct: { fa: "General", t: "g" },
        m: "nombre",
        v: "Nombre",
        bl: 1,
      },
      {
        ct: { fa: "General", t: "g" },
        m: "apellido",
        v: "Apellido",
        bl: 1,
      },
      ...cells,
    ],
    [
      {
        ct: { fa: "General", t: "g" },
        m: "Meiyin",
        v: "Meiyin",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "Chang",
        v: "Chang",
      },
      ...cells,
    ],
    [
      {
        ct: { fa: "General", t: "g" },
        m: "Gabriel",
        v: "Gabriel",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "Carreño",
        v: "Carreño",
      },
      ...cells,
    ],
    ...cells,
  ];
};

//Please, read this documentation to find out how this fields word => https://dream-num.github.io/LuckysheetDocs/guide/cell.html#cell-attributes-table
