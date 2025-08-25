import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { UserCheck, Eye, EyeOff, ArrowLeft, Heart } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const userExists = users.find((u: any) => u.email === email && u.password === password);

    setTimeout(() => {
      setIsLoading(false);
      if (userExists) {
        localStorage.setItem("loggedInUser", JSON.stringify(userExists));
        navigate("/home-funcionario");
      } else {
        alert("Usuário não encontrado ou senha incorreta!");
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cuida-green/10 to-cuida-green/20 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Voltar ao início */}
        <button 
          onClick={() => navigate("/")} 
          className="inline-flex items-center gap-2 text-cuida-green hover:text-cuida-green/80 mb-6"
        >
          <ArrowLeft className="w-4 h-4" /> Voltar ao início
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

        <Card className="shadow-2xl border border-primary/10 bg-card/95 backdrop-blur-sm">
          <CardHeader className="text-center pb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-6 border border-primary/20 shadow-lg">
              <UserCheck className="w-10 h-10 text-primary" />
            </div>
            <CardTitle className="text-3xl font-bold text-foreground font-poppins">Acesso de Funcionário</CardTitle>
            <CardDescription className="text-muted-foreground text-base mt-2">
              Entre com suas credenciais para acessar o sistema interno
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-foreground">Email institucional</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="funcionario@saude.marilia.sp.gov.br"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-11"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium text-foreground">Senha</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Digite sua senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-11 pr-10"
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

              <Button
                type="submit"
                className="w-full bg-gradient-primary text-white hover:opacity-90 h-12 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Entrando...
                  </div>
                ) : "Entrar no Sistema"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Não tem acesso?{" "}
                <button onClick={() => navigate("/cadastro")} className="text-cuida-green hover:text-cuida-green/80 font-medium">
                  Solicitar cadastro
                </button>
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-xs text-muted-foreground text-center">
                Sistema restrito a funcionários autorizados da Secretaria de Saúde de Marília
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;