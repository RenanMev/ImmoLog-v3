import { Link, useLocation } from "react-router-dom";
import { Hotel, DiamondPlus } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import img from "@/assets/Logo.png";
import { useEffect } from "react";


export const Sidebar = () => {
  const location = useLocation(); 
  let isActive = (path) => window.location.pathname === path;

  useEffect(() => {
    isActive = (path) => window.location.pathname === path; 
  }, [location.pathname && location]);
  

  

  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-4">
        <a
          href="#"
          className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
        >
          <img className="pt-[1px] pl-[0.5px]" style={{ filter: "hue-rotate(340deg) brightness(100%)" }} src={img} alt="" />
          <span className="sr-only">Acme Inc</span>
        </a>
        <TooltipProvider>
          <Tooltip>
            {/* <TooltipTrigger asChild>
              <Link to="/" className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8" >
                <Home className={`h-5 w-5 ${isActive('/') ? 'text-accent-foreground' : 'text-muted-foreground'}`} />
                <span className="sr-only">Dashboard</span>
              </Link>
            </TooltipTrigger> */}
            <TooltipContent side="right">Dashboard</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link to="/dashboard" className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8" >
                <Hotel className={`h-5 w-5 ${isActive('/dashboard') ? 'text-accent-foreground' : 'text-muted-foreground'}`} />
                <span className="sr-only">Imóvel</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Imóvel</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link to="/dashboard/registerImmobiler" className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8" >
                <DiamondPlus className={`h-5 w-5 ${isActive('/dashboard/registerImmobiler') ? 'text-accent-foreground' : 'text-muted-foreground'}`} />
                <span className="sr-only">Register</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Register</TooltipContent>
          </Tooltip>
          {/* <Tooltip>
            <TooltipTrigger asChild>
              <Link to="/clientes" className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8" >
                <Users2 className={`h-5 w-5 ${isActive('/clientes') ? 'text-accent-foreground' : 'text-muted-foreground'}`} />
                <span className="sr-only">Clientes</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Clientes</TooltipContent>
          </Tooltip> */}
          {/* <Tooltip>
            <TooltipTrigger asChild>
              <Link to="/analise" className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8" >
                <LineChart className={`h-5 w-5 ${isActive('/analise') ? 'text-accent-foreground' : 'text-muted-foreground'}`} />
                <span className="sr-only">Análise</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Análise</TooltipContent>
          </Tooltip> */}
        </TooltipProvider>
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-4">
        {/* <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link to="/configuracoes" className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8" >
                <Settings className={`h-5 w-5 ${isActive('/configuracoes') ? 'text-accent-foreground' : 'text-muted-foreground'}`} />
                <span className="sr-only">Configurações</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Configurações</TooltipContent>
          </Tooltip>
        </TooltipProvider> */}
      </nav>
    </aside>
  );
};
