import { useState } from "react";
import { register } from "../services/auth";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Users, ArrowLeft, Heart, Eye, EyeOff } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function CadastroClientes() {
  const [formData, setFormData] = useState({
    nome: "",
    idade: "",
    endereco: "",
    cpf: "",
    rg: "",
    email: "",
    telefone: "",
    carteirinha: "",
    tipoSanguineo: "",
    medicamentosRestritos: "",
    diagnosticos: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { id, value, checked, type } = e.target;

    if (id === "cpf" || id === "telefone") {
      value = value.replace(/\D/g, ""); // Remove tudo que não é número
    }

    if (type === "checkbox") {
      setFormData({ ...formData, [id]: checked });
    } else {
      setFormData({ ...formData, [id]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validação
    const requiredFields = ["nome", "idade", "endereco", "cpf", "rg", "email", "telefone", "password"];
    for (const field of requiredFields) {
      if (!formData[field as keyof typeof formData]) {
        alert("Preencha todos os campos obrigatórios.");
        return;
      }
    }

    if (formData.password !== formData.confirmPassword) {
      alert("As senhas não coincidem.");
      return;
    }

    if (!formData.acceptTerms) {
      alert("Você deve aceitar os termos de uso.");
      return;
    }

    try {
      await register(formData);
      navigate("/clientes/loginClientes");

      alert("Conta criada com sucesso!");
    } catch (err) {
      console.error(err);
      alert(err.response.data.message);
    } 
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cuida-green/10 to-cuida-green/20 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <button
          onClick={() => navigate("/clientes/loginClientes")}
          className="inline-flex items-center gap-2 text-cuida-green hover:text-cuida-green/80 mb-6"
        >
          <ArrowLeft className="w-4 h-4" /> Voltar ao login
        </button>

        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-14 h-14 bg-gradient-secondary rounded-2xl flex items-center justify-center shadow-lg">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <div className="text-center">
            <h1 className="text-xl font-bold text-foreground font-poppins">
              Portal do Cidadão
            </h1>
            <p className="text-sm text-muted-foreground font-medium">Marília - SP</p>
          </div>
        </div>

        <Card className="shadow-2xl border border-secondary/10 bg-card/95 backdrop-blur-sm">
          <CardHeader className="text-center pb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-3xl flex items-center justify-center mx-auto mb-6 border border-secondary/20 shadow-lg">
              <Users className="w-10 h-10 text-secondary" />
            </div>
            <CardTitle className="text-3xl font-bold text-foreground font-poppins">
              Cadastro do Cidadão
            </CardTitle>
            <CardDescription className="text-muted-foreground text-base mt-2">
              Preencha seus dados para acessar o portal de saúde
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Campos do formulário */}
                <div className="space-y-2">
                  <Label htmlFor="nome" className="text-sm font-medium text-foreground">Nome completo *</Label>
                  <Input id="nome" value={formData.nome} onChange={handleChange} placeholder="Seu nome completo" className="h-10" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="idade" className="text-sm font-medium text-foreground">Idade *</Label>
                  <Input id="idade" type="number" value={formData.idade} onChange={handleChange} placeholder="Ex: 35" className="h-10" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cpf" className="text-sm font-medium text-foreground">CPF *</Label>
                  <Input id="cpf" value={formData.cpf} onChange={handleChange} placeholder="000.000.000-00" className="h-10" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="rg" className="text-sm font-medium text-foreground">RG *</Label>
                  <Input id="rg" value={formData.rg} onChange={handleChange} placeholder="00.000.000-0" className="h-10" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-foreground">Email *</Label>
                  <Input id="email" type="email" value={formData.email} onChange={handleChange} placeholder="seu@email.com" className="h-10" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="telefone" className="text-sm font-medium text-foreground">Telefone *</Label>
                  <Input id="telefone" value={formData.telefone} onChange={handleChange} placeholder="(00) 00000-0000" className="h-10" required />
                </div>

                <div className="space-y-2 sm:col-span-2 lg:col-span-3">
                  <Label htmlFor="endereco" className="text-sm font-medium text-foreground">Endereço completo *</Label>
                  <Input id="endereco" value={formData.endereco} onChange={handleChange} placeholder="Rua, número, bairro, cidade" className="h-10" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="carteirinha" className="text-sm font-medium text-foreground">Carteirinha do SUS</Label>
                  <Input id="carteirinha" value={formData.carteirinha} onChange={handleChange} placeholder="Número da carteirinha" className="h-10" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tipoSanguineo" className="text-sm font-medium text-foreground">Tipo sanguíneo</Label>
                  <Input id="tipoSanguineo" value={formData.tipoSanguineo} onChange={handleChange} placeholder="Ex: A+, O-, B+" className="h-10" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="medicamentosRestritos" className="text-sm font-medium text-foreground">Medicamentos restritos</Label>
                  <Input id="medicamentosRestritos" value={formData.medicamentosRestritos} onChange={handleChange} placeholder="Medicamentos que não pode tomar" className="h-10" />
                </div>

                <div className="space-y-2 sm:col-span-2 lg:col-span-3">
                  <Label htmlFor="diagnosticos" className="text-sm font-medium text-foreground">Problemas de saúde ou diagnósticos</Label>
                  <Input id="diagnosticos" value={formData.diagnosticos} onChange={handleChange} placeholder="Informe problemas de saúde conhecidos" className="h-10" />
                </div>

                {/* Senha */}
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm font-medium text-foreground">Senha *</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Crie uma senha segura"
                      className="h-10 pr-10"
                      required
                    />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-sm font-medium text-foreground">Confirmar senha *</Label>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="Digite a senha novamente"
                      className="h-10 pr-10"
                      required
                    />
                    <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                      {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Checkbox */}
              <div className="flex items-start space-x-2 pt-4">
                <Checkbox id="acceptTerms" checked={formData.acceptTerms} onCheckedChange={(checked) => setFormData({ ...formData, acceptTerms: !!checked })} />
                <Label htmlFor="acceptTerms" className="text-sm text-muted-foreground leading-relaxed">
                  Aceito os{" "}
                  <Link to="/termos-de-uso" target="_blank" className="text-secondary hover:text-secondary/80 underline">termos de uso e política de privacidade</Link>{" "}
                  do Portal do Cidadão
                </Label>
              </div>

              <Button type="submit" className="w-full bg-gradient-secondary text-white hover:opacity-90 h-12 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 mt-6" disabled={loading}>
                {loading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Cadastrando...
                  </div>
                ) : (
                  "Criar Conta"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
