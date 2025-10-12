import { useState } from "react";
import { Button } from "@/components/ui/button";
import HealthMap from "@/components/HealthMap";
import { Heart, LogOut, Map, Activity } from "lucide-react";
import { Line } from "recharts";
import { useNavigate, Link } from "react-router-dom";
import { logout } from "./../services/auth";

const PortalCidadao = () => {
  const [activeView, setActiveView] = useState<"map" | "info">("map");

  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/");
  };

  if (activeView === "info") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cuida-green/5 to-cuida-green/10">
        {/* Header */}
        <header className="bg-card shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-foreground">
                    Portal do Cidadão
                  </h1>
                  <p className="text-sm text-muted-foreground">Marília - SP</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Button
                  onClick={() => setActiveView("map")}
                  className="bg-gradient-primary hover:opacity-90 gap-2"
                >
                  <Map className="w-4 h-4" />
                  Mapa de Unidades
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <LogOut className="w-4 h-4" /> Sair
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Bem-vindo ao Portal do Cidadão
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Aqui você pode encontrar informações sobre unidades de saúde,
              consultar disponibilidade de medicamentos e muito mais.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-xl p-6 shadow-lg border border-border/50">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Localize Unidades de Saúde
              </h3>
              <p className="text-muted-foreground mb-4">
                Use nosso mapa interativo para encontrar a unidade de saúde mais
                próxima de você.
              </p>
              <Button
                onClick={() => setActiveView("map")}
                className="bg-gradient-primary hover:opacity-90"
              >
                Ver Mapa
              </Button>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-lg border border-border/50">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Consulte Medicamentos
              </h3>
              <p className="text-muted-foreground mb-4">
                Verifique a disponibilidade de medicamentos em tempo real nas
                unidades de saúde.
              </p>
              <Button onClick={() => setActiveView("map")} variant="secondary">
                Buscar Medicamento
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card shadow-sm border-b z-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">
                  Portal do Cidadão
                </h1>
                <p className="text-sm text-muted-foreground">Marília - SP</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                onClick={() => setActiveView("info")}
                className="gap-2"
              >
                <Activity className="w-4 h-4" />
                Informações
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="gap-2"
                onClick={handleLogout}
              >
                <LogOut className="w-4 h-4" />
                Sair
              </Button>
            </div>
          </div>
        </div>
      </header>
      <HealthMap />
    </div>
  );
};

export default PortalCidadao;
