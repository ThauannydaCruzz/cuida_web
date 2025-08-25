import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Users, Eye, EyeOff, ArrowLeft, Heart } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
export default function LoginCli() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    cpf: "",
    password: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simula autenticação
    setTimeout(() => {
      setIsLoading(false);
      navigate("/portal-cidadao"); // Redireciona para o portal
    }, 1000);
  };
  return <div className="min-h-screen bg-gradient-to-br from-cuida-green/10 to-cuida-green/20 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Voltar ao início */}
        <button onClick={() => navigate("/")} className="inline-flex items-center gap-2 text-cuida-green hover:text-cuida-green/80 mb-6">
          <ArrowLeft className="w-4 h-4" /> Voltar ao início
        </button>

        {/* Header da logo */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-lg">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <div className="text-center">
            <h1 className="text-xl font-bold text-foreground font-poppins">Portal do Cidadão</h1>
            <p className="text-sm text-muted-foreground font-medium">Marília - SP</p>
          </div>
        </div>

        <Card className="shadow-2xl border border-primary/10 bg-card/95 backdrop-blur-sm">
          <CardHeader className="text-center pb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-6 border border-primary/20 shadow-lg">
              <Users className="w-10 h-10 text-primary" />
            </div>
            <CardTitle className="text-3xl font-bold text-foreground font-poppins">Portal do Cidadão</CardTitle>
            <CardDescription className="text-muted-foreground text-base mt-2">
              Entre com seu CPF e senha para acessar o portal
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="cpf" className="text-sm font-medium text-foreground">CPF</Label>
                <Input id="cpf" type="text" placeholder="000.000.000-00" value={formData.cpf} onChange={e => setFormData({
                ...formData,
                cpf: e.target.value
              })} className="h-11" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium text-foreground">Senha</Label>
                <div className="relative">
                  <Input id="password" type={showPassword ? "text" : "password"} placeholder="Digite sua senha" value={formData.password} onChange={e => setFormData({
                  ...formData,
                  password: e.target.value
                })} className="h-11 pr-10" required />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <Button type="submit" disabled={isLoading} className="w-full bg-gradient-primary text-white hover:opacity-90 h-12 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Entrando...
                  </div>
                ) : "Entrar no Portal"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Primeira vez aqui?{" "}
                <Link to="/clientes/cadastroClientes" className="text-cuida-green hover:text-cuida-green/80 font-medium">
                  Cadastre-se
                </Link>
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-xs text-muted-foreground text-center">
                Portal oficial da Secretaria de Saúde de Marília para acesso aos serviços de saúde
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>;
}