import { NavLink } from "react-router-dom";
import { Home, Hotel, Users2, LineChart, Settings, DiamondPlus } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import img from "@/assets/Logo.png";

export const Sidebar = () => {
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
            <TooltipTrigger asChild>
              <NavLink to="/" className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8" activeClassName="bg-accent text-accent-foreground">
                <Home className="h-5 w-5" />
                <span className="sr-only">Dashboard</span>
              </NavLink>
            </TooltipTrigger>
            <TooltipContent side="right">Dashboard</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <NavLink to="/dashboard/" className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8" activeClassName="bg-accent text-accent-foreground">
                <Hotel className="h-5 w-5" />
                <span className="sr-only">Imóvel</span>
              </NavLink>
            </TooltipTrigger>
            <TooltipContent side="right">Imóvel</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <NavLink to="/dashboard/registerImmobiler" className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8" activeClassName="bg-accent text-accent-foreground">
                <DiamondPlus className="h-5 w-5" />
                <span className="sr-only">Register</span>
              </NavLink>
            </TooltipTrigger>
            <TooltipContent side="right">Register</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <NavLink to="/clientes" className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8" activeClassName="bg-accent text-accent-foreground">
                <Users2 className="h-5 w-5" />
                <span className="sr-only">Clientes</span>
              </NavLink>
            </TooltipTrigger>
            <TooltipContent side="right">Clientes</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <NavLink to="/analise" className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8" activeClassName="bg-accent text-accent-foreground">
                <LineChart className="h-5 w-5" />
                <span className="sr-only">Análise</span>
              </NavLink>
            </TooltipTrigger>
            <TooltipContent side="right">Análise</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-4">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <NavLink to="/configuracoes" className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8" activeClassName="bg-accent text-accent-foreground">
                <Settings className="h-5 w-5" />
                <span className="sr-only">Configurações</span>
              </NavLink>
            </TooltipTrigger>
            <TooltipContent side="right">Configurações</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
    </aside>
  );
};
