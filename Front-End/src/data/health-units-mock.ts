import { HealthUnit } from "@/types/health-units";

const allUnitsData = [
    { name: "UBS Alto Cafezal", address: "Rua Paes Lemes, 850", lat: -22.218107, lon: -49.956688 },
    { name: "UBS Bandeirantes", address: "Rua Albericio Mendes Pinto, 96", lat: -22.203290, lon: -49.969959 },
    { name: "UBS Cascata", address: "Rua Cláudio Manoel da Costa, 43", lat: -22.214376, lon: -49.938962 },
    { name: "UBS Castelo Branco", address: "Rua Adamantina, 15", lat: -22.188453, lon: -49.958898 },
    { name: "UBS Chico Mendes", address: "Rua Amador Bueno, 1085", lat: -22.221001, lon: -49.972092 },
    { name: "UBS Costa e Silva", address: "Rua Fernando Fontana, 300", lat: -22.240895, lon: -49.929477 },
    { name: "USF J.K.", address: "Rua Lucílio Coelho de Oliveira, 5", lat: -22.171122, lon: -49.960839 },
    { name: "UBS Planalto", address: "Rua Gildo Bonato, 207", lat: -22.250908, lon: -49.936008 },
    { name: "UBS São Judas", address: "Rua Ribeirão Preto, 510", lat: -22.197776, lon: -49.953228 },
    { name: "UBS São Miguel", address: "Rua 24 de Dezembro, 2865", lat: -22.199639, lon: -49.959729 },
    { name: "USF Aniz Badra", address: "Rua Urias Avelino de Moraes, s/n", lat: -22.167743, lon: -49.954956 },
    { name: "USF Parque das Nações", address: "Rua Antonio Spressão, 465", lat: -22.146755, lon: -49.962336 },
    { name: "USF Jardim Cavalari", address: "Rua João Gerônimo Perinetti, 94", lat: -22.229690, lon: -49.975250 },
    { name: "USF Vila Real", address: "Rua Arthur Martins Ribeiro, 35", lat: -22.248455, lon: -49.944071 },
    { name: "USF Jânio Quadros", address: "Rua Felipe Navas, 204", lat: -22.175027, lon: -49.952891 },
    { name: "USF Lácio", address: "Av. Brasil, 272", lat: -22.220148, lon: -49.885099 },
    { name: "USF Vila Barros", address: "Rua Amando Oliveira Rocha Filho, 10", lat: -22.189007, lon: -49.951561 },
    { name: "USF Aeroporto", address: "Rua Iporâs, 5", lat: -22.192995, lon: -49.930288 },
    { name: "USF Marajó", address: "Rua Japão, 380", lat: -22.246389, lon: -49.917472 },
    { name: "USF Santa Antonieta II", address: "Rua Luciano Borguetti, 148", lat: -22.150533, lon: -49.962986 }, 
    { name: "USF Tóffoli", address: "Rua Yutaka Kamakura, 34", lat: -22.242776, lon: -49.934877 },
    { name: "USF Vila Hípica", address: "Rua Luiz Manhães, 156", lat: -22.244516, lon: -49.922894 },
    { name: "USF Novo Horizonte", address: "Rua Orlando Silva, 15", lat: -22.178706, lon: -49.922630 },
    { name: "USF Jardim América IV", address: "Rua Arnaldo Silva, 63", lat: -22.193865, lon: -49.967729 },
    { name: "UPA Norte", address: "Rua João Caliman, 110, Parque das Nações", lat: -22.150821, lon: -49.957220 },
    { name: "UPA Zona Sul", address: "Rua Antônio Pereira da Silva, 288", lat: -22.150821, lon: -49.957220 },
    { name: "Farmácia Municipal Zona Norte", address: "Av. Berta de Camargo Vieira, 595", lat: -22.1591116, lon: -49.9612217 },
    { name: "Farmácia Municipal Zona Sul", address: "Av. João Ramalho, 1081", lat: -22.239004, lon: -49.927242 },
    { name: "Farmácia Municipal Zona Oeste", address: "Av. Maria Fernandes Cavallari, 2287", lat: -22.236156, lon: -49.977212 },
    { name: "Farmácia Municipal Zona Leste", address: "Rua Santa Helena, 396", lat: -22.206071, lon: -49.936855 },
    { name: "UCAF Marília", address: "Av. Santo Antônio, 2000", lat: -22.217900, lon: -49.950200 },
    { name: "Farmácia Popular do Brasil – Centro", address: "Avenida Brasil, 184, Centro", lat: -22.227918, lon: -49.933516 }
];

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

const statuses: Array<'healthy' | 'normal' | 'attention' | 'urgent'> = ['healthy', 'normal', 'attention', 'urgent'];

export const healthUnits: HealthUnit[] = allUnitsData.map((unit, index) => {
    const randomMedications = mockMedications
        .sort(() => Math.random() - 0.5)
        .slice(0, Math.floor(Math.random() * 10) + 5)
        .map((med, medIndex) => {
            const quantity = Math.floor(Math.random() * 500);
            const minStock = 50;
            const maxStock = 400;
            let status: 'healthy' | 'normal' | 'attention' | 'urgent' = 'healthy';
            
            if (quantity === 0) status = 'urgent';
            else if (quantity < minStock) status = 'attention';
            else if (quantity < minStock * 1.5) status = 'normal';

            return {
                id: `med-${index}-${medIndex}`,
                ...med,
                quantity,
                minStock,
                maxStock,
                status,
            };
        });

        let type: 'UBS' | 'UPA' | 'Hospital' | 'Clínica' | 'Farmácia' | 'USF' | 'Farmácia Popular' | 'UCAF' = 'UBS';

        if (unit.name.includes('UCAF')) type = 'UCAF';
        else if (unit.name.includes('Farmácia Popular')) type = 'Farmácia Popular';
        else if (unit.name.includes('UBS')) type = 'UBS';
        else if (unit.name.includes('USF')) type = 'USF';
        else if (unit.name.includes('UPA')) type = 'UPA';
        else if (unit.name.includes('Farmácia')) type = 'Farmácia';


    const isUCAF = unit.name.includes('UCAF');
    
    return {
        id: `unit-${index}`,
        name: unit.name,
        address: unit.address,
        coordinates: [unit.lat, unit.lon],
        type,
        status: statuses[Math.floor(Math.random() * statuses.length)],
        workingHours: isUCAF ? '08:00 - 17:00' : '07:00 - 17:00',
        phone: isUCAF ? '(14) 3402-0712' : '(14) 3402-1234',
        manager: 'Dr. João Silva',
        services: ['Consultas', 'Vacinação', 'Curativos'],
        medications: randomMedications,
    };
});