import { HealthUnit } from "@/types/health-units";

export const healthUnits: HealthUnit[] = [
  // UBSs
  {
    id: "ubs-alto-cafezal",
    name: "UBS Alto Cafezal",
    type: "UBS",
    address: "Rua Paes Lemes, 850",
    coordinates: [-22.2134, -49.9453], // Alto Cafezal
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
    coordinates: [-22.2156, -49.9445], // Bandeirantes
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
    coordinates: [-22.2167, -49.9428], // Cascata
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
    coordinates: [-22.2178, -49.9411], // Castelo Branco
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
    coordinates: [-22.2189, -49.9394], // Chico Mendes
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
    coordinates: [-22.2200, -49.9377], // Costa e Silva
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
    coordinates: [-22.2211, -49.9360], // JK
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
    coordinates: [-22.2089, -49.9550], // Nova Marília
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
    coordinates: [-22.1978, -49.9612], // Planalto
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
    coordinates: [-22.2067, -49.9334], // São Judas
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
    coordinates: [-22.2278, -49.9201], // São Miguel
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
    coordinates: [-22.2101, -49.9512], // Santa Antonieta
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
    coordinates: [-22.1945, -49.9456], // Aniz Badra
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
    coordinates: [-22.2123, -49.9501], // Parque das Nações
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
    coordinates: [-22.1889, -49.9601], // Rosália
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
    coordinates: [-22.1834, -49.9723], // Avencas
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
    coordinates: [-22.2345, -49.9278], // Amadeu Amaral
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
    coordinates: [-22.2089, -49.9324], // Jardim Cavalari
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
    coordinates: [-22.2456, -49.9123], // Vila Real
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
    coordinates: [-22.2567, -49.9089], // CDHU/São Bento
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
    coordinates: [-22.2123, -49.9467], // Padre Nóbrega I
    phone: "(14) 3402-1254",
    manager: "Padre Nóbrega I",
    status: "normal",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Consultas", "Vacinas"],
    medications: [
      {
        id: "med32",
        name: "Azitromicina",
        dosage: "500mg",
        quantity: 45,
        minStock: 30,
        maxStock: 120,
        status: "normal"
      }
    ]
  },
  {
    id: "usf-janio-quadros",
    name: "USF Jânio Quadros",
    type: "USF",
    address: "Rua Felipe Navas, 204",
    coordinates: [-22.2345, -49.9278], // Jânio Quadros
    phone: "(14) 3402-1255",
    manager: "Dr. Jânio Quadros",
    status: "attention",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Pediatria", "Vacinas"],
    medications: [
      {
        id: "med33",
        name: "Omeprazol",
        dosage: "20mg",
        quantity: 35,
        minStock: 50,
        maxStock: 150,
        status: "attention"
      }
    ]
  },
  {
    id: "usf-lacio",
    name: "USF Lácio",
    type: "USF",
    address: "Av. Brasil, 272",
    coordinates: [-22.2144, -49.9463], // Centro - Lácio
    phone: "(14) 3402-1256",
    manager: "Dr. Lácio Lima",
    status: "normal",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Consultas", "Vacinas"],
    medications: [
      {
        id: "med34",
        name: "Sinvastatina",
        dosage: "20mg",
        quantity: 75,
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
    coordinates: [-22.2456, -49.9123], // Figueirinha
    phone: "(14) 3402-1257",
    manager: "Dra. Figueirinha Santos",
    status: "attention",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Pediatria", "Vacinas"],
    medications: [
      {
        id: "med35",
        name: "Fluconazol",
        dosage: "150mg",
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
    coordinates: [-22.2567, -49.9089], // Vila Barros
    phone: "(14) 3402-1258",
    manager: "Dr. Barros Silva",
    status: "healthy",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Consultas", "Curativos"],
    medications: [
      {
        id: "med36",
        name: "Cetirizina",
        dosage: "10mg",
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
    address: "Rua Iporãs, 5",
    coordinates: [-22.1978, -49.9234], // Aeroporto
    phone: "(14) 3402-1259",
    manager: "Dr. Aeroporto Silva",
    status: "normal",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Consultas", "Vacinas"],
    medications: [
      {
        id: "med37",
        name: "Hidroclorotiazida",
        dosage: "25mg",
        quantity: 85,
        minStock: 50,
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
    coordinates: [-22.2023, -49.9345], // Marajó
    phone: "(14) 3402-1260",
    manager: "Dra. Marajó Santos",
    status: "healthy",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Pediatria", "Vacinas"],
    medications: [
      {
        id: "med38",
        name: "Vitamina C",
        dosage: "500mg",
        quantity: 110,
        minStock: 60,
        maxStock: 250,
        status: "healthy"
      }
    ]
  },
  {
    id: "usf-julieta",
    name: "USF Julieta",
    type: "USF",
    address: "Rua Eliezer Rocha, 2505",
    coordinates: [-22.2278, -49.9201], // Julieta
    phone: "(14) 3402-1261",
    manager: "Dra. Julieta Costa",
    status: "urgent",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Urgência", "Consultas"],
    medications: [
      {
        id: "med39",
        name: "Morfina",
        dosage: "10mg",
        quantity: 5,
        minStock: 30,
        maxStock: 100,
        status: "urgent"
      }
    ]
  },
  {
    id: "usf-santa-antonieta-2",
    name: "USF Santa Antonieta II",
    type: "USF",
    address: "Rua Luciano Borguetti, 148",
    coordinates: [-22.2101, -49.9512], // Santa Antonieta II
    phone: "(14) 3402-1262",
    manager: "Dra. Antonieta II Lima",
    status: "normal",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Ginecologia", "Pré-natal"],
    medications: [
      {
        id: "med40",
        name: "Progesterona",
        dosage: "200mg",
        quantity: 65,
        minStock: 40,
        maxStock: 150,
        status: "normal"
      }
    ]
  },
  {
    id: "usf-toffoli",
    name: "USF Tóffoli",
    type: "USF",
    address: "Rua Yutaka Kamakura, 34",
    coordinates: [-22.2145, -49.9356], // Tóffoli
    phone: "(14) 3402-1263",
    manager: "Dr. Tóffoli Silva",
    status: "healthy",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Consultas", "Vacinas"],
    medications: [
      {
        id: "med41",
        name: "Levotiroxina",
        dosage: "50mcg",
        quantity: 140,
        minStock: 80,
        maxStock: 300,
        status: "healthy"
      }
    ]
  },
  {
    id: "usf-parque-ipes",
    name: "USF Parque dos Ipês",
    type: "USF",
    address: "Rua Francisco da Costa Pimentel, 880",
    coordinates: [-22.1923, -49.9534], // Parque dos Ipês
    phone: "(14) 3402-1264",
    manager: "Dr. Ipês Silva",
    status: "attention",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Pediatria", "Vacinas"],
    medications: [
      {
        id: "med42",
        name: "Prednisolona",
        dosage: "5mg",
        quantity: 35,
        minStock: 50,
        maxStock: 150,
        status: "attention"
      }
    ]
  },
  {
    id: "usf-santa-augusta",
    name: "USF Santa Augusta",
    type: "USF",
    address: "Rua Gildo Bonato, 207",
    coordinates: [-22.1978, -49.9612], // Santa Augusta (mesmo local do Planalto)
    phone: "(14) 3402-1265",
    manager: "Dra. Augusta Santos",
    status: "normal",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Consultas", "Curativos"],
    medications: [
      {
        id: "med43",
        name: "Betametasona",
        dosage: "0,5mg",
        quantity: 75,
        minStock: 60,
        maxStock: 200,
        status: "normal"
      }
    ]
  },
  {
    id: "usf-vila-nova",
    name: "USF Vila Nova",
    type: "USF",
    address: "Rua Hermes da Fonseca, 496",
    coordinates: [-22.2234, -49.9456], // Vila Nova
    phone: "(14) 3402-1266",
    manager: "Dr. Nova Silva",
    status: "healthy",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Consultas", "Vacinas"],
    medications: [
      {
        id: "med44",
        name: "Bromazepam",
        dosage: "3mg",
        quantity: 95,
        minStock: 50,
        maxStock: 200,
        status: "healthy"
      }
    ]
  },
  {
    id: "usf-vila-hipica",
    name: "USF Vila Hípica",
    type: "USF",
    address: "Rua Luiz Manhães, 156",
    coordinates: [-22.2567, -49.9189], // Vila Hípica
    phone: "(14) 3402-1267",
    manager: "Dr. Hípica Costa",
    status: "urgent",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Urgência", "Consultas"],
    medications: [
      {
        id: "med45",
        name: "Tramadol",
        dosage: "50mg",
        quantity: 8,
        minStock: 30,
        maxStock: 100,
        status: "urgent"
      }
    ]
  },
  // UPAs
  {
    id: "upa-norte",
    name: "UPA Norte (Zona Norte)",
    type: "UPA",
    address: "Rua João Caliman, 110, Parque das Nações",
    coordinates: [-22.2123, -49.9501], // UPA Norte
    phone: "(14) 3402-2000",
    manager: "Dr. Norte Silva",
    status: "healthy",
    workingHours: "24h",
    services: ["Urgência", "Emergência", "Pronto Atendimento"],
    medications: [
      {
        id: "upa-med1",
        name: "Adrenalina",
        dosage: "1mg/ml",
        quantity: 50,
        minStock: 20,
        maxStock: 100,
        status: "healthy"
      },
      {
        id: "upa-med2",
        name: "Morfina",
        dosage: "10mg",
        quantity: 30,
        minStock: 15,
        maxStock: 80,
        status: "healthy"
      }
    ]
  },
  {
    id: "upa-sul",
    name: "UPA Zona Sul",
    type: "UPA",
    address: "Rua Antônio Pereira da Silva, 288, Hípica Paulista",
    coordinates: [-22.2567, -49.9189], // UPA Sul
    phone: "(14) 3402-2001",
    manager: "Dra. Sul Costa",
    status: "normal",
    workingHours: "24h",
    services: ["Urgência", "Emergência", "Pronto Atendimento"],
    medications: [
      {
        id: "upa-med3",
        name: "Atropina",
        dosage: "0,5mg",
        quantity: 25,
        minStock: 15,
        maxStock: 60,
        status: "normal"
      },
      {
        id: "upa-med4",
        name: "Naloxona",
        dosage: "0,4mg",
        quantity: 20,
        minStock: 10,
        maxStock: 50,
        status: "normal"
      }
    ]
  },
  // Farmácias Municipais
  {
    id: "farmacia-central",
    name: "Farmácia Municipal Central",
    type: "Farmácia",
    address: "Rua Hidekichi Nomura, 170, Fragata",
    coordinates: [-22.2144, -49.9463], // Centro
    phone: "(14) 3402-3000",
    manager: "Farm. Central Santos",
    status: "healthy",
    workingHours: "08:00 - 18:00",
    services: ["Dispensação", "Farmácia Clínica", "Atenção Farmacêutica"],
    medications: [
      {
        id: "farm-med1",
        name: "Insulina NPH",
        dosage: "100UI/ml",
        quantity: 200,
        minStock: 100,
        maxStock: 500,
        status: "healthy"
      },
      {
        id: "farm-med2",
        name: "Losartana",
        dosage: "50mg",
        quantity: 1500,
        minStock: 500,
        maxStock: 3000,
        status: "healthy"
      }
    ]
  },
  {
    id: "farmacia-norte",
    name: "Farmácia Municipal Zona Norte",
    type: "Farmácia",
    address: "Av. Professora Berta de Camargo Vieira, 595",
    coordinates: [-22.2101, -49.9512], // Zona Norte
    phone: "(14) 3402-3001",
    manager: "Farm. Norte Lima",
    status: "attention",
    workingHours: "08:00 - 18:00",
    services: ["Dispensação", "Farmácia Clínica"],
    medications: [
      {
        id: "farm-med3",
        name: "Metformina",
        dosage: "850mg",
        quantity: 800,
        minStock: 1000,
        maxStock: 2500,
        status: "attention"
      }
    ]
  },
  {
    id: "farmacia-sul",
    name: "Farmácia Municipal Zona Sul",
    type: "Farmácia",
    address: "Av. João Ramalho, 1081, Parque São Jorge",
    coordinates: [-22.2456, -49.9234], // Zona Sul
    phone: "(14) 3402-3002",
    manager: "Farm. Sul Costa",
    status: "normal",
    workingHours: "08:00 - 18:00",
    services: ["Dispensação", "Farmácia Clínica"],
    medications: [
      {
        id: "farm-med4",
        name: "Captopril",
        dosage: "25mg",
        quantity: 1200,
        minStock: 800,
        maxStock: 2000,
        status: "normal"
      }
    ]
  },
  {
    id: "farmacia-oeste",
    name: "Farmácia Municipal Zona Oeste",
    type: "Farmácia",
    address: "Av. Maria Fernandes Cavallari, 2287, Jardim Cavalari",
    coordinates: [-22.2089, -49.9324], // Zona Oeste
    phone: "(14) 3402-3003",
    manager: "Farm. Oeste Silva",
    status: "healthy",
    workingHours: "08:00 - 18:00",
    services: ["Dispensação", "Farmácia Clínica"],
    medications: [
      {
        id: "farm-med5",
        name: "Glibenclamida",
        dosage: "5mg",
        quantity: 1800,
        minStock: 1000,
        maxStock: 3000,
        status: "healthy"
      }
    ]
  },
  {
    id: "farmacia-leste",
    name: "Farmácia Municipal Zona Leste",
    type: "Farmácia",
    address: "Rua Santa Helena, 396, Jardim Alvorada",
    coordinates: [-22.2023, -49.9234], // Zona Leste
    phone: "(14) 3402-3004",
    manager: "Farm. Leste Santos",
    status: "urgent",
    workingHours: "08:00 - 18:00",
    services: ["Dispensação", "Farmácia Clínica"],
    medications: [
      {
        id: "farm-med6",
        name: "Atenolol",
        dosage: "50mg",
        quantity: 150,
        minStock: 500,
        maxStock: 1500,
        status: "urgent"
      }
    ]
  },
  {
    id: "farmacia-popular-centro",
    name: "Farmácia Popular do Brasil - Centro",
    type: "Farmácia Popular",
    address: "Avenida Brasil, 184, Centro",
    coordinates: [-22.2144, -49.9463], // Centro
    phone: "(14) 3402-4000",
    manager: "Farm. Popular Brasil",
    status: "healthy",
    workingHours: "08:00 - 18:00",
    services: ["Dispensação Popular", "Medicamentos Gratuitos"],
    medications: [
      {
        id: "pop-med1",
        name: "Paracetamol",
        dosage: "750mg",
        quantity: 5000,
        minStock: 2000,
        maxStock: 8000,
        status: "healthy"
      },
      {
        id: "pop-med2",
        name: "Dipirona",
        dosage: "500mg",
        quantity: 4500,
        minStock: 2000,
        maxStock: 7000,
        status: "healthy"
      }
    ]
  }
];