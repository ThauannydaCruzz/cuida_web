import { HealthUnit } from "@/types/health-units";

export const healthUnits: HealthUnit[] = [
  // UBSs
  {
    id: "ubs-alto-cafezal",
    name: "UBS Alto Cafezal",
    type: "UBS",
    address: "Rua Paes Lemes, 850",
    coordinates: [-22.2144, -49.9463],
    phone: "(14) 3402-1234",
    manager: "Dr. Ana Santos",
    status: "healthy",
    workingHours: "07:00 - 17:00",
    services: ["Consultas", "Vacinas", "Curativos"],
    medications: [
      {
        id: "med1",
        name: "Dipirona",
        dosage: "500mg",
        quantity: 150,
        minStock: 50,
        maxStock: 300,
        status: "healthy"
      },
      {
        id: "med2",
        name: "Paracetamol",
        dosage: "750mg",
        quantity: 80,
        minStock: 50,
        maxStock: 200,
        status: "healthy"
      }
    ]
  },
  {
    id: "ubs-bandeirantes",
    name: "UBS Bandeirantes",
    type: "UBS",
    address: "Rua Albericio Mendes Pinto, 96",
    coordinates: [-22.2156, -49.9445],
    phone: "(14) 3402-1235",
    manager: "Dra. Maria Silva",
    status: "normal",
    workingHours: "07:00 - 17:00",
    services: ["Consultas", "Pré-natal", "Curativos"],
    medications: [
      {
        id: "med3",
        name: "Ibuprofeno",
        dosage: "400mg",
        quantity: 60,
        minStock: 40,
        maxStock: 150,
        status: "normal"
      },
      {
        id: "med4",
        name: "Amoxicilina",
        dosage: "500mg",
        quantity: 45,
        minStock: 30,
        maxStock: 120,
        status: "normal"
      }
    ]
  },
  {
    id: "ubs-cascata",
    name: "UBS Cascata",
    type: "UBS",
    address: "Rua Cláudio Manoel da Costa, 43",
    coordinates: [-22.2167, -49.9428],
    phone: "(14) 3402-1236",
    manager: "Dr. João Costa",
    status: "attention",
    workingHours: "07:00 - 17:00",
    services: ["Consultas", "Vacinas", "Pediatria"],
    medications: [
      {
        id: "med5",
        name: "Losartana",
        dosage: "50mg",
        quantity: 25,
        minStock: 40,
        maxStock: 100,
        status: "attention"
      },
      {
        id: "med6",
        name: "Metformina",
        dosage: "850mg",
        quantity: 35,
        minStock: 30,
        maxStock: 120,
        status: "normal"
      }
    ]
  },
  {
    id: "ubs-castelo-branco",
    name: "UBS Castelo Branco",
    type: "UBS",
    address: "Rua Adamantina, 15",
    coordinates: [-22.2178, -49.9411],
    phone: "(14) 3402-1237",
    manager: "Dra. Carla Oliveira",
    status: "healthy",
    workingHours: "07:00 - 17:00",
    services: ["Consultas", "Curativos", "Vacinas"],
    medications: [
      {
        id: "med7",
        name: "Captopril",
        dosage: "25mg",
        quantity: 90,
        minStock: 40,
        maxStock: 150,
        status: "healthy"
      }
    ]
  },
  {
    id: "ubs-chico-mendes",
    name: "UBS Chico Mendes",
    type: "UBS",
    address: "Rua Amador Bueno, 1085",
    coordinates: [-22.2189, -49.9394],
    phone: "(14) 3402-1238",
    manager: "Dr. Pedro Lima",
    status: "urgent",
    workingHours: "07:00 - 17:00",
    services: ["Consultas", "Urgência", "Curativos"],
    medications: [
      {
        id: "med8",
        name: "Insulina",
        dosage: "100UI/ml",
        quantity: 0,
        minStock: 20,
        maxStock: 80,
        status: "urgent"
      },
      {
        id: "med9",
        name: "Atenolol",
        dosage: "50mg",
        quantity: 15,
        minStock: 30,
        maxStock: 100,
        status: "urgent"
      }
    ]
  },
  {
    id: "ubs-costa-silva",
    name: "UBS Costa e Silva",
    type: "UBS",
    address: "Rua Fernando Fontana, 300",
    coordinates: [-22.2200, -49.9377],
    phone: "(14) 3402-1239",
    manager: "Dra. Isabel Costa",
    status: "normal",
    workingHours: "07:00 - 17:00",
    services: ["Consultas", "Vacinas", "Pré-natal"],
    medications: [
      {
        id: "med17",
        name: "Sulfato Ferroso",
        dosage: "40mg",
        quantity: 70,
        minStock: 50,
        maxStock: 200,
        status: "normal"
      }
    ]
  },
  {
    id: "usf-jk",
    name: "USF JK (D. Maria da Conceição Brandão)",
    type: "USF",
    address: "Rua Lucílio Coelho de Oliveira, 5",
    coordinates: [-22.2211, -49.9360],
    phone: "(14) 3402-1240",
    manager: "Dr. Carlos Santos",
    status: "healthy",
    workingHours: "07:00 - 17:00",
    services: ["Consultas", "Saúde da Família", "Vacinas"],
    medications: [
      {
        id: "med18",
        name: "Ácido Fólico",
        dosage: "5mg",
        quantity: 120,
        minStock: 60,
        maxStock: 300,
        status: "healthy"
      }
    ]
  },
  {
    id: "ubs-nova-marilia",
    name: "UBS Nova Marília",
    type: "UBS",
    address: "Av. Mem de Sá, 360■A",
    coordinates: [-22.2089, -49.9550],
    phone: "(14) 3402-1241",
    manager: "Dra. Rosa Lima",
    status: "attention",
    workingHours: "07:00 - 17:00",
    services: ["Consultas", "Curativos", "Vacinas"],
    medications: [
      {
        id: "med19",
        name: "Dexametasona",
        dosage: "4mg",
        quantity: 30,
        minStock: 40,
        maxStock: 120,
        status: "attention"
      }
    ]
  },
  {
    id: "ubs-planalto",
    name: "UBS Planalto",
    type: "UBS",
    address: "Rua Gildo Bonato, 207",
    coordinates: [-22.1978, -49.9612],
    phone: "(14) 3402-1242",
    manager: "Dr. Fernando Silva",
    status: "normal",
    workingHours: "07:00 - 17:00",
    services: ["Consultas", "Pediatria", "Vacinas"],
    medications: [
      {
        id: "med20",
        name: "Vitamina D",
        dosage: "2000UI",
        quantity: 85,
        minStock: 50,
        maxStock: 200,
        status: "normal"
      }
    ]
  },
  {
    id: "ubs-sao-judas",
    name: "UBS São Judas",
    type: "UBS",
    address: "Rua Ribeirão Preto, 510",
    coordinates: [-22.2067, -49.9334],
    phone: "(14) 3402-1243",
    manager: "Dra. Paula Santos",
    status: "healthy",
    workingHours: "07:00 - 17:00",
    services: ["Consultas", "Hipertensos", "Diabéticos"],
    medications: [
      {
        id: "med21",
        name: "Glibenclamida",
        dosage: "5mg",
        quantity: 110,
        minStock: 60,
        maxStock: 250,
        status: "healthy"
      }
    ]
  },
  {
    id: "ubs-sao-miguel",
    name: "UBS São Miguel",
    type: "UBS",
    address: "Rua 24 de Dezembro, 2865",
    coordinates: [-22.2278, -49.9201],
    phone: "(14) 3402-1244",
    manager: "Dr. Miguel Costa",
    status: "urgent",
    workingHours: "07:00 - 17:00",
    services: ["Consultas", "Urgência", "Curativos"],
    medications: [
      {
        id: "med22",
        name: "Prednisona",
        dosage: "20mg",
        quantity: 5,
        minStock: 30,
        maxStock: 100,
        status: "urgent"
      }
    ]
  },
  {
    id: "ubs-santa-antonieta",
    name: "UBS Santa Antonieta",
    type: "UBS",
    address: "Rua Profª Berta de Camargo Vieira, 595",
    coordinates: [-22.2101, -49.9512],
    phone: "(14) 3402-1245",
    manager: "Dra. Antonieta Lima",
    status: "normal",
    workingHours: "07:00 - 17:00",
    services: ["Consultas", "Ginecologia", "Pré-natal"],
    medications: [
      {
        id: "med23",
        name: "Anticoncepcional",
        dosage: "21 comp",
        quantity: 65,
        minStock: 40,
        maxStock: 150,
        status: "normal"
      }
    ]
  },
  {
    id: "usf-aniz-badra",
    name: "USF Aniz Badra",
    type: "USF",
    address: "Rua Urias Avelino de Moraes, s/n",
    coordinates: [-22.1945, -49.9456],
    phone: "(14) 3402-1246",
    manager: "Dr. Aniz Badra",
    status: "healthy",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Vacinas", "Consultas"],
    medications: [
      {
        id: "med24",
        name: "Complexo B",
        dosage: "comp",
        quantity: 140,
        minStock: 80,
        maxStock: 300,
        status: "healthy"
      }
    ]
  },
  {
    id: "usf-parque-nacoes",
    name: "USF Parque das Nações",
    type: "USF",
    address: "Rua Antonio Spressão, 465",
    coordinates: [-22.2123, -49.9501],
    phone: "(14) 3402-1247",
    manager: "Dra. Nação Silva",
    status: "attention",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Pediatria", "Vacinas"],
    medications: [
      {
        id: "med25",
        name: "Simeticona",
        dosage: "40mg",
        quantity: 35,
        minStock: 50,
        maxStock: 150,
        status: "attention"
      }
    ]
  },
  {
    id: "usf-rosalia",
    name: "USF Rosália",
    type: "USF",
    address: "Rua Kaniti Yamani, s/n",
    coordinates: [-22.1889, -49.9601],
    phone: "(14) 3402-1248",
    manager: "Dra. Rosália Santos",
    status: "normal",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Consultas", "Curativos"],
    medications: [
      {
        id: "med26",
        name: "Cefalexina",
        dosage: "500mg",
        quantity: 75,
        minStock: 60,
        maxStock: 200,
        status: "normal"
      }
    ]
  },
  {
    id: "usf-avencas",
    name: "USF Avencas",
    type: "USF",
    address: "Av. Vitória Régia, 608",
    coordinates: [-22.1834, -49.9723],
    phone: "(14) 3402-1249",
    manager: "Dr. Avencas Costa",
    status: "healthy",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Vacinas", "Pré-natal"],
    medications: [
      {
        id: "med27",
        name: "Albendazol",
        dosage: "400mg",
        quantity: 95,
        minStock: 50,
        maxStock: 200,
        status: "healthy"
      }
    ]
  },
  {
    id: "usf-amadeu-amaral",
    name: "USF Amadeu Amaral",
    type: "USF",
    address: "Rua Dr. Felipe Navas, 204",
    coordinates: [-22.2345, -49.9278],
    phone: "(14) 3402-1250",
    manager: "Dr. Amadeu Amaral",
    status: "urgent",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Urgência", "Consultas"],
    medications: [
      {
        id: "med28",
        name: "Furosemida",
        dosage: "40mg",
        quantity: 8,
        minStock: 30,
        maxStock: 100,
        status: "urgent"
      }
    ]
  },
  {
    id: "usf-lacio",
    name: "USF Lácio",
    type: "USF",
    address: "Av. Brasil, 272",
    coordinates: [-22.2144, -49.9463],
    phone: "(14) 3402-1251",
    manager: "Dr. Lácio Lima",
    status: "normal",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Consultas", "Vacinas"],
    medications: [
      {
        id: "med29",
        name: "Nimesulida",
        dosage: "100mg",
        quantity: 55,
        minStock: 40,
        maxStock: 150,
        status: "normal"
      }
    ]
  },
  {
    id: "usf-figueirinha",
    name: "USF Figueirinha",
    type: "USF",
    address: "Av. José Jorente, 291",
    coordinates: [-22.2456, -49.9123],
    phone: "(14) 3402-1252",
    manager: "Dra. Figueirinha Santos",
    status: "attention",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Pediatria", "Vacinas"],
    medications: [
      {
        id: "med30",
        name: "Loratadina",
        dosage: "10mg",
        quantity: 40,
        minStock: 50,
        maxStock: 200,
        status: "attention"
      }
    ]
  },
  {
    id: "usf-vila-barros",
    name: "USF Vila Barros",
    type: "USF",
    address: "Rua Amando Oliveira Rocha Filho, 10",
    coordinates: [-22.2567, -49.9089],
    phone: "(14) 3402-1253",
    manager: "Dr. Barros Silva",
    status: "healthy",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Consultas", "Curativos"],
    medications: [
      {
        id: "med31",
        name: "Diclofenaco",
        dosage: "50mg",
        quantity: 125,
        minStock: 70,
        maxStock: 250,
        status: "healthy"
      }
    ]
  },
  {
    id: "usf-aeroporto",
    name: "USF Aeroporto",
    type: "USF",
    address: "Rua Iporâs, 5",
    coordinates: [-22.1723, -49.9234],
    phone: "(14) 3402-1254",
    manager: "Dr. Aeroporto Costa",
    status: "normal",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Vacinas", "Consultas"],
    medications: [
      {
        id: "med32",
        name: "Ranitidina",
        dosage: "150mg",
        quantity: 80,
        minStock: 60,
        maxStock: 200,
        status: "normal"
      }
    ]
  },
  {
    id: "usf-marajo",
    name: "USF Marajó",
    type: "USF",
    address: "Rua Japão, 380",
    coordinates: [-22.1945, -49.9178],
    phone: "(14) 3402-1255",
    manager: "Dra. Marajó Lima",
    status: "urgent",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Urgência", "Pediatria"],
    medications: [
      {
        id: "med33",
        name: "Salbutamol",
        dosage: "100mcg",
        quantity: 12,
        minStock: 25,
        maxStock: 80,
        status: "urgent"
      }
    ]
  },
  {
    id: "usf-julieta",
    name: "USF Julieta",
    type: "USF",
    address: "Rua Eliezer Rocha, 2505",
    coordinates: [-22.2678, -49.9045],
    phone: "(14) 3402-1256",
    manager: "Dra. Julieta Santos",
    status: "healthy",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Ginecologia", "Pré-natal"],
    medications: [
      {
        id: "med34",
        name: "Fluoxetina",
        dosage: "20mg",
        quantity: 100,
        minStock: 60,
        maxStock: 200,
        status: "healthy"
      }
    ]
  },
  {
    id: "usf-santa-antonieta-ii",
    name: "USF Santa Antonieta II",
    type: "USF",
    address: "Rua Luciano Borguetti, 148",
    coordinates: [-22.2089, -49.9523],
    phone: "(14) 3402-1257",
    manager: "Dr. Antonieta II",
    status: "attention",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Consultas", "Vacinas"],
    medications: [
      {
        id: "med35",
        name: "Clonidina",
        dosage: "0,15mg",
        quantity: 45,
        minStock: 50,
        maxStock: 150,
        status: "attention"
      }
    ]
  },
  {
    id: "usf-toffoli",
    name: "USF Tóffoli",
    type: "USF",
    address: "Rua Yutaka Kamakura, 34",
    coordinates: [-22.1812, -49.9789],
    phone: "(14) 3402-1258",
    manager: "Dr. Tóffoli Silva",
    status: "normal",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Consultas", "Curativos"],
    medications: [
      {
        id: "med36",
        name: "Propranolol",
        dosage: "40mg",
        quantity: 70,
        minStock: 50,
        maxStock: 180,
        status: "normal"
      }
    ]
  },
  {
    id: "usf-parque-ipes",
    name: "USF Parque dos Ipês",
    type: "USF",
    address: "Rua Francisco da Costa Pimentel, 880",
    coordinates: [-22.1723, -49.9612],
    phone: "(14) 3402-1259",
    manager: "Dra. Ipês Costa",
    status: "healthy",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Vacinas", "Pediatria"],
    medications: [
      {
        id: "med37",
        name: "Vitamina C",
        dosage: "500mg",
        quantity: 160,
        minStock: 80,
        maxStock: 300,
        status: "healthy"
      }
    ]
  },
  {
    id: "usf-santa-augusta",
    name: "USF Santa Augusta",
    type: "USF",
    address: "Rua Gildo Bonato, 207",
    coordinates: [-22.1978, -49.9623],
    phone: "(14) 3402-1260",
    manager: "Dr. Augusta Lima",
    status: "urgent",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Urgência", "Consultas"],
    medications: [
      {
        id: "med38",
        name: "Levotiroxina",
        dosage: "50mcg",
        quantity: 15,
        minStock: 40,
        maxStock: 120,
        status: "urgent"
      }
    ]
  },
  {
    id: "usf-vila-nova",
    name: "USF Vila Nova",
    type: "USF",
    address: "Rua Hermes da Fonseca, 496",
    coordinates: [-22.2456, -49.9312],
    phone: "(14) 3402-1261",
    manager: "Dra. Nova Santos",
    status: "normal",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Consultas", "Vacinas"],
    medications: [
      {
        id: "med39",
        name: "Maleato de Enalapril",
        dosage: "10mg",
        quantity: 85,
        minStock: 60,
        maxStock: 200,
        status: "normal"
      }
    ]
  },
  {
    id: "usf-vila-hipica",
    name: "USF Vila Hípica",
    type: "USF",
    address: "Rua Luiz Manhães, 156",
    coordinates: [-22.2334, -49.9345],
    phone: "(14) 3402-1262",
    manager: "Dr. Hípica Silva",
    status: "attention",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Pediatria", "Vacinas"],
    medications: [
      {
        id: "med40",
        name: "Bromexina",
        dosage: "8mg",
        quantity: 40,
        minStock: 50,
        maxStock: 150,
        status: "attention"
      }
    ]
  },
  {
    id: "usf-palmital",
    name: "USF Palmital",
    type: "USF",
    address: "Rua Bartholomé Lopes Vilharrubia, 397",
    coordinates: [-22.2789, -49.8967],
    phone: "(14) 3402-1263",
    manager: "Dr. Palmital Costa",
    status: "healthy",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Consultas", "Curativos"],
    medications: [
      {
        id: "med41",
        name: "Azitromicina",
        dosage: "500mg",
        quantity: 110,
        minStock: 60,
        maxStock: 200,
        status: "healthy"
      }
    ]
  },
  {
    id: "usf-altaneira",
    name: "USF Altaneira",
    type: "USF",
    address: "Rua Riachuelo, 139",
    coordinates: [-22.2144, -49.9478],
    phone: "(14) 3402-1264",
    manager: "Dra. Altaneira Lima",
    status: "normal",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Vacinas", "Consultas"],
    medications: [
      {
        id: "med42",
        name: "Benzocaína",
        dosage: "gel 20%",
        quantity: 65,
        minStock: 40,
        maxStock: 150,
        status: "normal"
      }
    ]
  },
  {
    id: "usf-novo-horizonte",
    name: "USF Novo Horizonte",
    type: "USF",
    address: "Rua Orlando Silva, 15",
    coordinates: [-22.1678, -49.9834],
    phone: "(14) 3402-1265",
    manager: "Dr. Horizonte Santos",
    status: "urgent",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Urgência", "Pediatria"],
    medications: [
      {
        id: "med43",
        name: "Dextrometorfano",
        dosage: "15mg",
        quantity: 10,
        minStock: 30,
        maxStock: 100,
        status: "urgent"
      }
    ]
  },
  {
    id: "usf-jardim-marilia",
    name: "USF Jardim Marília",
    type: "USF",
    address: "Rua Jesuítas, 40",
    coordinates: [-22.2567, -49.9156],
    phone: "(14) 3402-1266",
    manager: "Dra. Marília Silva",
    status: "healthy",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Ginecologia", "Pré-natal"],
    medications: [
      {
        id: "med44",
        name: "Clotrimazol",
        dosage: "creme 1%",
        quantity: 130,
        minStock: 70,
        maxStock: 250,
        status: "healthy"
      }
    ]
  },
  {
    id: "usf-tres-lagos",
    name: "USF Três Lagos",
    type: "USF",
    address: "Rua Sebastião Innocêncio de Oliveira, 30",
    coordinates: [-22.2900, -49.8789],
    phone: "(14) 3402-1267",
    manager: "Dr. Lagos Costa",
    status: "attention",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Consultas", "Vacinas"],
    medications: [
      {
        id: "med45",
        name: "Anlodipino",
        dosage: "5mg",
        quantity: 35,
        minStock: 50,
        maxStock: 180,
        status: "attention"
      }
    ]
  },
  {
    id: "usf-jardim-america-iv",
    name: "USF Jardim América IV",
    type: "USF",
    address: "Rua Arnaldo Silva, 63",
    coordinates: [-22.1834, -49.9612],
    phone: "(14) 3402-1268",
    manager: "Dra. América Lima",
    status: "normal",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Pediatria", "Vacinas"],
    medications: [
      {
        id: "med46",
        name: "Cloridrato de Ranitidina",
        dosage: "150mg",
        quantity: 90,
        minStock: 60,
        maxStock: 200,
        status: "normal"
      }
    ]
  },
  {
    id: "usf-campo-belo-santa-helena",
    name: "USF Campo Belo – Santa Helena",
    type: "USF",
    address: "Fazenda do Estado, Casa nº 09",
    coordinates: [-22.3123, -49.8567],
    phone: "(14) 3402-1269",
    manager: "Dr. Campo Belo",
    status: "healthy",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Consultas Rural", "Vacinas"],
    medications: [
      {
        id: "med47",
        name: "Soro de Reidratação",
        dosage: "sachê",
        quantity: 200,
        minStock: 100,
        maxStock: 400,
        status: "healthy"
      }
    ]
  },
  {
    id: "usf-campo-belo-dirceu",
    name: "USF Campo Belo – Dirceu",
    type: "USF",
    address: "Av. Sampaio Vidal, s/n",
    coordinates: [-22.3089, -49.8623],
    phone: "(14) 3402-1270",
    manager: "Dra. Dirceu Santos",
    status: "urgent",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Urgência Rural", "Consultas"],
    medications: [
      {
        id: "med48",
        name: "Permanganato de Potássio",
        dosage: "comp 100mg",
        quantity: 8,
        minStock: 25,
        maxStock: 80,
        status: "urgent"
      }
    ]
  },
  {
    id: "usf-jardim-renata",
    name: "USF Jardim Renata",
    type: "USF",
    address: "Rua Antonia Bergamini Sândalo, 35",
    coordinates: [-22.1945, -49.9234],
    phone: "(14) 3402-1271",
    manager: "Dr. Renata Silva",
    status: "normal",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Consultas", "Vacinas"],
    medications: [
      {
        id: "med49",
        name: "Betametasona",
        dosage: "creme 0,1%",
        quantity: 75,
        minStock: 50,
        maxStock: 150,
        status: "normal"
      }
    ]
  },
  {
    id: "usf-jardim-flamingo",
    name: "USF Jardim Flamingo",
    type: "USF",
    address: "Rua Padre José Osvaldo Nunes, s/n",
    coordinates: [-22.2123, -49.9234],
    phone: "(14) 3402-1272",
    manager: "Dra. Flamingo Costa",
    status: "attention",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Pediatria", "Vacinas"],
    medications: [
      {
        id: "med50",
        name: "Polivitamínico",
        dosage: "gotas",
        quantity: 40,
        minStock: 50,
        maxStock: 200,
        status: "attention"
      }
    ]
  },
  {
    id: "usf-jardim-teruel",
    name: "USF Jardim Teruel",
    type: "USF",
    address: "Rua Elias Rifan, 35",
    coordinates: [-22.2345, -49.9189],
    phone: "(14) 3402-1273",
    manager: "Dr. Teruel Lima",
    status: "healthy",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Consultas", "Curativos"],
    medications: [
      {
        id: "med51",
        name: "Neomicina + Bacitracina",
        dosage: "pomada",
        quantity: 120,
        minStock: 60,
        maxStock: 250,
        status: "healthy"
      }
    ]
  },
  {
    id: "usf-argolo-ferrao",
    name: "USF Argolo Ferrão",
    type: "USF",
    address: "Rua Monsenhor João Baptista, 331",
    coordinates: [-22.2456, -49.9401],
    phone: "(14) 3402-1274",
    manager: "Dra. Argolo Santos",
    status: "normal",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Vacinas", "Consultas"],
    medications: [
      {
        id: "med52",
        name: "Eritromicina",
        dosage: "500mg",
        quantity: 80,
        minStock: 60,
        maxStock: 200,
        status: "normal"
      }
    ]
  },
  {
    id: "usf-primeiro-maio",
    name: "USF 1º de Maio",
    type: "USF",
    address: "Av. José Jorente, 291",
    coordinates: [-22.2467, -49.9112],
    phone: "(14) 3402-1275",
    manager: "Dr. Maio Silva",
    status: "urgent",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Urgência", "Pediatria"],
    medications: [
      {
        id: "med53",
        name: "Prednisolona",
        dosage: "5mg",
        quantity: 12,
        minStock: 30,
        maxStock: 100,
        status: "urgent"
      }
    ]
  },
  {
    id: "usf-santa-antonieta-iii",
    name: "USF Santa Antonieta III",
    type: "USF",
    address: "Rua Eliezer Rocha, 2505",
    coordinates: [-22.2689, -49.9034],
    phone: "(14) 3402-1276",
    manager: "Dra. Antonieta III",
    status: "attention",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Consultas", "Vacinas"],
    medications: [
      {
        id: "med54",
        name: "Clorexidina",
        dosage: "solução 0,12%",
        quantity: 45,
        minStock: 50,
        maxStock: 150,
        status: "attention"
      }
    ]
  },
  {
    id: "usf-padre-nobrega-ii",
    name: "USF Padre Nóbrega II",
    type: "USF",
    address: "Rua Salgado Filho, 30",
    coordinates: [-22.2234, -49.9367],
    phone: "(14) 3402-1277",
    manager: "Dr. Nóbrega Costa",
    status: "healthy",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Ginecologia", "Pré-natal"],
    medications: [
      {
        id: "med55",
        name: "Cetoprofeno",
        dosage: "100mg",
        quantity: 105,
        minStock: 70,
        maxStock: 200,
        status: "healthy"
      }
    ]
  },
  // UPAs
  {
    id: "upa-norte",
    name: "UPA Norte (Zona Norte)",
    type: "UPA",
    address: "Rua João Caliman, 110, Parque das Nações",
    coordinates: [-22.2123, -49.9501],
    phone: "(14) 3402-2000",
    manager: "Dr. Roberto Santos",
    status: "normal",
    workingHours: "24h",
    services: ["Emergência", "Urgência", "Observação"],
    medications: [
      {
        id: "med56",
        name: "Morfina",
        dosage: "10mg/ml",
        quantity: 25,
        minStock: 20,
        maxStock: 80,
        status: "normal"
      },
      {
        id: "med57",
        name: "Soro Fisiológico",
        dosage: "500ml",
        quantity: 150,
        minStock: 100,
        maxStock: 500,
        status: "normal"
      }
    ]
  },
  {
    id: "upa-sul",
    name: "UPA Zona Sul",
    type: "UPA",
    address: "Rua Antônio Pereira da Silva, 288, Hípica Paulista",
    coordinates: [-22.2301, -49.9358],
    phone: "(14) 3402-2001",
    manager: "Dra. Sandra Costa",
    status: "attention",
    workingHours: "24h",
    services: ["Emergência", "Urgência", "Observação"],
    medications: [
      {
        id: "med58",
        name: "Adrenalina",
        dosage: "1mg/ml",
        quantity: 8,
        minStock: 15,
        maxStock: 50,
        status: "attention"
      }
    ]
  },
  // Farmácias Municipais
  {
    id: "farmacia-central",
    name: "Farmácia Municipal Central",
    type: "Farmácia",
    address: "Rua Hidekichi Nomura, 170, Fragata",
    coordinates: [-22.2156, -49.9478],
    phone: "(14) 3402-3000",
    manager: "Farm. Lucas Almeida",
    status: "healthy",
    workingHours: "08:00 - 17:00",
    services: ["Dispensação", "Medicamentos Especiais"],
    medications: [
      {
        id: "med59",
        name: "Omeprazol",
        dosage: "20mg",
        quantity: 200,
        minStock: 80,
        maxStock: 400,
        status: "healthy"
      },
      {
        id: "med60",
        name: "Sinvastatina",
        dosage: "40mg",
        quantity: 120,
        minStock: 50,
        maxStock: 250,
        status: "healthy"
      }
    ]
  },
  {
    id: "farmacia-norte",
    name: "Farmácia Municipal Zona Norte",
    type: "Farmácia",
    address: "Av. Professora Berta de Camargo Vieira, 595",
    coordinates: [-22.2101, -49.9512],
    phone: "(14) 3402-3001",
    manager: "Farm. Rita Santos",
    status: "normal",
    workingHours: "08:00 - 17:00",
    services: ["Dispensação", "Programa Hiperdia"],
    medications: [
      {
        id: "med61",
        name: "Hidroclorotiazida",
        dosage: "25mg",
        quantity: 75,
        minStock: 50,
        maxStock: 200,
        status: "normal"
      }
    ]
  },
  {
    id: "farmacia-sul",
    name: "Farmácia Municipal Zona Sul",
    type: "Farmácia",
    address: "Av. João Ramalho, 1081, Parque São Jorge",
    coordinates: [-22.2334, -49.9389],
    phone: "(14) 3402-3002",
    manager: "Farm. André Silva",
    status: "healthy",
    workingHours: "08:00 - 17:00",
    services: ["Dispensação", "Medicamentos Controlados"],
    medications: [
      {
        id: "med62",
        name: "Clonazepam",
        dosage: "2mg",
        quantity: 60,
        minStock: 30,
        maxStock: 100,
        status: "healthy"
      }
    ]
  },
  {
    id: "farmacia-oeste",
    name: "Farmácia Municipal Zona Oeste",
    type: "Farmácia",
    address: "Av. Maria Fernandes Cavallari, 2287, Jardim Cavalari",
    coordinates: [-22.2145, -49.9612],
    phone: "(14) 3402-3003",
    manager: "Farm. Oeste Lima",
    status: "attention",
    workingHours: "08:00 - 17:00",
    services: ["Dispensação", "Medicamentos Especiais"],
    medications: [
      {
        id: "med63",
        name: "Risperidona",
        dosage: "2mg",
        quantity: 35,
        minStock: 50,
        maxStock: 150,
        status: "attention"
      }
    ]
  },
  {
    id: "farmacia-leste",
    name: "Farmácia Municipal Zona Leste",
    type: "Farmácia",
    address: "Rua Santa Helena, 396, Jardim Alvorada",
    coordinates: [-22.2067, -49.9178],
    phone: "(14) 3402-3004",
    manager: "Farm. Leste Santos",
    status: "normal",
    workingHours: "08:00 - 17:00",
    services: ["Dispensação", "Medicamentos Controlados"],
    medications: [
      {
        id: "med64",
        name: "Carbamazepina",
        dosage: "200mg",
        quantity: 85,
        minStock: 60,
        maxStock: 200,
        status: "normal"
      }
    ]
  },
  {
    id: "farmacia-popular-centro",
    name: "Farmácia Popular do Brasil – Centro",
    type: "Farmácia Popular",
    address: "Avenida Brasil, 184, Centro",
    coordinates: [-22.2144, -49.9463],
    phone: "(14) 3402-3005",
    manager: "Farm. Popular Silva",
    status: "healthy",
    workingHours: "08:00 - 18:00",
    services: ["Programa Farmácia Popular", "Medicamentos Gratuitos"],
    medications: [
      {
        id: "med65",
        name: "Aspirina",
        dosage: "100mg",
        quantity: 300,
        minStock: 150,
        maxStock: 600,
        status: "healthy"
      },
      {
        id: "med66",
        name: "Metformina",
        dosage: "850mg",
        quantity: 180,
        minStock: 100,
        maxStock: 400,
        status: "healthy"
      }
    ]
  }
];