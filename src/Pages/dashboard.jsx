import * as React from "react"
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  CreditCard,
  File,
  Home,
  LineChart,
  ListFilter,
  MoreVertical,
  Package,
  Package2,
  PanelLeft,
  Search,
  Settings,
  ShoppingCart,
  Truck,
  Users2,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Sidebar } from "./components-pages/sidebar"
import { HeaderSidebar } from "./components-pages/header-sidebar"
import { FormRegisterImovel } from "./components-pages/Immobile/Form"
import { CalendarForm } from "./components-pages/Immobile/calendar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { SalesHighlight } from "./components-pages/Immobile/SalesHighlight"
import { ImmobilierRegister } from "./components-pages/Immobile/ImmobilierRegister"
import Imoveis from "./Imoveis"


export function Dashboard() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Sidebar />
      <HeaderSidebar />
      {/* <ImmobilierRegister/> */}
      <Imoveis/>
    </div>

  )
}
