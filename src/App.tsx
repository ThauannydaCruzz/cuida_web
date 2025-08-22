import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PortalCidadao from "./pages/PortalCidadao";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import HomeFuncionario from "./pages/HomeFuncionario";
import ClientesCadastrados from "./pages/ClientesCadastrados";
import Documento from "./pages/Documento";
import EmployeeDashboard from "./pages/EmployeeDashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/portal-cidadao" element={<PortalCidadao />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/home-funcionario" element={<HomeFuncionario />} />
          <Route path="/clientes-cadastrados" element={<ClientesCadastrados />} />
          <Route path="/documento" element={<Documento />} />
          <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
