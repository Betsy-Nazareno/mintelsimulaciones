export const generateCustomers = () => {
  const cells = Array.from({ length: 100 }, () => []);
  return [
    [ 
  /*localhost:8080/spreadsheets/customers sheet1 que se llame clientes*/
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
      {
        ct: { fa: "General", t: "g" },
        m: "correo",
        v: "Correo Electronico",
        bl: 1,
      },
      {
        ct: { fa: "General", t: "g" },
        m: "telefono",
        v: "Telefono",
        bl: 1,
      },
      ...cells,
    ],
    [
      {
        ct: { fa: "General", t: "g" },
        m: "juan",
        v: "Juan",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "rodriguez",
        v: "Rodriguez",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "c0",
        v: "juanrodriguez@example.com",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "t0",
        v: "555-987-6543",
      },
      ...cells,
    ],
    [
      {
        ct: { fa: "General", t: "g" },
        m: "laura",
        v: "Laura",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "garcia",
        v: "Garcia",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "c1",
        v: "lauragarcia@example.com",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "t1",
        v: "555-456-7890",
      },
      ...cells,
    ],
    [
      {
        ct: { fa: "General", t: "g" },
        m: "pedro",
        v: "Pedro",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "fernandez",
        v: "Fernandez",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "c2",
        v: "pedrofernandez@example.com",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "t2",
        v: "555-678-1234",
      },
      ...cells,
    ],
    [
      {
        ct: { fa: "General", t: "g" },
        m: "marta",
        v: "Marta",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "perez",
        v: "Perez",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "c3",
        v: "martaperez@example.com",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "t3",
        v: "555-234-5678",
      },
      ...cells,
    ],
    [
      {
        ct: { fa: "General", t: "g" },
        m: "sofia",
        v: "Sofia",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "ramirez",
        v: "Ramirez",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "c4",
        v: "sofiaramirez@example.com",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "t4",
        v: "555-765-4321",
      },
      ...cells,
    ],
    [
      {
        ct: { fa: "General", t: "g" },
        m: "alejandro",
        v: "Alejandro",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "castro4",
        v: "Castro",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "c5",
        v: "alejandrocastro@example.com",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "t5",
        v: "555-876-5432",
      },
      ...cells,
    ],
    [
      {
        ct: { fa: "General", t: "g" },
        m: "valentina",
        v: "Valentina",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "morales",
        v: "Morales",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "c6",
        v: "valentinamorales@example.com",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "t6",
        v: "555-321-6789",
      },
      ...cells,
    ],
    [
      {
        ct: { fa: "General", t: "g" },
        m: "daniel",
        v: "Daniel",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "castro",
        v: "Castro",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "c7",
        v: "danielsanchez@example.com",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "t7",
        v: "555-890-1234",
      },
      ...cells,
    ],
    [
      {
        ct: { fa: "General", t: "g" },
        m: "natalia",
        v: "Natalia",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "herrera",
        v: "Herrera",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "c8",
        v: "nataliaherrera@example.com",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "t8",
        v: "	555-432-1098",
      },
      ...cells,
    ],
    [
      {
        ct: { fa: "General", t: "g" },
        m: "gabriela",
        v: "Gabriela",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "silva",
        v: "Silva",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "c9",
        v: "gabrielasilva@example.com",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "t9",
        v: "555-876-5432",
      },
      ...cells,
    ],
    [
      {
        ct: { fa: "General", t: "g" },
        m: "andres",
        v: "Andres",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "jimenez",
        v: "Jimenez",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "c10",
        v: "andresjimenez@example.com",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "t10",
        v: "555-654-3210",
      },
      ...cells,
    ],
    [
      {
        ct: { fa: "General", t: "g" },
        m: "carolina",
        v: "Carolina",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "torres",
        v: "Torres",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "c11",
        v: "carolinatorres@example.com",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "t11",
        v: "555-908-7612",
      },
      ...cells,
    ],
    [
      {
        ct: { fa: "General", t: "g" },
        m: "rodrigo",
        v: "Rodrigo",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "navarro",
        v: "Navarro",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "c11",
        v: "rodrgonavarro@example.com",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "t11",
        v: "555-761-2345",
      },
      ...cells,
    ],
    [
      {
        ct: { fa: "General", t: "g" },
        m: "victoria",
        v: "Victoria",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "ortega",
        v: "Ortega",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "c12",
        v: "victoriaortega@example.com",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "t12",
        v: "555-234-1098",
      },
      ...cells,
    ],
    [
      {
        ct: { fa: "General", t: "g" },
        m: "javier",
        v: "Javier",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "mendez",
        v: "Mendez",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "c13",
        v: "javiermendez@example.com",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "t13",
        v: "555-876-5432",
      },
      ...cells,
    ],
    [
      {
        ct: { fa: "General", t: "g" },
        m: "mariana",
        v: "Mariana",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "delgado",
        v: "Delgado",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "c14",
        v: "marianadelgado@example.com",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "t14",
        v: "555-432-9876",
      },
      ...cells,
    ],
    [
      {
        ct: { fa: "General", t: "g" },
        m: "alejandra",
        v: "Alejandra",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "vargas",
        v: "Vargas",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "c15",
        v: "alejandravargas@example.com",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "t15",
        v: "555-987-2109",
      },
      ...cells,
    ],
    [
      {
        ct: { fa: "General", t: "g" },
        m: "diego",
        v: "Diego",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "martinez",
        v: "Martinez",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "c16",
        v: "diegomartinezo@example.com",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "t16",
        v: "555-876-9999",
      },
      ...cells,
    ],
    [
      {
        ct: { fa: "General", t: "g" },
        m: "camila",
        v: "Camila",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "rios",
        v: "Rios",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "c17",
        v: "camilarios@example.com",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "t17",
        v: "555-654-3210",
      },
      ...cells,
    ],
    [
      {
        ct: { fa: "General", t: "g" },
        m: "ricardo",
        v: "Ricardo",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "castro2",
        v: "Castro",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "c18",
        v: "alejandrocastro@example.com",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "t18",
        v: "555-987-6543",
      },
      ...cells,
    ],
    [
      {
        ct: { fa: "General", t: "g" },
        m: "paula",
        v: "Paula",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "morales",
        v: "Morales",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "c19",
        v: "paulamorales@example.com",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "t19",
        v: "555-321-6789",
      },
      ...cells,
    ],
    [
      {
        ct: { fa: "General", t: "g" },
        m: "santiago",
        v: "Santiago",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "herrera",
        v: "Herrera",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "c20",
        v: "santiagoherrera@example.com",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "t20",
        v: "555-890-1234",
      },
      ...cells,
    ],
    [
      {
        ct: { fa: "General", t: "g" },
        m: "sofia2",
        v: "Sofia",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "silva2",
        v: "Silva",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "c21",
        v: "sofiasilva@example.com",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "t21",
        v: "555-123-4567",
      },
      ...cells,
    ],
    [
      {
        ct: { fa: "General", t: "g" },
        m: "marienett",
        v: "Marienette",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "paredes",
        v: "Paredes",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "c22",
        v: "marienetteparedes@example.com",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "t22",
        v: "555-876-9990",
      },
      ...cells,
    ],
    [
      {
        ct: { fa: "General", t: "g" },
        m: "valentina",
        v: "Valentina",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "torres",
        v: "Torres",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "c23",
        v: "valentinatorres@example.com",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "t23",
        v: "555-789-0123",
      },
      ...cells,
    ],
    [
      {
        ct: { fa: "General", t: "g" },
        m: "marianela",
        v: "Marianela",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "jacome",
        v: "Jacome",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "c24",
        v: "alejandrocastro@example.com",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "t24",
        v: "555-876-1010",
      },
      ...cells,
    ],
    [
      {
        ct: { fa: "General", t: "g" },
        m: "carolina",
        v: "Carolina",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "acosta",
        v: "Acosta",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "c25",
        v: "carolinaacosta@example.com",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "t25",
        v: "555-345-6789",
      },
      ...cells,
    ],
    [
      {
        ct: { fa: "General", t: "g" },
        m: "isabella",
        v: "Isabella",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "villa",
        v: "Villa",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "c26",
        v: "alejandrocastro@example.com",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "c26",
        v: "555-876-2525",
      },
      ...cells,
    ],
    [
      {
        ct: { fa: "General", t: "g" },
        m: "waleska",
        v: "Waleska",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "mindiola",
        v: "Mindiola",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "c27",
        v: "waleskamindiola@example.com",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "c27",
        v: "555-876-2626",
      },
      ...cells,
    ],
    [
      {
        ct: { fa: "General", t: "g" },
        m: "ivanna",
        v: "Ivanna",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "gordillo",
        v: "Gordillo",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "c28",
        v: "ivannagordillo@example.com",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "c28",
        v: "555-876-9890",
      },
      ...cells,
    ],
    [
      {
        ct: { fa: "General", t: "g" },
        m: "adriana",
        v: "Adriana",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "benavides",
        v: "Benavides",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "c29",
        v: "adrianabenavides@example.com",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "c29",
        v: "555-876-2345",
      },
      ...cells,
    ],
    [
      {
        ct: { fa: "General", t: "g" },
        m: "annahi",
        v: "Annahi",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "gonzales",
        v: "Gonzales",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "c30",
        v: "annahigonzales@example.com",
      },
      {
        ct: { fa: "General", t: "g" },
        m: "c30",
        v: "555-876-2789",
      },
      ...cells,
    ],
    ...cells,
  ];
};

//Please, read this documentation to find out how this fields word => https://dream-num.github.io/LuckysheetDocs/guide/cell.html#cell-attributes-table
