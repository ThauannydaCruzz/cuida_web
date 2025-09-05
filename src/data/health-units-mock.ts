import { HealthUnit } from "@/types/health-units";

export const healthUnits: HealthUnit[] = [
  // UBSs
  {
    id: "ubs-alto-cafezal",
    name: "UBS Alto Cafezal",
    type: "UBS",
    address: "Rua Paes Lemes, 850",
    coordinates: [-49.9453, -22.2134], // Alto Cafezal
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
    coordinates: [-49.9445, -22.2156], // Bandeirantes
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
    coordinates: [-49.9428, -22.2167], // Cascata
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
    coordinates: [-49.9411, -22.2178], // Castelo Branco
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
    coordinates: [-49.9394, -22.2189], // Chico Mendes
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
    coordinates: [-49.9377, -22.2200], // Costa e Silva
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
    coordinates: [-49.9360, -22.2211], // JK
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
    address: "Av. Mem de Sá, 360",
    coordinates: [-49.9550, -22.2089], // Nova Marília
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
    coordinates: [-49.9612, -22.1978], // Planalto
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
    coordinates: [-49.9334, -22.2067], // São Judas
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
    coordinates: [-49.9201, -22.2278], // São Miguel
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
    coordinates: [-49.9512, -22.2101], // Santa Antonieta
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
    coordinates: [-49.9456, -22.1945], // Aniz Badra
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
    coordinates: [-49.9501, -22.2123], // Parque das Nações
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
    coordinates: [-49.9601, -22.1889], // Rosália
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
    coordinates: [-49.9723, -22.1834], // Avencas
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
    address: "Rua Dr. Pimenta de Pádua, 168",
    coordinates: [-49.9278, -22.2345], // Amadeu Amaral
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
    id: "usf-jardim-cavalari",
    name: "USF Jardim Cavalari",
    type: "USF",
    address: "Rua João Gerônimo Perinetti, 94",
    coordinates: [-49.9324, -22.2089], // Jardim Cavalari
    phone: "(14) 3402-1251",
    manager: "Dr. Cavalari Silva",
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
    id: "usf-vila-real",
    name: "USF Vila Real",
    type: "USF",
    address: "Rua Arthur Martins Ribeiro, 35",
    coordinates: [-49.9123, -22.2456], // Vila Real
    phone: "(14) 3402-1252",
    manager: "Dra. Real Santos",
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
    id: "usf-cdhu-sao-bento",
    name: "USF CDHU/São Bento",
    type: "USF",
    address: "Rua Ioneu Carvalho Domingos, 556",
    coordinates: [-49.9089, -22.2567], // CDHU/São Bento
    phone: "(14) 3402-1253",
    manager: "Dr. Bento Silva",
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
    id: "usf-padre-nobrega-1",
    name: "USF Padre Nóbrega I",
    type: "USF",
    address: "Rua Salgado Filho, 30",
    coordinates: [-49.9567, -22.2345], // Padre Nóbrega I
    phone: "(14) 3402-1254",
    manager: "Dr. Nóbrega Silva",
    status: "normal",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Consultas", "Vacinas"],
    medications: [
      {
        id: "med32",
        name: "Omeprazol",
        dosage: "20mg",
        quantity: 85,
        minStock: 60,
        maxStock: 200,
        status: "normal"
      }
    ]
  },
  {
    id: "usf-janio-quadros",
    name: "USF Jânio Quadros",
    type: "USF",
    address: "Rua Felipe Navas, 204",
    coordinates: [-49.9432, -22.2189], // Jânio Quadros
    phone: "(14) 3402-1255",
    manager: "Dr. Quadros Santos",
    status: "healthy",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Pediatria", "Vacinas"],
    medications: [
      {
        id: "med33",
        name: "Vitamina C",
        dosage: "500mg",
        quantity: 120,
        minStock: 80,
        maxStock: 300,
        status: "healthy"
      }
    ]
  },
  {
    id: "usf-lacio",
    name: "USF Lácio",
    type: "USF",
    address: "Av. Brasil, 272",
    coordinates: [-49.9451, -22.2143], // Lácio
    phone: "(14) 3402-1256",
    manager: "Dr. Lácio Costa",
    status: "attention",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Consultas", "Curativos"],
    medications: [
      {
        id: "med34",
        name: "Ranitidina",
        dosage: "150mg",
        quantity: 45,
        minStock: 50,
        maxStock: 150,
        status: "attention"
      }
    ]
  },
  {
    id: "usf-figueirinha",
    name: "USF Figueirinha",
    type: "USF",
    address: "Av. José Jorente, 291",
    coordinates: [-49.9398, -22.2267], // Figueirinha
    phone: "(14) 3402-1257",
    manager: "Dra. Figueira Lima",
    status: "normal",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Ginecologia", "Pré-natal"],
    medications: [
      {
        id: "med35",
        name: "Clonazepam",
        dosage: "2mg",
        quantity: 70,
        minStock: 50,
        maxStock: 200,
        status: "normal"
      }
    ]
  },
  {
    id: "usf-vila-barros",
    name: "USF Vila Barros",
    type: "USF",
    address: "Rua Amando Oliveira Rocha Filho, 10",
    coordinates: [-49.9234, -22.2345], // Vila Barros
    phone: "(14) 3402-1258",
    manager: "Dr. Barros Santos",
    status: "urgent",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Urgência", "Consultas"],
    medications: [
      {
        id: "med36",
        name: "Hidrocortisona",
        dosage: "20mg",
        quantity: 12,
        minStock: 30,
        maxStock: 100,
        status: "urgent"
      }
    ]
  },
  {
    id: "usf-aeroporto",
    name: "USF Aeroporto",
    type: "USF",
    address: "Rua Iporâs, 5",
    coordinates: [-49.9678, -22.1967], // Aeroporto
    phone: "(14) 3402-1259",
    manager: "Dr. Aeroporto Silva",
    status: "healthy",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Consultas", "Vacinas"],
    medications: [
      {
        id: "med37",
        name: "Azitromicina",
        dosage: "500mg",
        quantity: 95,
        minStock: 60,
        maxStock: 200,
        status: "healthy"
      }
    ]
  },
  {
    id: "usf-marajo",
    name: "USF Marajó",
    type: "USF",
    address: "Rua Japão, 380",
    coordinates: [-49.9512, -22.2123], // Marajó
    phone: "(14) 3402-1260",
    manager: "Dra. Marajó Costa",
    status: "normal",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Pediatria", "Vacinas"],
    medications: [
      {
        id: "med38",
        name: "Bromexina",
        dosage: "8mg",
        quantity: 65,
        minStock: 50,
        maxStock: 150,
        status: "normal"
      }
    ]
  },
  {
    id: "usf-julieta",
    name: "USF Julieta",
    type: "USF",
    address: "Rua Eliezer Rocha, 2505",
    coordinates: [-49.9301, -22.2456], // Julieta
    phone: "(14) 3402-1261",
    manager: "Dra. Julieta Santos",
    status: "attention",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Consultas", "Curativos"],
    medications: [
      {
        id: "med39",
        name: "Dextrometorfano",
        dosage: "15mg",
        quantity: 40,
        minStock: 50,
        maxStock: 200,
        status: "attention"
      }
    ]
  },
  {
    id: "usf-santa-antonieta-2",
    name: "USF Santa Antonieta II",
    type: "USF",
    address: "Rua Luciano Borguetti, 148",
    coordinates: [-49.9523, -22.2112], // Santa Antonieta II
    phone: "(14) 3402-1262",
    manager: "Dr. Antonieta Silva",
    status: "healthy",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Ginecologia", "Pré-natal"],
    medications: [
      {
        id: "med40",
        name: "Fluconazol",
        dosage: "150mg",
        quantity: 80,
        minStock: 40,
        maxStock: 150,
        status: "healthy"
      }
    ]
  },
  {
    id: "usf-toffoli",
    name: "USF Tóffoli",
    type: "USF",
    address: "Rua Yutaka Kamakura, 34",
    coordinates: [-49.9345, -22.2234], // Tóffoli
    phone: "(14) 3402-1263",
    manager: "Dr. Tóffoli Costa",
    status: "normal",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Consultas", "Vacinas"],
    medications: [
      {
        id: "med41",
        name: "Sinvastatina",
        dosage: "20mg",
        quantity: 75,
        minStock: 60,
        maxStock: 200,
        status: "normal"
      }
    ]
  },
  {
    id: "usf-parque-ipes",
    name: "USF Parque dos Ipês",
    type: "USF",
    address: "Rua Francisco da Costa Pimentel, 880",
    coordinates: [-49.9434, -22.2178], // Parque dos Ipês
    phone: "(14) 3402-1264",
    manager: "Dra. Ipês Santos",
    status: "urgent",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Urgência", "Consultas"],
    medications: [
      {
        id: "med42",
        name: "Ceftriaxona",
        dosage: "1g",
        quantity: 8,
        minStock: 20,
        maxStock: 80,
        status: "urgent"
      }
    ]
  },
  {
    id: "usf-santa-augusta",
    name: "USF Santa Augusta",
    type: "USF",
    address: "Rua Gildo Bonato, 207",
    coordinates: [-49.9612, -22.1978], // Santa Augusta
    phone: "(14) 3402-1265",
    manager: "Dr. Augusta Silva",
    status: "healthy",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Pediatria", "Vacinas"],
    medications: [
      {
        id: "med43",
        name: "Salbutamol",
        dosage: "100mcg",
        quantity: 105,
        minStock: 70,
        maxStock: 250,
        status: "healthy"
      }
    ]
  },
  {
    id: "usf-vila-nova",
    name: "USF Vila Nova",
    type: "USF",
    address: "Rua Hermes da Fonseca, 496",
    coordinates: [-49.9367, -22.2289], // Vila Nova
    phone: "(14) 3402-1266",
    manager: "Dra. Nova Costa",
    status: "attention",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Consultas", "Curativos"],
    medications: [
      {
        id: "med44",
        name: "Desloratadina",
        dosage: "5mg",
        quantity: 45,
        minStock: 50,
        maxStock: 150,
        status: "attention"
      }
    ]
  },
  {
    id: "usf-vila-hipica",
    name: "USF Vila Hípica",
    type: "USF",
    address: "Rua Luiz Manhães, 156",
    coordinates: [-49.9198, -22.2345], // Vila Hípica
    phone: "(14) 3402-1267",
    manager: "Dr. Hípica Santos",
    status: "normal",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Ginecologia", "Pré-natal"],
    medications: [
      {
        id: "med45",
        name: "Cetoconazol",
        dosage: "200mg",
        quantity: 60,
        minStock: 40,
        maxStock: 150,
        status: "normal"
      }
    ]
  },
  {
    id: "usf-palmital",
    name: "USF Palmital",
    type: "USF",
    address: "Rua Bartholomé Lopes Vilharrubia, 397",
    coordinates: [-49.9423, -22.2367], // Palmital
    phone: "(14) 3402-1268",
    manager: "Dra. Palmital Silva",
    status: "healthy",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Consultas", "Vacinas"],
    medications: [
      {
        id: "med46",
        name: "Cloridrato de Tramadol",
        dosage: "50mg",
        quantity: 90,
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
    coordinates: [-49.9456, -22.2134], // Altaneira
    phone: "(14) 3402-1269",
    manager: "Dr. Altaneira Costa",
    status: "urgent",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Urgência", "Consultas"],
    medications: [
      {
        id: "med47",
        name: "Morfina",
        dosage: "10mg",
        quantity: 5,
        minStock: 15,
        maxStock: 50,
        status: "urgent"
      }
    ]
  },
  {
    id: "usf-novo-horizonte",
    name: "USF Novo Horizonte",
    type: "USF",
    address: "Rua Orlando Silva, 15",
    coordinates: [-49.9378, -22.2298], // Novo Horizonte
    phone: "(14) 3402-1270",
    manager: "Dra. Horizonte Santos",
    status: "normal",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Pediatria", "Vacinas"],
    medications: [
      {
        id: "med48",
        name: "Dipirona Gotas",
        dosage: "500mg/ml",
        quantity: 55,
        minStock: 40,
        maxStock: 150,
        status: "normal"
      }
    ]
  },
  {
    id: "usf-jardim-marilia",
    name: "USF Jardim Marília",
    type: "USF",
    address: "Rua Jesuítas, 40",
    coordinates: [-49.9501, -22.2089], // Jardim Marília
    phone: "(14) 3402-1271",
    manager: "Dr. Marília Silva",
    status: "attention",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Consultas", "Curativos"],
    medications: [
      {
        id: "med49",
        name: "Clonidina",
        dosage: "0,15mg",
        quantity: 35,
        minStock: 50,
        maxStock: 200,
        status: "attention"
      }
    ]
  },
  {
    id: "usf-tres-lagos",
    name: "USF Três Lagos",
    type: "USF",
    address: "Rua Sebastião Innocêncio de Oliveira, 30",
    coordinates: [-49.9434, -22.2245], // Três Lagos
    phone: "(14) 3402-1272",
    manager: "Dra. Lagos Costa",
    status: "healthy",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Ginecologia", "Pré-natal"],
    medications: [
      {
        id: "med50",
        name: "Miconazol",
        dosage: "2%",
        quantity: 85,
        minStock: 50,
        maxStock: 200,
        status: "healthy"
      }
    ]
  },
  {
    id: "usf-jardim-america-4",
    name: "USF Jardim América IV",
    type: "USF",
    address: "Rua Arnaldo Silva, 63",
    coordinates: [-49.9312, -22.2367], // Jardim América IV
    phone: "(14) 3402-1273",
    manager: "Dr. América Santos",
    status: "normal",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Consultas", "Vacinas"],
    medications: [
      {
        id: "med51",
        name: "Betametasona",
        dosage: "4mg",
        quantity: 65,
        minStock: 40,
        maxStock: 150,
        status: "normal"
      }
    ]
  },
  {
    id: "usf-campo-belo-santa-helena",
    name: "USF Campo Belo - Santa Helena",
    type: "USF",
    address: "Fazenda do Estado, Casa nº 09",
    coordinates: [-49.9678, -22.1889], // Campo Belo Santa Helena
    phone: "(14) 3402-1274",
    manager: "Dra. Helena Silva",
    status: "urgent",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Urgência", "Consultas"],
    medications: [
      {
        id: "med52",
        name: "Epinefrina",
        dosage: "1mg/ml",
        quantity: 3,
        minStock: 10,
        maxStock: 30,
        status: "urgent"
      }
    ]
  },
  {
    id: "usf-campo-belo-dirceu",
    name: "USF Campo Belo - Dirceu",
    type: "USF",
    address: "Av. Sampaio Vidal, s/n",
    coordinates: [-49.9723, -22.1945], // Campo Belo Dirceu
    phone: "(14) 3402-1275",
    manager: "Dr. Dirceu Costa",
    status: "attention",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Consultas", "Curativos"],
    medications: [
      {
        id: "med53",
        name: "Nistatina",
        dosage: "100.000 UI/ml",
        quantity: 45,
        minStock: 50,
        maxStock: 150,
        status: "attention"
      }
    ]
  },
  {
    id: "usf-jardim-renata",
    name: "USF Jardim Renata",
    type: "USF",
    address: "Rua Antonia Bergamini Sândalo, 35",
    coordinates: [-49.9389, -22.2323], // Jardim Renata
    phone: "(14) 3402-1276",
    manager: "Dra. Renata Santos",
    status: "healthy",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Pediatria", "Vacinas"],
    medications: [
      {
        id: "med54",
        name: "Vitamina A",
        dosage: "100.000 UI",
        quantity: 95,
        minStock: 60,
        maxStock: 200,
        status: "healthy"
      }
    ]
  },
  {
    id: "usf-jardim-flamingo",
    name: "USF Jardim Flamingo",
    type: "USF",
    address: "Rua Padre José Osvaldo Nunes, s/n",
    coordinates: [-49.9456, -22.2278], // Jardim Flamingo
    phone: "(14) 3402-1277",
    manager: "Dr. Flamingo Silva",
    status: "normal",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Consultas", "Ginecologia"],
    medications: [
      {
        id: "med55",
        name: "Eritromicina",
        dosage: "250mg",
        quantity: 70,
        minStock: 50,
        maxStock: 200,
        status: "normal"
      }
    ]
  },
  {
    id: "usf-jardim-teruel",
    name: "USF Jardim Teruel",
    type: "USF",
    address: "Rua Elias Rifan, 35",
    coordinates: [-49.9334, -22.2389], // Jardim Teruel
    phone: "(14) 3402-1278",
    manager: "Dra. Teruel Costa",
    status: "attention",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Consultas", "Curativos"],
    medications: [
      {
        id: "med56",
        name: "Dipropionato de Betametasona",
        dosage: "0,64mg/ml",
        quantity: 40,
        minStock: 50,
        maxStock: 150,
        status: "attention"
      }
    ]
  },
  {
    id: "usf-argolo-ferrao",
    name: "USF Argolo Ferrão",
    type: "USF",
    address: "Rua Monsenhor João Baptista, 331",
    coordinates: [-49.9423, -22.2156], // Argolo Ferrão
    phone: "(14) 3402-1279",
    manager: "Dr. Argolo Santos",
    status: "urgent",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Urgência", "Consultas"],
    medications: [
      {
        id: "med57",
        name: "Naloxona",
        dosage: "0,4mg/ml",
        quantity: 2,
        minStock: 5,
        maxStock: 20,
        status: "urgent"
      }
    ]
  },
  {
    id: "usf-primeiro-maio",
    name: "USF 1º de Maio",
    type: "USF",
    address: "Av. José Jorente, 291",
    coordinates: [-49.9398, -22.2267], // 1º de Maio
    phone: "(14) 3402-1280",
    manager: "Dra. Maio Silva",
    status: "healthy",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Ginecologia", "Pré-natal"],
    medications: [
      {
        id: "med58",
        name: "Sulfadiazina de Prata",
        dosage: "1%",
        quantity: 80,
        minStock: 40,
        maxStock: 150,
        status: "healthy"
      }
    ]
  },
  {
    id: "usf-santa-antonieta-3",
    name: "USF Santa Antonieta III",
    type: "USF",
    address: "Rua Eliezer Rocha, 2505",
    coordinates: [-49.9301, -22.2456], // Santa Antonieta III
    phone: "(14) 3402-1281",
    manager: "Dr. Antonieta Costa",
    status: "normal",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Consultas", "Vacinas"],
    medications: [
      {
        id: "med59",
        name: "Oxitocina",
        dosage: "5 UI/ml",
        quantity: 60,
        minStock: 30,
        maxStock: 100,
        status: "normal"
      }
    ]
  },
  {
    id: "usf-padre-nobrega-2",
    name: "USF Padre Nóbrega II",
    type: "USF",
    address: "Rua Salgado Filho, 30",
    coordinates: [-49.9567, -22.2345], // Padre Nóbrega II
    phone: "(14) 3402-1282",
    manager: "Dra. Nóbrega Santos",
    status: "attention",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Consultas", "Curativos"],
    medications: [
      {
        id: "med60",
        name: "Clindamicina",
        dosage: "300mg",
        quantity: 45,
        minStock: 50,
        maxStock: 200,
        status: "attention"
      }
    ]
  },
  
  // UPAs
  {
    id: "upa-norte",
    name: "UPA Norte (Zona Norte)",
    type: "UPA",
    address: "Rua João Caliman, 110, Parque das Nações",
    coordinates: [-49.9501, -22.2123], // UPA Norte
    phone: "(14) 3402-2001",
    manager: "Dr. Norte Silva",
    status: "healthy",
    workingHours: "24 horas",
    services: ["Pronto Atendimento", "Urgência", "Emergência"],
    medications: [
      {
        id: "med61",
        name: "Adrenalina",
        dosage: "1mg/ml",
        quantity: 50,
        minStock: 30,
        maxStock: 100,
        status: "healthy"
      }
    ]
  },
  {
    id: "upa-sul",
    name: "UPA Zona Sul",
    type: "UPA",
    address: "Rua Antônio Pereira da Silva, 288, Hípica Paulista",
    coordinates: [-49.9198, -22.2456], // UPA Sul
    phone: "(14) 3402-2002",
    manager: "Dra. Sul Santos",
    status: "urgent",
    workingHours: "24 horas",
    services: ["Pronto Atendimento", "Urgência", "Emergência"],
    medications: [
      {
        id: "med62",
        name: "Atropina",
        dosage: "0,25mg/ml",
        quantity: 15,
        minStock: 20,
        maxStock: 80,
        status: "urgent"
      }
    ]
  },
  
  // Farmácias
  {
    id: "farmacia-central",
    name: "Farmácia Municipal Central",
    type: "Farmácia",
    address: "Rua Hidekichi Nomura, 170, Fragata",
    coordinates: [-49.9445, -22.2178], // Farmácia Central
    phone: "(14) 3402-3001",
    manager: "Farm. Central Silva",
    status: "healthy",
    workingHours: "07:00 - 19:00",
    services: ["Dispensação", "Orientação Farmacêutica"],
    medications: [
      {
        id: "med63",
        name: "Estoque Geral",
        dosage: "Variado",
        quantity: 5000,
        minStock: 3000,
        maxStock: 10000,
        status: "healthy"
      }
    ]
  },
  {
    id: "farmacia-norte",
    name: "Farmácia Municipal Zona Norte",
    type: "Farmácia",
    address: "Av. Professora Berta de Camargo Vieira, 595",
    coordinates: [-49.9512, -22.2101], // Farmácia Norte
    phone: "(14) 3402-3002",
    manager: "Farm. Norte Santos",
    status: "normal",
    workingHours: "07:00 - 19:00",
    services: ["Dispensação", "Orientação Farmacêutica"],
    medications: [
      {
        id: "med64",
        name: "Estoque Geral",
        dosage: "Variado",
        quantity: 3500,
        minStock: 2000,
        maxStock: 8000,
        status: "normal"
      }
    ]
  },
  {
    id: "farmacia-sul",
    name: "Farmácia Municipal Zona Sul",
    type: "Farmácia",
    address: "Av. João Ramalho, 1081, Parque São Jorge",
    coordinates: [-49.9234, -22.2378], // Farmácia Sul
    phone: "(14) 3402-3003",
    manager: "Farm. Sul Costa",
    status: "attention",
    workingHours: "07:00 - 19:00",
    services: ["Dispensação", "Orientação Farmacêutica"],
    medications: [
      {
        id: "med65",
        name: "Estoque Geral",
        dosage: "Variado",
        quantity: 1800,
        minStock: 2000,
        maxStock: 6000,
        status: "attention"
      }
    ]
  },
  {
    id: "farmacia-oeste",
    name: "Farmácia Municipal Zona Oeste",
    type: "Farmácia",
    address: "Av. Maria Fernandes Cavallari, 2287, Jardim Cavalari",
    coordinates: [-49.9324, -22.2089], // Farmácia Oeste
    phone: "(14) 3402-3004",
    manager: "Farm. Oeste Silva",
    status: "urgent",
    workingHours: "07:00 - 19:00",
    services: ["Dispensação", "Orientação Farmacêutica"],
    medications: [
      {
        id: "med66",
        name: "Estoque Geral",
        dosage: "Variado",
        quantity: 900,
        minStock: 2000,
        maxStock: 6000,
        status: "urgent"
      }
    ]
  },
  {
    id: "farmacia-leste",
    name: "Farmácia Municipal Zona Leste",
    type: "Farmácia",
    address: "Rua Santa Helena, 396, Jardim Alvorada",
    coordinates: [-49.9367, -22.2289], // Farmácia Leste
    phone: "(14) 3402-3005",
    manager: "Farm. Leste Santos",
    status: "healthy",
    workingHours: "07:00 - 19:00",
    services: ["Dispensação", "Orientação Farmacêutica"],
    medications: [
      {
        id: "med67",
        name: "Estoque Geral",
        dosage: "Variado",
        quantity: 4200,
        minStock: 2500,
        maxStock: 7000,
        status: "healthy"
      }
    ]
  },
  {
    id: "farmacia-popular",
    name: "Farmácia Popular do Brasil - Centro",
    type: "Farmácia",
    address: "Avenida Brasil, 184, Centro",
    coordinates: [-49.9451, -22.2143], // Farmácia Popular
    phone: "(14) 3402-3006",
    manager: "Farm. Popular Costa",
    status: "normal",
    workingHours: "08:00 - 18:00",
    services: ["Dispensação", "Programa Federal"],
    medications: [
      {
        id: "med68",
        name: "Estoque Federal",
        dosage: "Variado",
        quantity: 2800,
        minStock: 2000,
        maxStock: 5000,
        status: "normal"
      }
    ]
  }
];