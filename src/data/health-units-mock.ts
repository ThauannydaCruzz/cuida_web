import { HealthUnit } from "@/types/health-units";

export const healthUnits: HealthUnit[] = [
  // UBSs
  {
    id: "ubs-alto-cafezal",
    name: "UBS Alto Cafezal",
    type: "UBS",
    address: "Rua Paes Lemes, 850",
    coordinates: [-49.95668760120589, -22.21804756599309],
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
    coordinates: [-49.96997355121664, -22.2032002597043],
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
    coordinates: [-49.93896150122021, -22.214316164402952],
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
    coordinates: [-49.95875650121664, -22.18836050342522],
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
    coordinates: [-49.97209200122062, -22.220941367222373],
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
    coordinates: [-49.92947740121904, -22.2408349756463],
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
    coordinates: [-49.96076890122078, -22.171228246188196],
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
    coordinates: [-49.9550, -22.2089], // Approximate coordinates since not provided
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
    coordinates: [-49.93596730122155, -22.250777079849467],
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
    coordinates: [-49.95322830122532, -22.197716457379613],
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
    coordinates: [-49.959828151223505, -22.199595608184026],
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
    coordinates: [-49.95495620121408, -22.16768374468588],
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
    coordinates: [-49.95495621966167, -22.16749431595768],
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
    coordinates: [-49.97640290120931, -21.996586672663813],
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
    coordinates: [-50.113695401220895, -22.27413503976253],
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
    coordinates: [-50.11369664936247, -22.272236776045773],
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
    coordinates: [-49.97910060485405, -22.232972563392604],
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
    coordinates: [-49.94407080121353, -22.248395778853546],
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
    coordinates: [-49.92390260121523, -22.261670084475988],
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
    coordinates: [-50.01126440122079, -22.156487039959107],
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
    coordinates: [-49.952890801215034, -22.17496734776117],
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
    coordinates: [-49.88509890120808, -22.22008846685724],
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
    coordinates: [-49.94749760120969, -22.162817442639213],
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
    coordinates: [-49.95156140122462, -22.188947253672357],
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
    coordinates: [-49.930287601222865, -22.192934855356505],
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
    coordinates: [-49.91747210122412, -22.246329577966833],
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
    coordinates: [-49.97262410121747, -22.166378244130318],
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
    coordinates: [-49.97262411966795, -22.166188813678225],
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
    coordinates: [-49.9348773012151, -22.24271657644057],
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
    coordinates: [-49.93487731971805, -22.242527246844936],
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
    coordinates: [-49.936662501228014, -22.25009877956214],
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
    coordinates: [-49.95200970121017, -22.193452955588352],
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
    coordinates: [-49.922894301213134, -22.244456577177566],
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
    coordinates: [-49.95155255485402, -22.188987126296265],
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
    coordinates: [-49.94046560121358, -22.202521459423966],
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
    coordinates: [-49.92263020120869, -22.17864634933029],
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
    coordinates: [-49.922630278135436, -22.178216547596296],
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
    coordinates: [-49.91251170122884, -22.237255074118593],
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
    coordinates: [-49.967933801220674, -22.194393155981835],
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
    coordinates: [-49.91376810121502, -22.133583830294732],
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
    coordinates: [-49.97023710121819, -22.15835214074381],
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
    coordinates: [-49.993316201209566, -22.251658180230777],
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
    coordinates: [-49.97750370122341, -22.21418506435604],
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
    coordinates: [-49.97062190121031, -22.218200866054183],
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
    coordinates: [-49.94747410121581, -22.162774342609673],
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
    coordinates: [-49.947474178004036, -22.162344494140548],
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
    coordinates: [-50.01126440122079, -22.156487039959107],
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
    coordinates: [-49.95722020121141, -22.15076153754248],
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
    coordinates: [-49.92250230121799, -22.24614347789531],
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
    coordinates: [-49.95703391157061, -22.19553481805253],
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
    coordinates: [-49.92724160122328, -22.23894407484394],
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
    coordinates: [-49.9772123012159, -22.236096773635687],
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
    coordinates: [-49.93685490120816, -22.20601136089696],
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
      }
    ]
  },
  {
    id: "farmacia-central",
    name: "Farmácia Municipal Central",
    type: "Farmácia",
    address: "Rua Hidekichi Nomura, 170, Fragata",
    coordinates: [-49.93346960121283, -22.22773207008834],
    phone: "(14) 3402-3005",
    manager: "Farm. Central Santos",
    status: "healthy",
    workingHours: "08:00 - 17:00",
    services: ["Dispensação de Medicamentos", "Farmácia Municipal"],
    medications: [
      {
        id: "med74",
        name: "Medicamentos Básicos",
        dosage: "Variado",
        quantity: 800,
        minStock: 500,
        maxStock: 1500,
        status: "healthy"
      }
    ]
  },
  {
    id: "farmacia-popular-centro",
    name: "Farmácia Popular do Brasil – Centro",
    type: "Farmácia",
    address: "Avenida Brasil, 184, Centro",
    coordinates: [-54.5860489053456, -25.538096302242106],
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