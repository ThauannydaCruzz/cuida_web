import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { UserPlus, Eye, EyeOff, ArrowLeft, Heart } from "lucide-react";

const Cadastro = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    employeeId: "",
    department: "",
    position: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("As senhas não coincidem");
      return;
    }

    setIsLoading(true);

    // Simular cadastro e salvar no localStorage
    setTimeout(() => {
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      users.push(formData);
      localStorage.setItem("users", JSON.stringify(users));
      setIsLoading(false);
      alert("Cadastro realizado! Aguarde aprovação do administrador.");
      navigate("/login");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cuida-green/10 to-cuida-green/20 flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        {/* Voltar ao login */}
        <button
          onClick={() => navigate("/login")}
          className="inline-flex items-center gap-2 text-cuida-green hover:text-cuida-green/80 mb-6"
        >
          <ArrowLeft className="w-4 h-4" /> Voltar ao login
        </button>

        {/* Header da logo */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-lg">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <div className="text-center">
            <h1 className="text-xl font-bold text-foreground font-poppins">Secretaria de Saúde</h1>
            <p className="text-sm text-muted-foreground font-medium">Marília - SP</p>
          </div>
        </div>

        {/* Card de cadastro */}
        <Card className="shadow-2xl border border-primary/10 bg-card/95 backdrop-blur-sm">
          <CardHeader className="text-center pb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-6 border border-primary/20 shadow-lg">
              <UserPlus className="w-10 h-10 text-primary" />
            </div>
            <CardTitle className="text-3xl font-bold text-foreground font-poppins">Cadastro de Funcionário</CardTitle>
            <CardDescription className="text-muted-foreground text-base mt-2">
              Solicite acesso ao sistema interno da Secretaria de Saúde
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-sm font-medium text-foreground">Nome completo</Label>
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="Digite seu nome completo"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    required
                    className="h-11"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="employeeId" className="text-sm font-medium text-foreground">Matrícula funcional</Label>
                  <Input
                    id="employeeId"
                    type="text"
                    placeholder="Digite sua matrícula"
                    value={formData.employeeId}
                    onChange={(e) => setFormData({ ...formData, employeeId: e.target.value })}
                    required
                    className="h-11"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-foreground">Email institucional</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="funcionario@saude.marilia.sp.gov.br"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="h-11"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="department" className="text-sm font-medium text-foreground">Departamento</Label>
                  <Input
                    id="department"
                    type="text"
                    placeholder="Ex: Enfermagem, Farmácia..."
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    required
                    className="h-11"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="position" className="text-sm font-medium text-foreground">Cargo/Função</Label>
                  <Input
                    id="position"
                    type="text"
                    placeholder="Ex: Enfermeiro, Médico..."
                    value={formData.position}
                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                    required
                    className="h-11"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm font-medium text-foreground">Senha</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Crie uma senha segura"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      required
                      className="h-11 pr-10"
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
                  <Label htmlFor="confirmPassword" className="text-sm font-medium text-foreground">Confirmar senha</Label>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Digite a senha novamente"
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                      required
                      className="h-11 pr-10"
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

              <Button
                type="submit"
                className="w-full bg-gradient-primary text-white hover:opacity-90 h-12 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Enviando solicitação...
                  </div>
                ) : "Solicitar Cadastro"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Já possui conta?{" "}
                <button onClick={() => navigate("/login")} className="text-cuida-green hover:text-cuida-green/80 font-medium">
                  Voltar ao login
                </button>
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-xs text-muted-foreground text-center">
                Seu cadastro será analisado pelo administrador do sistema antes da aprovação
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Cadastro;