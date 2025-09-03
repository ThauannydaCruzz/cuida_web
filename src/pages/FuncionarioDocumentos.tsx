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
  Copy,
  BarChart3,
  Filter,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const FuncionarioDocumentos = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Mock data for documents
  const documents = [
    {
      numero: "1/2021-GABPRESI",
      tipo: "INFORMAÇÃO", 
      matricula: "0753362389 - Carlos Angelson Frota Veras",
      unidade: "GABINETE DA PRESIDÊNCIA",
      status: "Ativo",
      geracao: "04/03/2021 às 15:54",
      arquivo: true
    },
    {
      numero: "11/2021-GABPRESI", 
      tipo: "INFORMAÇÃO",
      matricula: "0387590384 - DAVID ABREU DA SILVA", 
      unidade: "GABINETE DA PRESIDÊNCIA",
      status: "Ativo",
      geracao: "08/03/2021 às 10:51",
      arquivo: true
    },
    {
      numero: "2/2021-CDESENV",
      tipo: "INFORMAÇÃO",
      matricula: "42730 - ANDREA ALENCAR BEZERRA",
      unidade: "COORDENADORIA DE DESENVOLVIMENTO DE SISTEMAS", 
      status: "Ativo",
      geracao: "08/03/2021 às 17:10",
      arquivo: false
    },
    {
      numero: "4/2021-GABPRESI",
      tipo: "INFORMAÇÃO", 
      matricula: "0753362389 - Carlos Angelson Frota Veras",
      unidade: "GABINETE DA PRESIDÊNCIA",
      status: "Ativo", 
      geracao: "04/03/2021 às 16:09",
      arquivo: true
    },
    {
      numero: "5/2021-GABPRESI",
      tipo: "INFORMAÇÃO",
      matricula: "0753362389 - Carlos Angelson Frota Veras", 
      unidade: "GABINETE DA PRESIDÊNCIA",
      status: "Ativo",
      geracao: "04/03/2021 às 16:10",
      arquivo: false
    }
  ];

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.matricula.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.numero.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.unidade.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === "" || doc.status === statusFilter;
    const matchesType = typeFilter === "" || doc.tipo === typeFilter;
    
    return matchesSearch && matchesStatus && matchesType;
  });

  const totalPages = Math.ceil(filteredDocuments.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedDocuments = filteredDocuments.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 w-64 h-full bg-gradient-to-b from-primary to-primary/80 text-primary-foreground">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
              <img src="/lovable-uploads/5463ac4b-0afc-4ed6-b3a7-04924c4a23fa.png" alt="Logo" className="w-6 h-6" />
            </div>
            <div>
              <h1 className="font-bold text-sm font-poppins">CUIDA - Sistema de Controle de Numerações</h1>
              <p className="text-xs opacity-80">v 1.0_build_00</p>
            </div>
          </div>

          <nav className="space-y-2">
            <Button 
              variant="ghost" 
              className="w-full justify-start text-primary-foreground hover:bg-primary-foreground/10"
              onClick={() => navigate("/home-funcionario")}
            >
              Início
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start text-primary-foreground hover:bg-primary-foreground/10"
            >
              Administração
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start text-primary-foreground hover:bg-primary-foreground/10"
            >
              Parâmetros Gerais
            </Button>
            <div className="bg-primary-foreground/20 rounded-lg">
              <Button 
                variant="ghost" 
                className="w-full justify-start text-primary-foreground bg-primary-foreground/20"
              >
                Documentos
              </Button>
            </div>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 min-h-screen">
        {/* Header */}
        <div className="bg-card border-b border-border p-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-semibold">Documentos</h1>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Andrea Alencar Bezerra</span>
              <Button variant="ghost" size="sm">Sair</Button>
            </div>
          </div>
        </div>

        <div className="p-6">
          {/* Search Filters */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Filter className="w-5 h-5" />
                Filtros de pesquisa
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Tipo</label>
                  <select 
                    className="w-full p-2 border rounded-lg bg-background"
                    value={typeFilter}
                    onChange={(e) => setTypeFilter(e.target.value)}
                  >
                    <option value="">Selecionar tipo de documento</option>
                    <option value="INFORMAÇÃO">INFORMAÇÃO</option>
                  </select>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Status</label>
                  <select 
                    className="w-full p-2 border rounded-lg bg-background"
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                  >
                    <option value="">Selecionar status</option>
                    <option value="Ativo">Ativo</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Data de geração</label>
                  <div className="flex gap-2">
                    <Input type="date" className="flex-1" />
                    <span className="flex items-center">Até</span>
                    <Input type="date" className="flex-1" />
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Palavras-chave</label>
                  <Input placeholder="Selecionar palavra-chave" />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Matrícula/nome</label>
                  <Input 
                    placeholder="Pesquisar pela matrícula e/ou nome"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Unidade</label>
                  <Input placeholder="Selecionar unidade" />
                </div>
              </div>

              <div className="flex gap-2">
                <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                  <Search className="w-4 h-4 mr-2" />
                  Buscar
                </Button>
                <Button variant="outline" className="text-destructive border-destructive hover:bg-destructive/10">
                  Limpar
                </Button>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Novo
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5" />
                Resultado da pesquisa
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* Export Buttons */}
              <div className="flex gap-2 mb-4">
                <Button variant="outline" size="sm" className="bg-blue-600 text-white hover:bg-blue-700">
                  Copiar
                </Button>
                <Button variant="outline" size="sm" className="bg-green-600 text-white hover:bg-green-700">
                  Excel
                </Button>
                <Button variant="outline" size="sm" className="bg-orange-600 text-white hover:bg-orange-700">
                  CSV
                </Button>
                <Button variant="outline" size="sm" className="bg-red-600 text-white hover:bg-red-700">
                  PDF
                </Button>
                <Button variant="outline" size="sm" className="bg-gray-600 text-white hover:bg-gray-700">
                  Exibindo colunas
                </Button>
                <Button variant="outline" size="sm" className="bg-purple-600 text-white hover:bg-purple-700">
                  Agrupar
                </Button>
                <div className="ml-auto">
                  <Input placeholder="Pesquisar" className="w-48" />
                </div>
              </div>

              {/* Table */}
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Número</TableHead>
                    <TableHead>Tipo</TableHead>
                    <TableHead>Matrícula/Nome</TableHead>
                    <TableHead>Unidade</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Geração</TableHead>
                    <TableHead>Arquivo</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paginatedDocuments.map((doc, index) => (
                    <TableRow key={index}>
                      <TableCell className="text-blue-600 font-medium">{doc.numero}</TableCell>
                      <TableCell>{doc.tipo}</TableCell>
                      <TableCell>{doc.matricula}</TableCell>
                      <TableCell>{doc.unidade}</TableCell>
                      <TableCell>
                        <Badge variant="default" className="bg-green-600">
                          {doc.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{doc.geracao}</TableCell>
                      <TableCell>
                        {doc.arquivo ? (
                          <Eye className="w-4 h-4 text-blue-600" />
                        ) : (
                          <span className="text-muted-foreground">Não possui</span>
                        )}
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-1">
                          <Button size="sm" variant="outline" className="h-8 w-8 p-0 bg-green-600 text-white hover:bg-green-700">
                            <Eye className="w-3 h-3" />
                          </Button>
                          <Button size="sm" variant="outline" className="h-8 w-8 p-0 bg-blue-600 text-white hover:bg-blue-700">
                            <Download className="w-3 h-3" />
                          </Button>
                          <Button size="sm" variant="outline" className="h-8 w-8 p-0 bg-red-600 text-white hover:bg-red-700">
                            <FileText className="w-3 h-3" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              {/* Pagination */}
              <div className="flex items-center justify-between mt-4">
                <div className="text-sm text-muted-foreground">
                  Mostrando de {startIndex + 1} até {Math.min(startIndex + itemsPerPage, filteredDocuments.length)} de {filteredDocuments.length} registros
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Anterior
                  </Button>
                  <span className="text-sm px-3 py-1 bg-blue-600 text-white rounded">
                    {currentPage}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                  >
                    Próxima
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Floating Navigation Bar */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-[1001]">
        <div className="bg-card/90 backdrop-blur-xl rounded-3xl p-3 shadow-2xl border border-border/30">
          <div className="flex items-center gap-3">
            <Button
              onClick={() => navigate("/funcionario/mapa")}
              variant="ghost"
              className="flex flex-col items-center gap-2 p-4 h-auto hover:bg-accent/50 rounded-2xl"
            >
              <MapPin className="w-5 h-5" />
              <span className="text-xs font-medium">Mapa</span>
            </Button>

            <Button
              onClick={() => navigate("/funcionario/dashboard")}
              variant="ghost"
              className="flex flex-col items-center gap-2 p-4 h-auto hover:bg-accent/50 rounded-2xl"
            >
              <BarChart3 className="w-5 h-5" />
              <span className="text-xs font-medium">Dashboard</span>
            </Button>

            <Button
              onClick={() => navigate("/funcionario/documentos")}
              variant="default"
              className="flex flex-col items-center gap-2 p-4 h-auto rounded-2xl"
            >
              <Package className="w-5 h-5" />
              <span className="text-xs font-medium">Documentos</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FuncionarioDocumentos;