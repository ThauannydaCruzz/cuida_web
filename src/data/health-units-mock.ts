import { HealthUnit } from "@/types/health-units";

export const healthUnits: HealthUnit[] = [
  // UBSs
  {
    id: "ubs-alto-cafezal",
    name: "UBS Alto Cafezal",
    type: "UBS",
    address: "Rua Paes Lemes, 850",
    coordinates: [-49.956679, -22.218229],
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
    coordinates: [-49.969947, -22.202076],
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
    coordinates: [-49.941483, -22.213551],
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
    coordinates: [-49.958947, -22.188219],
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
    coordinates: [-49.971957, -22.220932],
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
    coordinates: [-49.929256, -22.24092],
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
    name: "USF J.K. (D. Maria da Conceição Brandão)",
    type: "USF",
    address: "Rua Lucílio Coelho de Oliveira, 5",
    coordinates: [-49.962205, -22.210847],
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
    id: "ubs-planalto",
    name: "UBS Planalto",
    type: "UBS",
    address: "Rua Gildo Bonato, 207",
    coordinates: [-49.936068, -22.250841],
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
    coordinates: [-49.952804, -22.197578],
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
    coordinates: [-49.942408, -22.207679],
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
    coordinates: [-49.965975, -22.184438],
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
    coordinates: [-49.955456, -22.167588],
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
    coordinates: [-49.879692, -22.207006],
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
    coordinates: [-49.802058, -22.144553],
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
    coordinates: [-49.914675, -22.277699],
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
    coordinates: [-49.902721, -22.273615],
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
    coordinates: [-49.975131, -22.188261],
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
    coordinates: [-49.944339, -22.248564],
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
    coordinates: [-49.926659, -22.262915],
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
    id: "usf-padre-nobrega-i",
    name: "USF Padre Nóbrega I",
    type: "USF",
    address: "Rua Salgado Filho, 30",
    coordinates: [-49.652684, -22.214215],
    phone: "(14) 3402-1254",
    manager: "Dr. Padre Nóbrega",
    status: "normal",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Consultas", "Vacinas"],
    medications: [
      {
        id: "med32",
        name: "Azitromicina",
        dosage: "500mg",
        quantity: 60,
        minStock: 40,
        maxStock: 150,
        status: "normal"
      }
    ]
  },
  {
    id: "usf-janio-quadros",
    name: "USF Jânio Quadros",
    type: "USF",
    address: "Rua Felipe Navas, 204",
    coordinates: [-49.952332, -22.174304],
    phone: "(14) 3402-1255",
    manager: "Dr. Jânio Quadros",
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
        maxStock: 250,
        status: "healthy"
      }
    ]
  },
  {
    id: "usf-lacio",
    name: "USF Lácio",
    type: "USF",
    address: "Av. Brasil, 272",
    coordinates: [-49.998572, -22.331754],
    phone: "(14) 3402-1256",
    manager: "Dr. Lácio Silva",
    status: "attention",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Consultas", "Curativos"],
    medications: [
      {
        id: "med34",
        name: "Hidroclorotiazida",
        dosage: "25mg",
        quantity: 35,
        minStock: 50,
        maxStock: 200,
        status: "attention"
      }
    ]
  },
  {
    id: "usf-figueirinha",
    name: "USF Figueirinha",
    type: "USF",
    address: "Av. José Jorente, 291",
    coordinates: [-49.951051, -22.18433],
    phone: "(14) 3402-1257",
    manager: "Dra. Figueirinha Santos",
    status: "normal",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Ginecologia", "Vacinas"],
    medications: [
      {
        id: "med35",
        name: "Clotrimazol",
        dosage: "1% creme",
        quantity: 45,
        minStock: 30,
        maxStock: 100,
        status: "normal"
      }
    ]
  },
  {
    id: "usf-vila-barros",
    name: "USF Vila Barros",
    type: "USF",
    address: "Rua Amando Oliveira Rocha Filho, 10",
    coordinates: [-49.95184, -22.188697],
    phone: "(14) 3402-1258",
    manager: "Dr. Vila Barros",
    status: "healthy",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Consultas", "Vacinas"],
    medications: [
      {
        id: "med36",
        name: "Ranitidina",
        dosage: "150mg",
        quantity: 85,
        minStock: 60,
        maxStock: 200,
        status: "healthy"
      }
    ]
  },
  {
    id: "usf-aeroporto",
    name: "USF Aeroporto",
    type: "USF",
    address: "Rua Iporâs, 5",
    coordinates: [-49.934559, -22.231939],
    phone: "(14) 3402-1259",
    manager: "Dr. Aeroporto Silva",
    status: "urgent",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Urgência", "Consultas"],
    medications: [
      {
        id: "med37",
        name: "Epinefrina",
        dosage: "1mg/ml",
        quantity: 2,
        minStock: 10,
        maxStock: 30,
        status: "urgent"
      }
    ]
  },
  {
    id: "usf-marajo",
    name: "USF Marajó",
    type: "USF",
    address: "Rua Japão, 380",
    coordinates: [-49.953579, -22.197787],
    phone: "(14) 3402-1260",
    manager: "Dra. Marajó Costa",
    status: "normal",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Consultas", "Vacinas"],
    medications: [
      {
        id: "med38",
        name: "Bromazepam",
        dosage: "3mg",
        quantity: 50,
        minStock: 40,
        maxStock: 120,
        status: "normal"
      }
    ]
  },
  {
    id: "usf-julieta",
    name: "USF Julieta",
    type: "USF",
    address: "Rua Eliezer Rocha, 2505",
    coordinates: [-49.965981, -22.204254],
    phone: "(14) 3402-1261",
    manager: "Dra. Julieta Lima",
    status: "attention",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Pediatria", "Vacinas"],
    medications: [
      {
        id: "med39",
        name: "Salbutamol",
        dosage: "2mg",
        quantity: 30,
        minStock: 50,
        maxStock: 150,
        status: "attention"
      }
    ]
  },
  {
    id: "usf-santa-antonieta-ii",
    name: "USF Santa Antonieta II",
    type: "USF",
    address: "Rua Luciano Borguetti, 148",
    coordinates: [-49.982592, -22.208314],
    phone: "(14) 3402-1262",
    manager: "Dr. Santa Antonieta II",
    status: "healthy",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Consultas", "Vacinas"],
    medications: [
      {
        id: "med40",
        name: "Sinvastatina",
        dosage: "20mg",
        quantity: 95,
        minStock: 70,
        maxStock: 200,
        status: "healthy"
      }
    ]
  },
  {
    id: "usf-toffoli",
    name: "USF Tóffoli",
    type: "USF",
    address: "Rua Yutaka Kamakura, 34",
    coordinates: [-49.965009, -22.182094],
    phone: "(14) 3402-1263",
    manager: "Dr. Tóffoli Santos",
    status: "normal",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Consultas", "Curativos"],
    medications: [
      {
        id: "med41",
        name: "Omeprazol",
        dosage: "20mg",
        quantity: 65,
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
    coordinates: [-49.980389, -22.174764],
    phone: "(14) 3402-1264",
    manager: "Dra. Parque dos Ipês",
    status: "urgent",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Urgência", "Consultas"],
    medications: [
      {
        id: "med42",
        name: "Morfina",
        dosage: "10mg",
        quantity: 3,
        minStock: 15,
        maxStock: 50,
        status: "urgent"
      }
    ]
  },
  {
    id: "usf-santa-augusta",
    name: "USF Santa Augusta",
    type: "USF",
    address: "Rua Gildo Bonato, 207",
    coordinates: [-49.936068, -22.250841],
    phone: "(14) 3402-1265",
    manager: "Dr. Santa Augusta",
    status: "attention",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Consultas", "Vacinas"],
    medications: [
      {
        id: "med43",
        name: "Fluoxetina",
        dosage: "20mg",
        quantity: 40,
        minStock: 60,
        maxStock: 200,
        status: "attention"
      }
    ]
  },
  {
    id: "usf-vila-nova",
    name: "USF Vila Nova",
    type: "USF",
    address: "Rua Hermes da Fonseca, 496",
    coordinates: [-49.952229, -22.19313],
    phone: "(14) 3402-1266",
    manager: "Dra. Vila Nova",
    status: "healthy",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Consultas", "Vacinas"],
    medications: [
      {
        id: "med44",
        name: "Levotiroxina",
        dosage: "50mcg",
        quantity: 110,
        minStock: 80,
        maxStock: 250,
        status: "healthy"
      }
    ]
  },
  {
    id: "usf-vila-hipica",
    name: "USF Vila Hípica",
    type: "USF",
    address: "Rua Luiz Manhães, 156",
    coordinates: [-49.998471, -22.231717],
    phone: "(14) 3402-1267",
    manager: "Dr. Vila Hípica",
    status: "normal",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Consultas", "Curativos"],
    medications: [
      {
        id: "med45",
        name: "Cetoconazol",
        dosage: "200mg",
        quantity: 55,
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
    coordinates: [-49.952238, -22.183188],
    phone: "(14) 3402-1268",
    manager: "Dra. Palmital Santos",
    status: "urgent",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Urgência", "Consultas"],
    medications: [
      {
        id: "med46",
        name: "Adrenalina",
        dosage: "1mg/ml",
        quantity: 1,
        minStock: 10,
        maxStock: 30,
        status: "urgent"
      }
    ]
  },
  {
    id: "usf-altaneira",
    name: "USF Altaneira",
    type: "USF",
    address: "Rua Riachuelo, 139",
    coordinates: [-49.944778, -22.20837],
    phone: "(14) 3402-1269",
    manager: "Dr. Altaneira Silva",
    status: "attention",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Consultas", "Vacinas"],
    medications: [
      {
        id: "med47",
        name: "Propranolol",
        dosage: "40mg",
        quantity: 35,
        minStock: 50,
        maxStock: 180,
        status: "attention"
      }
    ]
  },
  {
    id: "usf-novo-horizonte",
    name: "USF Novo Horizonte",
    type: "USF",
    address: "Rua Orlando Silva, 15",
    coordinates: [-49.981631, -22.19948],
    phone: "(14) 3402-1270",
    manager: "Dra. Novo Horizonte",
    status: "healthy",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Consultas", "Vacinas"],
    medications: [
      {
        id: "med48",
        name: "Carbonato de Cálcio",
        dosage: "500mg",
        quantity: 125,
        minStock: 90,
        maxStock: 300,
        status: "healthy"
      }
    ]
  },
  {
    id: "usf-jardim-marilia",
    name: "USF Jardim Marília",
    type: "USF",
    address: "Rua Jesuítas, 40",
    coordinates: [-49.985796, -22.195013],
    phone: "(14) 3402-1271",
    manager: "Dr. Jardim Marília",
    status: "normal",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Consultas", "Curativos"],
    medications: [
      {
        id: "med49",
        name: "Ciprofloxacina",
        dosage: "500mg",
        quantity: 60,
        minStock: 45,
        maxStock: 150,
        status: "normal"
      }
    ]
  },
  {
    id: "usf-tres-lagos",
    name: "USF Três Lagos",
    type: "USF",
    address: "Rua Sebastião Innocêncio de Oliveira, 30",
    coordinates: [-49.985528, -22.217833],
    phone: "(14) 3402-1272",
    manager: "Dra. Três Lagos",
    status: "attention",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Pediatria", "Vacinas"],
    medications: [
      {
        id: "med50",
        name: "Desloratadina",
        dosage: "5mg",
        quantity: 40,
        minStock: 55,
        maxStock: 200,
        status: "attention"
      }
    ]
  },
  {
    id: "usf-jardim-america-iv",
    name: "USF Jardim América IV",
    type: "USF",
    address: "Rua Arnaldo Silva, 63",
    coordinates: [-49.967473, -22.194614],
    phone: "(14) 3402-1273",
    manager: "Dr. Jardim América IV",
    status: "healthy",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Consultas", "Vacinas"],
    medications: [
      {
        id: "med51",
        name: "Vitamina B12",
        dosage: "1000mcg",
        quantity: 100,
        minStock: 75,
        maxStock: 250,
        status: "healthy"
      }
    ]
  },
  {
    id: "usf-campo-belo-dirceu",
    name: "USF Campo Belo – Dirceu",
    type: "USF",
    address: "Av. Sampaio Vidal, s/n",
    coordinates: [-49.950164, -22.219686],
    phone: "(14) 3402-1274",
    manager: "Dra. Campo Belo Dirceu",
    status: "normal",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Consultas", "Curativos"],
    medications: [
      {
        id: "med52",
        name: "Betametasona",
        dosage: "0.5mg",
        quantity: 45,
        minStock: 35,
        maxStock: 120,
        status: "normal"
      }
    ]
  },
  {
    id: "usf-jardim-renata",
    name: "USF Jardim Renata",
    type: "USF",
    address: "Rua Antonia Bergamini Sândalo, 35",
    coordinates: [-49.989822, -22.179124],
    phone: "(14) 3402-1275",
    manager: "Dr. Jardim Renata",
    status: "urgent",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Urgência", "Consultas"],
    medications: [
      {
        id: "med53",
        name: "Naloxona",
        dosage: "0.4mg/ml",
        quantity: 2,
        minStock: 8,
        maxStock: 25,
        status: "urgent"
      }
    ]
  },
  {
    id: "usf-jardim-flamingo",
    name: "USF Jardim Flamingo",
    type: "USF",
    address: "Rua Padre José Osvaldo Nunes, s/n",
    coordinates: [-49.971278, -22.181214],
    phone: "(14) 3402-1276",
    manager: "Dra. Jardim Flamingo",
    status: "attention",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Consultas", "Vacinas"],
    medications: [
      {
        id: "med54",
        name: "Hidrocortisona",
        dosage: "20mg",
        quantity: 35,
        minStock: 50,
        maxStock: 150,
        status: "attention"
      }
    ]
  },
  {
    id: "usf-jardim-teruel",
    name: "USF Jardim Teruel",
    type: "USF",
    address: "Rua Elias Rifan, 35",
    coordinates: [-49.989441, -22.190078],
    phone: "(14) 3402-1277",
    manager: "Dr. Jardim Teruel",
    status: "healthy",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Consultas", "Vacinas"],
    medications: [
      {
        id: "med55",
        name: "Eritromicina",
        dosage: "500mg",
        quantity: 85,
        minStock: 60,
        maxStock: 200,
        status: "healthy"
      }
    ]
  },
  {
    id: "usf-argolo-ferrao",
    name: "USF Argolo Ferrão",
    type: "USF",
    address: "Rua Monsenhor João Baptista, 331",
    coordinates: [-49.943901, -22.193059],
    phone: "(14) 3402-1278",
    manager: "Dra. Argolo Ferrão",
    status: "normal",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Consultas", "Curativos"],
    medications: [
      {
        id: "med56",
        name: "Dextrometorfano",
        dosage: "15mg",
        quantity: 55,
        minStock: 40,
        maxStock: 150,
        status: "normal"
      }
    ]
  },
  {
    id: "usf-primeiro-maio",
    name: "USF 1º de Maio",
    type: "USF",
    address: "Av. José Jorente, 291",
    coordinates: [-49.951051, -22.18433],
    phone: "(14) 3402-1279",
    manager: "Dr. 1º de Maio",
    status: "attention",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Consultas", "Vacinas"],
    medications: [
      {
        id: "med57",
        name: "Cloroquina",
        dosage: "250mg",
        quantity: 30,
        minStock: 50,
        maxStock: 180,
        status: "attention"
      }
    ]
  },
  {
    id: "usf-santa-antonieta-iii",
    name: "USF Santa Antonieta III",
    type: "USF",
    address: "Rua Eliezer Rocha, 2505",
    coordinates: [-49.965981, -22.204254],
    phone: "(14) 3402-1280",
    manager: "Dra. Santa Antonieta III",
    status: "healthy",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Consultas", "Vacinas"],
    medications: [
      {
        id: "med58",
        name: "Fexofenadina",
        dosage: "120mg",
        quantity: 90,
        minStock: 70,
        maxStock: 220,
        status: "healthy"
      }
    ]
  },
  {
    id: "usf-padre-nobrega-ii",
    name: "USF Padre Nóbrega II",
    type: "USF",
    address: "Rua Salgado Filho, 30",
    coordinates: [-49.652684, -22.214215],
    phone: "(14) 3402-1281",
    manager: "Dr. Padre Nóbrega II",
    status: "urgent",
    workingHours: "07:00 - 17:00",
    services: ["Saúde da Família", "Urgência", "Consultas"],
    medications: [
      {
        id: "med59",
        name: "Atropina",
        dosage: "0.25mg/ml",
        quantity: 3,
        minStock: 12,
        maxStock: 40,
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
    coordinates: [-49.937233, -22.200507],
    phone: "(14) 3402-2000",
    manager: "Dr. Norte Silva",
    status: "healthy",
    workingHours: "24 horas",
    services: ["Urgência e Emergência", "Raio-X", "Laboratório"],
    medications: [
      {
        id: "med60",
        name: "Tramadol",
        dosage: "50mg",
        quantity: 200,
        minStock: 150,
        maxStock: 500,
        status: "healthy"
      },
      {
        id: "med61",
        name: "Ketamina",
        dosage: "50mg/ml",
        quantity: 45,
        minStock: 30,
        maxStock: 100,
        status: "normal"
      }
    ]
  },
  {
    id: "upa-zona-sul",
    name: "UPA Zona Sul",
    type: "UPA",
    address: "Rua Antônio Pereira da Silva, 288, Hípica Paulista",
    coordinates: [-49.956892, -22.235632],
    phone: "(14) 3402-2001",
    manager: "Dra. Sul Costa",
    status: "normal",
    workingHours: "24 horas",
    services: ["Urgência e Emergência", "Raio-X", "Laboratório"],
    medications: [
      {
        id: "med62",
        name: "Midazolam",
        dosage: "5mg/ml",
        quantity: 25,
        minStock: 20,
        maxStock: 80,
        status: "normal"
      },
      {
        id: "med63",
        name: "Fentanil",
        dosage: "0.05mg/ml",
        quantity: 15,
        minStock: 10,
        maxStock: 50,
        status: "normal"
      }
    ]
  },
  // Farmácias Municipais
  {
    id: "farmacia-zona-norte",
    name: "Farmácia Municipal Zona Norte",
    type: "Farmácia",
    address: "Av. Professora Berta de Camargo Vieira, 595",
    coordinates: [-49.965975, -22.184438],
    phone: "(14) 3402-3000",
    manager: "Farm. Norte Santos",
    status: "healthy",
    workingHours: "08:00 - 17:00",
    services: ["Dispensação de Medicamentos", "Farmácia Popular"],
    medications: [
      {
        id: "med64",
        name: "Insulina NPH",
        dosage: "100UI/ml",
        quantity: 350,
        minStock: 200,
        maxStock: 800,
        status: "healthy"
      },
      {
        id: "med65",
        name: "Insulina Regular",
        dosage: "100UI/ml",
        quantity: 280,
        minStock: 150,
        maxStock: 600,
        status: "healthy"
      }
    ]
  },
  {
    id: "farmacia-zona-sul",
    name: "Farmácia Municipal Zona Sul",
    type: "Farmácia",
    address: "Av. João Ramalho, 1081, Parque São Jorge",
    coordinates: [-49.944641, -22.23977],
    phone: "(14) 3402-3001",
    manager: "Farm. Sul Lima",
    status: "attention",
    workingHours: "08:00 - 17:00",
    services: ["Dispensação de Medicamentos", "Farmácia Popular"],
    medications: [
      {
        id: "med66",
        name: "Varfarina",
        dosage: "5mg",
        quantity: 45,
        minStock: 60,
        maxStock: 200,
        status: "attention"
      },
      {
        id: "med67",
        name: "Digoxina",
        dosage: "0.25mg",
        quantity: 50,
        minStock: 40,
        maxStock: 150,
        status: "normal"
      }
    ]
  },
  {
    id: "farmacia-zona-oeste",
    name: "Farmácia Municipal Zona Oeste",
    type: "Farmácia",
    address: "Av. Maria Fernandes Cavallari, 2287, Jardim Cavalari",
    coordinates: [-49.988258, -22.213019],
    phone: "(14) 3402-3002",
    manager: "Farm. Oeste Costa",
    status: "normal",
    workingHours: "08:00 - 17:00",
    services: ["Dispensação de Medicamentos", "Farmácia Popular"],
    medications: [
      {
        id: "med68",
        name: "Carbamazepina",
        dosage: "200mg",
        quantity: 120,
        minStock: 80,
        maxStock: 300,
        status: "normal"
      },
      {
        id: "med69",
        name: "Fenitoína",
        dosage: "100mg",
        quantity: 85,
        minStock: 60,
        maxStock: 200,
        status: "normal"
      }
    ]
  },
  {
    id: "farmacia-zona-leste",
    name: "Farmácia Municipal Zona Leste",
    type: "Farmácia",
    address: "Rua Santa Helena, 396, Jardim Alvorada",
    coordinates: [-49.93717, -22.211566],
    phone: "(14) 3402-3003",
    manager: "Farm. Leste Silva",
    status: "urgent",
    workingHours: "08:00 - 17:00",
    services: ["Dispensação de Medicamentos", "Farmácia Popular"],
    medications: [
      {
        id: "med70",
        name: "Ciclosporina",
        dosage: "25mg",
        quantity: 5,
        minStock: 20,
        maxStock: 80,
        status: "urgent"
      },
      {
        id: "med71",
        name: "Tacrolimus",
        dosage: "1mg",
        quantity: 8,
        minStock: 15,
        maxStock: 60,
        status: "urgent"
      }
    ]
  },
  {
    id: "farmacia-popular-centro",
    name: "Farmácia Popular do Brasil – Centro",
    type: "Farmácia",
    address: "Avenida Brasil, 184, Centro",
    coordinates: [-49.946855, -22.215356],
    phone: "(14) 3402-3004",
    manager: "Farm. Centro Santos",
    status: "healthy",
    workingHours: "08:00 - 18:00",
    services: ["Farmácia Popular", "Dispensação de Medicamentos"],
    medications: [
      {
        id: "med72",
        name: "Enalapril",
        dosage: "10mg",
        quantity: 450,
        minStock: 300,
        maxStock: 1000,
        status: "healthy"
      },
      {
        id: "med73",
        name: "Metformina",
        dosage: "850mg",
        quantity: 520,
        minStock: 400,
        maxStock: 1200,
        status: "healthy"
      }
    ]
  }
];
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