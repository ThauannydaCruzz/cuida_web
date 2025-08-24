import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Users, ArrowLeft, Heart, Eye, EyeOff } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

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
      value = value.replace(/\D/g, "");
    }

    if (type === "checkbox") {
      setFormData({ ...formData, [id]: checked });
    } else {
      setFormData({ ...formData, [id]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const requiredFields = ["nome", "idade", "endereco", "cpf", "rg", "email", "telefone", "password"];
    for (const field of requiredFields) {
      if (!formData[field as keyof typeof formData]) {
        alert("Preencha todos os campos obrigatórios.");
        return;
      }
    }

    if (formData.password !== formData.confirmPassword) {
      alert("As senhas não coincidem");
      return;
    }

    if (!formData.acceptTerms) {
      alert("Você deve aceitar os termos de uso.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Cadastro realizado com sucesso!");
      navigate("/clientes/loginClientes"); // Volta para login
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cuida-green/10 to-cuida-green/20 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {/* Voltar ao login */}
        <button
          onClick={() => navigate("/clientes/loginClientes")}
          className="inline-flex items-center gap-2 text-cuida-green hover:text-cuida-green/80 mb-6"
        >
          <ArrowLeft className="w-4 h-4" /> Voltar ao login
        </button>

        {/* Header da logo */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-12 h-12 bg-cuida-green rounded-lg flex items-center justify-center">
            <Heart className="w-7 h-7 text-white" />
          </div>
          <div className="text-left">
            <h1 className="text-lg font-bold text-foreground">Portal do Cidadão</h1>
            <p className="text-sm text-muted-foreground">Marília - SP</p>
          </div>
        </div>

        <Card className="shadow-xl border-0 bg-card">
          <CardHeader className="text-center pb-6">
            <div className="w-16 h-16 bg-cuida-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-cuida-green" />
            </div>
            <CardTitle className="text-2xl font-bold text-foreground">Cadastro do Cidadão</CardTitle>
            <CardDescription className="text-muted-foreground">
              Preencha seus dados para acessar o portal de saúde
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Campos do formulário */}
                <div className="space-y-2">
                  <Label htmlFor="nome" className="text-sm font-medium text-foreground">Nome completo *</Label>
                  <Input 
                    id="nome" 
                    value={formData.nome} 
                    onChange={handleChange} 
                    placeholder="Seu nome completo" 
                    className="h-10"
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="idade" className="text-sm font-medium text-foreground">Idade *</Label>
                  <Input 
                    id="idade" 
                    type="number"
                    value={formData.idade} 
                    onChange={handleChange} 
                    placeholder="Ex: 35" 
                    className="h-10"
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="cpf" className="text-sm font-medium text-foreground">CPF *</Label>
                  <Input 
                    id="cpf" 
                    value={formData.cpf} 
                    onChange={handleChange} 
                    placeholder="000.000.000-00" 
                    className="h-10"
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="rg" className="text-sm font-medium text-foreground">RG *</Label>
                  <Input 
                    id="rg" 
                    value={formData.rg} 
                    onChange={handleChange} 
                    placeholder="00.000.000-0" 
                    className="h-10"
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-foreground">Email *</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder="seu@email.com" 
                    className="h-10"
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="telefone" className="text-sm font-medium text-foreground">Telefone *</Label>
                  <Input 
                    id="telefone" 
                    value={formData.telefone} 
                    onChange={handleChange} 
                    placeholder="(00) 00000-0000" 
                    className="h-10"
                    required 
                  />
                </div>
                
                <div className="space-y-2 sm:col-span-2 lg:col-span-3">
                  <Label htmlFor="endereco" className="text-sm font-medium text-foreground">Endereço completo *</Label>
                  <Input 
                    id="endereco" 
                    value={formData.endereco} 
                    onChange={handleChange} 
                    placeholder="Rua, número, bairro, cidade" 
                    className="h-10"
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="carteirinha" className="text-sm font-medium text-foreground">Carteirinha do SUS</Label>
                  <Input 
                    id="carteirinha" 
                    value={formData.carteirinha} 
                    onChange={handleChange} 
                    placeholder="Número da carteirinha" 
                    className="h-10"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="tipoSanguineo" className="text-sm font-medium text-foreground">Tipo sanguíneo</Label>
                  <Input 
                    id="tipoSanguineo" 
                    value={formData.tipoSanguineo} 
                    onChange={handleChange} 
                    placeholder="Ex: A+, O-, B+" 
                    className="h-10"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="medicamentosRestritos" className="text-sm font-medium text-foreground">Medicamentos restritos</Label>
                  <Input 
                    id="medicamentosRestritos" 
                    value={formData.medicamentosRestritos} 
                    onChange={handleChange} 
                    placeholder="Medicamentos que não pode tomar" 
                    className="h-10"
                  />
                </div>
                
                <div className="space-y-2 sm:col-span-2 lg:col-span-3">
                  <Label htmlFor="diagnosticos" className="text-sm font-medium text-foreground">Problemas de saúde ou diagnósticos</Label>
                  <Input 
                    id="diagnosticos" 
                    value={formData.diagnosticos} 
                    onChange={handleChange} 
                    placeholder="Informe problemas de saúde conhecidos" 
                    className="h-10"
                  />
                </div>
                
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
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
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
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Checkbox de termos de uso */}
              <div className="flex items-start space-x-2 pt-4">
                <Checkbox
                  id="acceptTerms"
                  checked={formData.acceptTerms}
                  onCheckedChange={(checked) => setFormData({ ...formData, acceptTerms: !!checked })}
                />
                <Label htmlFor="acceptTerms" className="text-sm text-muted-foreground leading-relaxed">
                  Aceito os{" "}
                  <a href="/termos.pdf" target="_blank" className="text-cuida-green hover:text-cuida-green/80 underline">
                    termos de uso e política de privacidade
                  </a>{" "}
                  do Portal do Cidadão
                </Label>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-cuida-green hover:bg-cuida-green/90 text-white h-11 font-medium mt-6" 
                disabled={loading}
              >
                {loading ? "Cadastrando..." : "Criar Conta"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Já tem conta?{" "}
                <Link to="/clientes/loginClientes" className="text-cuida-green hover:text-cuida-green/80 font-medium">
                  Faça login
                </Link>
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-xs text-muted-foreground text-center">
                Seus dados serão utilizados apenas para prestação de serviços de saúde conforme nossa política de privacidade
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}