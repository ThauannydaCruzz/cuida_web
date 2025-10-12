// src/data/health-units-mock.ts

import { HealthUnit } from "@/types/health-units";
import { get_unidades } from "../services/maps";

// Lista base de todas as unidades com nome, endereço e coordenadas corretas de Marília, SP
const allUnitsData = await get_unidades();

// Dados de exemplo para medicamentos
const mockMedications = [
    { name: "Paracetamol", dosage: "500mg" },
    { name: "Dipirona", dosage: "500mg" },
    { name: "Ibuprofeno", dosage: "400mg" },
    { name: "Amoxicilina", dosage: "250mg" },
    { name: "Losartana", dosage: "50mg" },
    { name: "Sinvastatina", dosage: "20mg" },
    { name: "Metformina", dosage: "850mg" },
    { name: "Omeprazol", dosage: "20mg" },
];

// Status possíveis para as unidades
const statuses: Array<'healthy' | 'normal' | 'attention' | 'urgent'> = ['healthy', 'normal', 'attention', 'urgent'];

// Exporta a lista final de unidades com dados de exemplo gerados aleatoriamente
export const healthUnits: HealthUnit[] = allUnitsData.map((unit, index) => {
    // Gera uma seleção aleatória de 2 a 5 medicamentos para cada unidade
    const unitMedications = [...mockMedications]
        .sort(() => 0.5 - Math.random())
        .slice(0, Math.floor(Math.random() * 4) + 2);

    return {
        id: `unit-${index + 1}`,
        name: unit.name,
        address: unit.address,
        coordinates: [unit.lat, unit.lon],
        type: unit.name.includes("UBS") ? 'UBS' : unit.name.includes("USF") ? 'USF' : unit.name.includes("UPA") ? 'UPA' : 'Farmácia',
        status: statuses[Math.floor(Math.random() * statuses.length)],
        workingHours: "Seg-Sex: 08:00 - 17:00",
        phone: "(14) 3402-XXXX",
        medications: unitMedications.map((med, medIndex) => ({
            id: `med-${index + 1}-${medIndex + 1}`,
            name: med.name,
            dosage: med.dosage,
            quantity: Math.floor(Math.random() * 100), // Quantidade aleatória
            status: 'sufficient', // Status padrão
        })),
    }
});