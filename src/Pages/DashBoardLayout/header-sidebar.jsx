import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTrigger } from "@/components/ui/sheet";
import { Label } from "@/components/ui/label"
import profileImg from '@/assets/profile-img.jpg'
import { ModeToggle } from "../DarkModeChange";
import { useState } from "react";
import {
  Package2,
  PanelLeft,
} from "lucide-react"
import { Link } from "react-router-dom";
import { Hotel,  DiamondPlus } from "lucide-react";

export const HeaderSidebar = () => {
  const [openSettings, setOpenSettings] = useState(false);
  const [formValueProfile, setFormValueProfile] = useState({
    name: "",
    email: ""
  })

  async function handleEditUserName(e) {
    const { name, value } = e.target;
    setFormValueProfile(prevState => ({
      ...prevState,
      [name]: value

    }));
  }

  async function handleEditEmail(e) {
    const { email, value } = e.target;
    setFormValueProfile(prevState => ({
      ...prevState,
      [email]: value
    }));
  }


  async function handleLogout() {
    localStorage.clear();
    window.location.href = "/";
  }

  return (
    <div className="md:pl-14 pt-2 sm:pl-0">
      <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
        <div className=" relative align-top">
        <Sheet >
          <SheetTrigger asChild>
            <Button size="icon" variant="outline" className="sm:hidden">
              <PanelLeft className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="sm:max-w-xs">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="#"
                className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
              >
                <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
                <span className="sr-only">Acme Inc</span>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-4 px-2.5 text-foreground"
              >
                <Hotel className="h-5 w-5" />
                Imovel
              </Link>
              <Link
                href="#"
                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
              >
                <DiamondPlus className="h-5 w-5" />
                Register
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        </div>
        <div className="flex flex-row-reverse w-full">
        <DropdownMenu >
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="overflow-hidden rounded-full"
            >
              <img
                src={profileImg}
                width={36}
                height={36}
                alt="Avatar"
                className="overflow-hidden rounded-full"
              />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <a onClick={() => {
                setOpenSettings(true)
              }}>Settings</a>
            </DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <button onClick={handleLogout}>
                Logout
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="">
          <ModeToggle className="md:hidden" />
        </div>
        </div>
      </header>

      <Sheet open={openSettings} onOpenChange={() => setOpenSettings(false)} >
        <SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input id="name" value={formValueProfile.name} onChange={handleEditUserName} className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">
                    email
                  </Label>
                  <Input id="username" value={formValueProfile.email} onChange={handleEditEmail} className="col-span-3" />
                </div>
              </div>
            </SheetHeader>
            <SheetFooter>
              <span className="w-full pt-8">
                <Button className="w-full">
                  Change
                </Button>
              </span>
            </SheetFooter>
          </SheetContent>
        </SheetTrigger>
      </Sheet>
    </div >
  );
};
