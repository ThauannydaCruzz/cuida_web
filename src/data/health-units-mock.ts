import { HealthUnit } from "@/types/health-units";

export const healthUnits: HealthUnit[] = [
  {
    id: "upa-central",
    name: "UPA Central",
    type: "UPA",
    address: "Av. Central, 1000 - Centro",
    coordinates: [-23.5505, -46.6333],
    phone: "(11) 3333-1000",
    manager: "Dr. Ana Silva",
    status: "attention",
    workingHours: "24h",
    services: ["Emergência", "Urgência", "Observação"],
    medications: [
      {
        id: "med1",
        name: "Dipirona",
        dosage: "5mg",
        quantity: 0,
        minStock: 50,
        maxStock: 500,
        status: "urgent"
      },
      {
        id: "med2",
        name: "Soro Fisiológico",
        dosage: "500ml",
        quantity: 10,
        minStock: 100,
        maxStock: 1000,
        expiryDate: "2024-01-15",
        batchNumber: "XYZ",
        status: "urgent"
      },
      {
        id: "med3",
        name: "Paracetamol",
        dosage: "750mg",
        quantity: 80,
        minStock: 50,
        maxStock: 300,
        status: "attention"
      },
      {
        id: "med4",
        name: "Ibuprofeno",
        dosage: "400mg",
        quantity: 150,
        minStock: 50,
        maxStock: 200,
        status: "healthy"
      }
    ]
  },
  {
    id: "ubs-vila-nova",
    name: "UBS Vila Nova",
    type: "UBS",
    address: "Rua das Flores, 500 - Vila Nova",
    coordinates: [-23.5405, -46.6233],
    phone: "(11) 3333-2000",
    manager: "Dra. Maria Santos",
    status: "healthy",
    workingHours: "07:00 - 17:00",
    services: ["Consultas", "Vacinas", "Curativos"],
    medications: [
      {
        id: "med5",
        name: "Dipirona",
        dosage: "5mg",
        quantity: 200,
        minStock: 50,
        maxStock: 500,
        status: "healthy"
      },
      {
        id: "med6",
        name: "Amoxicilina",
        dosage: "500mg",
        quantity: 120,
        minStock: 30,
        maxStock: 200,
        status: "healthy"
      },
      {
        id: "med7",
        name: "Losartana",
        dosage: "50mg",
        quantity: 90,
        minStock: 40,
        maxStock: 150,
        status: "healthy"
      }
    ]
  },
  {
    id: "ubs-jardim-sul",
    name: "UBS Jardim Sul",
    type: "UBS",
    address: "Av. Sul, 300 - Jardim Sul",
    coordinates: [-23.5605, -46.6433],
    phone: "(11) 3333-3000",
    manager: "Dr. João Oliveira",
    status: "normal",
    workingHours: "07:00 - 17:00",
    services: ["Consultas", "Pré-natal", "Pediatria"],
    medications: [
      {
        id: "med8",
        name: "Insulina",
        dosage: "100UI/ml",
        quantity: 25,
        minStock: 20,
        maxStock: 100,
        status: "normal"
      },
      {
        id: "med9",
        name: "Captopril",
        dosage: "25mg",
        quantity: 60,
        minStock: 30,
        maxStock: 150,
        status: "normal"
      }
    ]
  },
  {
    id: "hospital-municipal",
    name: "Hospital Municipal",
    type: "Hospital",
    address: "Rua Hospital, 1500 - Centro",
    coordinates: [-23.5305, -46.6133],
    phone: "(11) 3333-4000",
    manager: "Dr. Carlos Lima",
    status: "urgent",
    workingHours: "24h",
    services: ["Emergência", "Internação", "Cirurgias", "UTI"],
    medications: [
      {
        id: "med10",
        name: "Morfina",
        dosage: "10mg/ml",
        quantity: 2,
        minStock: 20,
        maxStock: 100,
        status: "urgent"
      },
      {
        id: "med11",
        name: "Antibiótico",
        dosage: "1g",
        quantity: 0,
        minStock: 50,
        maxStock: 200,
        status: "urgent"
      },
      {
        id: "med12",
        name: "Anestésico",
        dosage: "20ml",
        quantity: 15,
        minStock: 30,
        maxStock: 100,
        expiryDate: "2024-02-01",
        batchNumber: "ABC123",
        status: "urgent"
      }
    ]
  },
  {
    id: "clinica-especializada",
    name: "Clínica Especializada",
    type: "Clínica",
    address: "Av. Especializada, 800 - Bela Vista",
    coordinates: [-23.5705, -46.6533],
    phone: "(11) 3333-5000",
    manager: "Dra. Patricia Costa",
    status: "healthy",
    workingHours: "08:00 - 18:00",
    services: ["Cardiologia", "Endocrinologia", "Neurologia"],
    medications: [
      {
        id: "med13",
        name: "Metformina",
        dosage: "850mg",
        quantity: 180,
        minStock: 50,
        maxStock: 300,
        status: "healthy"
      },
      {
        id: "med14",
        name: "Atorvastatina",
        dosage: "20mg",
        quantity: 100,
        minStock: 30,
        maxStock: 200,
        status: "healthy"
      }
    ]
  }
];