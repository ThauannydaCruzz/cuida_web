import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { 
  ArrowLeft, 
  Search, 
  FileText, 
  Download, 
  Eye, 
  Calendar, 
  User, 
  MapPin,
  Package,
  Clock,
  Filter,
  RefreshCw
} from "lucide-react";
import Header from "@/components/Header";

const FuncionarioDocumentos = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("todos");

  // Mock data for documents
  const documents = [
    {
      id: "DOC001",
      type: "Entrega de Medicamento",
      patient: "João Silva Santos",
      medication: "Losartana 50mg",
      quantity: "30 comprimidos",
      unit: "UBS Central",
      date: "2025-01-15",
      time: "14:30",
      status: "Entregue",
      pharmacist: "Dra. Maria Costa"
    },
    {
      id: "DOC002",
      type: "Prescrição Médica",
      patient: "Ana Paula Oliveira",
      medication: "Metformina 500mg",
      quantity: "60 comprimidos",
      unit: "UBS Vila Nova",
      date: "2025-01-15",
      time: "10:15",
      status: "Pendente",
      pharmacist: "Dr. Carlos Mendes"
    },
    {
      id: "DOC003",
      type: "Entrega de Medicamento",
      patient: "Pedro Henrique Lima",
      medication: "Amoxicilina 500mg",
      quantity: "21 cápsulas",
      unit: "UBS São José",
      date: "2025-01-14",
      time: "16:45",
      status: "Entregue",
      pharmacist: "Dra. Lucia Fernandes"
    },
    {
      id: "DOC004",
      type: "Controle de Estoque",
      patient: "Sistema Automático",
      medication: "Paracetamol 500mg",
      quantity: "500 comprimidos",
      unit: "UBS Central",
      date: "2025-01-14",
      time: "09:00",
      status: "Processado",
      pharmacist: "Sistema"
    },
    {
      id: "DOC005",
      type: "Entrega de Medicamento",
      patient: "Mariana Costa Souza",
      medication: "Omeprazol 20mg",
      quantity: "30 cápsulas",
      unit: "UBS Jardim América",
      date: "2025-01-13",
      time: "11:20",
      status: "Entregue",
      pharmacist: "Dr. Roberto Silva"
    },
    {
      id: "DOC006",
      type: "Prescrição Médica",
      patient: "Carlos Eduardo Nunes",
      medication: "Captopril 25mg",
      quantity: "60 comprimidos",
      unit: "UBS Vila Nova",
      date: "2025-01-13",
      time: "15:30",
      status: "Aprovada",
      pharmacist: "Dra. Sandra Moreira"
    }
  ];

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.patient.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.medication.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.id.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = selectedFilter === "todos" || 
                         doc.type.toLowerCase().includes(selectedFilter.toLowerCase());
    
    return matchesSearch && matchesFilter;
  });

  const getStatusBadge = (status: string) => {
    const variants = {
      "Entregue": "default",
      "Pendente": "secondary",
      "Aprovada": "outline",
      "Processado": "default"
    } as const;
    
    return (
      <Badge variant={variants[status as keyof typeof variants] || "secondary"} className="text-xs">
        {status}
      </Badge>
    );
  };

  const getDocumentIcon = (type: string) => {
    if (type.includes("Entrega")) return Package;
    if (type.includes("Prescrição")) return FileText;
    if (type.includes("Controle")) return RefreshCw;
    return FileText;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/5 to-background">
      <Header />
      
      {/* Back Button */}
      <div className="p-6">
        <Button
          variant="ghost"
          onClick={() => navigate("/home-funcionario")}
          className="flex items-center gap-2 hover:bg-accent/50 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar para Home
        </Button>
      </div>

      <div className="px-6 pb-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Consulta de Documentos</h1>
          <p className="text-muted-foreground">Histórico de entregas de medicamentos e documentos relacionados</p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <Card className="bg-gradient-to-br from-card to-card/80 border border-border/20 rounded-2xl">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Buscar por paciente, medicamento ou documento..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 rounded-xl"
                  />
                </div>
                <div className="flex gap-2">
                  <Button
                    variant={selectedFilter === "todos" ? "default" : "outline"}
                    onClick={() => setSelectedFilter("todos")}
                    className="rounded-xl"
                  >
                    Todos
                  </Button>
                  <Button
                    variant={selectedFilter === "entrega" ? "default" : "outline"}
                    onClick={() => setSelectedFilter("entrega")}
                    className="rounded-xl"
                  >
                    Entregas
                  </Button>
                  <Button
                    variant={selectedFilter === "prescrição" ? "default" : "outline"}
                    onClick={() => setSelectedFilter("prescrição")}
                    className="rounded-xl"
                  >
                    Prescrições
                  </Button>
                  <Button
                    variant={selectedFilter === "controle" ? "default" : "outline"}
                    onClick={() => setSelectedFilter("controle")}
                    className="rounded-xl"
                  >
                    Controle
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-card to-card/80 border border-border/20 rounded-2xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total de Documentos</p>
                  <p className="text-2xl font-bold text-foreground">{documents.length}</p>
                </div>
                <FileText className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-card to-card/80 border border-border/20 rounded-2xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Entregas Hoje</p>
                  <p className="text-2xl font-bold text-foreground">
                    {documents.filter(doc => doc.date === "2025-01-15" && doc.type.includes("Entrega")).length}
                  </p>
                </div>
                <Package className="w-8 h-8 text-secondary-foreground" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-card to-card/80 border border-border/20 rounded-2xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Pendentes</p>
                  <p className="text-2xl font-bold text-foreground">
                    {documents.filter(doc => doc.status === "Pendente").length}
                  </p>
                </div>
                <Clock className="w-8 h-8 text-amber-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-card to-card/80 border border-border/20 rounded-2xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Resultados</p>
                  <p className="text-2xl font-bold text-foreground">{filteredDocuments.length}</p>
                </div>
                <Filter className="w-8 h-8 text-accent-foreground" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Documents List */}
        <Card className="bg-gradient-to-br from-card to-card/80 border border-border/20 rounded-2xl">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              Documentos Encontrados
              <Badge variant="secondary" className="ml-auto">
                {filteredDocuments.length}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredDocuments.map((doc) => {
                const Icon = getDocumentIcon(doc.type);
                
                return (
                  <div key={doc.id} className="p-4 rounded-xl bg-accent/10 hover:bg-accent/20 transition-colors border border-border/10">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground">{doc.type}</h4>
                          <p className="text-sm text-muted-foreground">ID: {doc.id}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {getStatusBadge(doc.status)}
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-muted-foreground" />
                        <div>
                          <p className="font-medium text-foreground">{doc.patient}</p>
                          <p className="text-muted-foreground text-xs">Paciente</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Package className="w-4 h-4 text-muted-foreground" />
                        <div>
                          <p className="font-medium text-foreground">{doc.medication}</p>
                          <p className="text-muted-foreground text-xs">{doc.quantity}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-muted-foreground" />
                        <div>
                          <p className="font-medium text-foreground">{doc.unit}</p>
                          <p className="text-muted-foreground text-xs">Unidade</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <div>
                          <p className="font-medium text-foreground">{doc.date} às {doc.time}</p>
                          <p className="text-muted-foreground text-xs">
                            {doc.pharmacist !== "Sistema" ? `Por: ${doc.pharmacist}` : "Sistema automático"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              
              {filteredDocuments.length === 0 && (
                <div className="text-center py-12">
                  <FileText className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
                  <h3 className="text-lg font-medium text-foreground mb-2">Nenhum documento encontrado</h3>
                  <p className="text-muted-foreground">
                    Tente ajustar os filtros ou termos de busca
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FuncionarioDocumentos;