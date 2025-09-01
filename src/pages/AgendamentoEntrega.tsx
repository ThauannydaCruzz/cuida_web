import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate, useLocation } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { 
  ArrowLeft, 
  Truck, 
  Package, 
  Calendar, 
  Clock, 
  MapPin, 
  User, 
  FileText,
  Download,
  CheckCircle,
  AlertTriangle,
  Calculator
} from "lucide-react";
import Header from "@/components/Header";

const AgendamentoEntrega = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const selectedUnit = location.state?.selectedUnit;

  const [formData, setFormData] = useState({
    unidade: selectedUnit?.name || "",
    endereco: selectedUnit?.address || "",
    medicamento: "",
    quantidade: "",
    lote: "",
    dataEntrega: "",
    horario: "",
    responsavel: "",
    observacoes: "",
    prioridade: "normal"
  });

  const [showDocument, setShowDocument] = useState(false);
  const [documentId, setDocumentId] = useState("");

  const medicamentosComuns = [
    "Paracetamol 500mg",
    "Dipirona 500mg",
    "Ibuprofeno 600mg",
    "Amoxicilina 500mg",
    "Omeprazol 20mg",
    "Losartana 50mg",
    "Metformina 500mg",
    "Captopril 25mg",
    "Sinvastatina 20mg",
    "Enalapril 10mg"
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const generateDocument = () => {
    const docId = `AGD${Date.now().toString().slice(-6)}`;
    setDocumentId(docId);
    setShowDocument(true);
    
    toast({
      title: "Documento Gerado!",
      description: `Documento oficial de agendamento ${docId} foi criado com sucesso.`,
      duration: 5000,
    });
  };

  const handleSchedule = () => {
    if (!formData.unidade || !formData.medicamento || !formData.quantidade || !formData.dataEntrega) {
      toast({
        title: "Campos Obrigatórios",
        description: "Preencha todos os campos obrigatórios antes de agendar.",
        variant: "destructive",
      });
      return;
    }

    generateDocument();
  };

  const downloadDocument = () => {
    // Simular download do documento
    toast({
      title: "Download Iniciado",
      description: "O documento PDF está sendo baixado...",
    });
  };

  if (showDocument) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-secondary/5 to-background">
        <Header />
        
        <div className="p-6">
          <Button
            variant="ghost"
            onClick={() => setShowDocument(false)}
            className="flex items-center gap-2 hover:bg-accent/50 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao Formulário
          </Button>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-card to-card/80 border border-border/20 rounded-3xl shadow-2xl">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-green-500 rounded-3xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-3xl font-bold text-foreground mb-2">Documento Oficial Gerado</CardTitle>
                <Badge variant="outline" className="text-lg px-4 py-2">
                  ID: {documentId}
                </Badge>
              </CardHeader>
              
              <CardContent className="space-y-8">
                {/* Document Content */}
                <div className="bg-white p-8 rounded-2xl border-2 border-border/30 shadow-inner">
                  <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">PREFEITURA MUNICIPAL DE MARÍLIA</h1>
                    <h2 className="text-xl font-semibold text-gray-700 mb-1">Secretaria Municipal de Saúde</h2>
                    <h3 className="text-lg font-medium text-gray-600">DOCUMENTO DE AGENDAMENTO DE ENTREGA</h3>
                    <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">DADOS DA UNIDADE</h4>
                        <div className="space-y-1 text-sm text-gray-600">
                          <p><strong>Unidade:</strong> {formData.unidade}</p>
                          <p><strong>Endereço:</strong> {formData.endereco}</p>
                          <p><strong>Data de Agendamento:</strong> {new Date().toLocaleDateString('pt-BR')}</p>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">MEDICAMENTO</h4>
                        <div className="space-y-1 text-sm text-gray-600">
                          <p><strong>Nome:</strong> {formData.medicamento}</p>
                          <p><strong>Quantidade:</strong> {formData.quantidade} unidades</p>
                          <p><strong>Lote:</strong> {formData.lote || "A ser definido"}</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">AGENDAMENTO</h4>
                        <div className="space-y-1 text-sm text-gray-600">
                          <p><strong>Data de Entrega:</strong> {new Date(formData.dataEntrega).toLocaleDateString('pt-BR')}</p>
                          <p><strong>Horário:</strong> {formData.horario || "A definir"}</p>
                          <p><strong>Prioridade:</strong> {
                            formData.prioridade === 'alta' ? 'Alta' :
                            formData.prioridade === 'media' ? 'Média' : 'Normal'
                          }</p>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">RESPONSÁVEL</h4>
                        <div className="space-y-1 text-sm text-gray-600">
                          <p><strong>Nome:</strong> {formData.responsavel || "A ser definido"}</p>
                          <p><strong>Data de Geração:</strong> {new Date().toLocaleDateString('pt-BR')} às {new Date().toLocaleTimeString('pt-BR')}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {formData.observacoes && (
                    <div className="mb-8">
                      <h4 className="font-semibold text-gray-800 mb-2">OBSERVAÇÕES</h4>
                      <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">{formData.observacoes}</p>
                    </div>
                  )}

                  <div className="border-t-2 border-gray-200 pt-6">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="text-center">
                        <div className="border-t border-gray-400 pt-2 mt-12">
                          <p className="text-sm text-gray-600">Farmacêutico Responsável</p>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="border-t border-gray-400 pt-2 mt-12">
                          <p className="text-sm text-gray-600">Secretaria Municipal de Saúde</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center mt-8 text-xs text-gray-500">
                    <p>Este documento foi gerado automaticamente pelo Sistema CUIDA em {new Date().toLocaleString('pt-BR')}</p>
                    <p>Documento ID: {documentId} | Válido com assinatura digital</p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-4">
                  <Button
                    onClick={downloadDocument}
                    className="flex-1 bg-primary hover:bg-primary/90 py-4 text-lg font-semibold rounded-2xl shadow-lg transition-all duration-300 hover:scale-[1.02]"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Baixar Documento PDF
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => navigate("/funcionario/documentos")}
                    className="flex-1 border-2 border-primary/30 hover:bg-primary/5 py-4 text-lg font-semibold rounded-2xl transition-all duration-300"
                  >
                    <FileText className="w-5 h-5 mr-2" />
                    Ver Todos os Documentos
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/5 to-background">
      <Header />
      
      <div className="p-6">
        <Button
          variant="ghost"
          onClick={() => navigate("/funcionario/mapa")}
          className="flex items-center gap-2 hover:bg-accent/50 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar ao Mapa
        </Button>
      </div>

      <div className="px-6 pb-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold text-foreground mb-2">Agendamento de Entrega</h1>
            <p className="text-muted-foreground text-lg">Agende a entrega de medicamentos para as unidades de saúde</p>
          </div>

          <Card className="bg-gradient-to-br from-card to-card/80 border border-border/20 rounded-3xl shadow-2xl">
            <CardHeader className="text-center pb-6">
              <div className="w-16 h-16 bg-primary/20 rounded-3xl flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl font-bold text-foreground">Novo Agendamento</CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Unidade de Destino */}
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="unidade" className="flex items-center gap-2 font-semibold text-foreground mb-2">
                      <MapPin className="w-4 h-4" />
                      Unidade de Destino *
                    </Label>
                    <Input
                      id="unidade"
                      value={formData.unidade}
                      onChange={(e) => handleInputChange("unidade", e.target.value)}
                      placeholder="Nome da unidade de saúde"
                      className="rounded-xl"
                    />
                  </div>

                  <div>
                    <Label htmlFor="endereco" className="font-medium text-foreground mb-2 block">Endereço</Label>
                    <Input
                      id="endereco"
                      value={formData.endereco}
                      onChange={(e) => handleInputChange("endereco", e.target.value)}
                      placeholder="Endereço da unidade"
                      className="rounded-xl"
                    />
                  </div>

                  <div>
                    <Label htmlFor="medicamento" className="flex items-center gap-2 font-semibold text-foreground mb-2">
                      <Package className="w-4 h-4" />
                      Medicamento *
                    </Label>
                    <select
                      id="medicamento"
                      value={formData.medicamento}
                      onChange={(e) => handleInputChange("medicamento", e.target.value)}
                      className="w-full px-3 py-2 border border-border rounded-xl bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                    >
                      <option value="">Selecione um medicamento</option>
                      {medicamentosComuns.map((med) => (
                        <option key={med} value={med}>{med}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="quantidade" className="flex items-center gap-2 font-semibold text-foreground mb-2">
                        <Calculator className="w-4 h-4" />
                        Quantidade *
                      </Label>
                      <Input
                        id="quantidade"
                        type="number"
                        value={formData.quantidade}
                        onChange={(e) => handleInputChange("quantidade", e.target.value)}
                        placeholder="0"
                        className="rounded-xl"
                      />
                    </div>

                    <div>
                      <Label htmlFor="lote" className="font-medium text-foreground mb-2 block">Lote</Label>
                      <Input
                        id="lote"
                        value={formData.lote}
                        onChange={(e) => handleInputChange("lote", e.target.value)}
                        placeholder="Ex: L2025001"
                        className="rounded-xl"
                      />
                    </div>
                  </div>
                </div>

                {/* Detalhes do Agendamento */}
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="dataEntrega" className="flex items-center gap-2 font-semibold text-foreground mb-2">
                      <Calendar className="w-4 h-4" />
                      Data de Entrega *
                    </Label>
                    <Input
                      id="dataEntrega"
                      type="date"
                      value={formData.dataEntrega}
                      onChange={(e) => handleInputChange("dataEntrega", e.target.value)}
                      className="rounded-xl"
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>

                  <div>
                    <Label htmlFor="horario" className="flex items-center gap-2 font-medium text-foreground mb-2">
                      <Clock className="w-4 h-4" />
                      Horário Preferencial
                    </Label>
                    <Input
                      id="horario"
                      type="time"
                      value={formData.horario}
                      onChange={(e) => handleInputChange("horario", e.target.value)}
                      className="rounded-xl"
                    />
                  </div>

                  <div>
                    <Label htmlFor="responsavel" className="flex items-center gap-2 font-medium text-foreground mb-2">
                      <User className="w-4 h-4" />
                      Responsável pelo Recebimento
                    </Label>
                    <Input
                      id="responsavel"
                      value={formData.responsavel}
                      onChange={(e) => handleInputChange("responsavel", e.target.value)}
                      placeholder="Nome do farmacêutico responsável"
                      className="rounded-xl"
                    />
                  </div>

                  <div>
                    <Label htmlFor="prioridade" className="flex items-center gap-2 font-medium text-foreground mb-2">
                      <AlertTriangle className="w-4 h-4" />
                      Prioridade
                    </Label>
                    <select
                      id="prioridade"
                      value={formData.prioridade}
                      onChange={(e) => handleInputChange("prioridade", e.target.value)}
                      className="w-full px-3 py-2 border border-border rounded-xl bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                    >
                      <option value="normal">Normal</option>
                      <option value="media">Média</option>
                      <option value="alta">Alta</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <Label htmlFor="observacoes" className="font-medium text-foreground mb-2 block">Observações</Label>
                <Textarea
                  id="observacoes"
                  value={formData.observacoes}
                  onChange={(e) => handleInputChange("observacoes", e.target.value)}
                  placeholder="Informações adicionais sobre a entrega..."
                  className="rounded-xl min-h-[100px]"
                />
              </div>

              <div className="pt-6 border-t border-border/20">
                <div className="flex gap-4">
                  <Button
                    onClick={handleSchedule}
                    className="flex-1 bg-primary hover:bg-primary/90 py-4 text-lg font-semibold rounded-2xl shadow-lg transition-all duration-300 hover:scale-[1.02]"
                  >
                    <FileText className="w-5 h-5 mr-2" />
                    Gerar Documento Oficial
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => navigate("/funcionario/mapa")}
                    className="border-2 border-border/30 hover:bg-accent/50 py-4 px-8 text-lg font-semibold rounded-2xl transition-all duration-300"
                  >
                    Cancelar
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AgendamentoEntrega;