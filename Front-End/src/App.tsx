import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PortalCidadao from "./pages/PortalCidadao";
import NotFound from "./pages/NotFound";
import LoginCli from "./pages/LoginCli";
import CadastroClientes from "./pages/CadastroClientes";
import FuncionarioMapa from "./pages/FuncionarioMapa";
import TermosDeUso from "./pages/TermosDeUso";
import PrivateRoute from "./components/PrivateRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route
            path="/portal-cidadao"
            element={
              <PrivateRoute>
                <PortalCidadao />
              </PrivateRoute>
            }
          />
          <Route
            path="/mapa"
            element={
              <PrivateRoute>
                <FuncionarioMapa />
              </PrivateRoute>
            }
          />
          <Route path="/clientes/loginClientes" element={<LoginCli />} />
          <Route
            path="/clientes/cadastroClientes"
            element={<CadastroClientes />}
          />
          <Route path="/termos-de-uso" element={<TermosDeUso />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
