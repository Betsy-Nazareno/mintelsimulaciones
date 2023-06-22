export const generateCustomers = () => {
  const cells = Array.from({ length: 100 }, () => []);
  return [
    [
      {
        ct: { fa: "General", t: "g" },
        m: "customer1",
        v: "Customer 1",
        bl: 1,
      },
      {
        ct: { fa: "General", t: "g" },
        m: "direccion",
        v: "Direccion",
        bl: 1,
      },
      ...cells,
    ],
    [
      {
        ct: { fa: "General", t: "g" },
        m: "random",
        v: "Random",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "lomas",
        v: "Lomas de la florida",
      },
      ...cells,
    ],
    [
      {
        ct: { fa: "General", t: "g" },
        m: "random2",
        v: "Random 2",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "lomas",
        v: "Lomas de la florida 3",
      },
      ...cells,
    ],
    ...cells,
  ];
};

//Please, read this documentation to find out how this fields word => https://dream-num.github.io/LuckysheetDocs/guide/cell.html#cell-attributes-table
