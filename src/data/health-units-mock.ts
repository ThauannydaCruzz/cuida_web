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
        id: "med10",
        name: "Morfina",
        dosage: "10mg/ml",
        quantity: 25,
        minStock: 20,
        maxStock: 80,
        status: "normal"
      },
      {
        id: "med11",
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
        id: "med12",
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
        id: "med13",
        name: "Omeprazol",
        dosage: "20mg",
        quantity: 200,
        minStock: 80,
        maxStock: 400,
        status: "healthy"
      },
      {
        id: "med14",
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
        id: "med15",
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
        id: "med16",
        name: "Clonazepam",
        dosage: "2mg",
        quantity: 60,
        minStock: 30,
        maxStock: 100,
        status: "healthy"
      }
    ]
  }
];