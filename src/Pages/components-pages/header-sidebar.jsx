import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTrigger } from "@/components/ui/sheet";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Label } from "@/components/ui/label"
import profileImg from '@/assets/profile-img.jpg'
import { ModeToggle } from "./DarkModeChange";
import { useState } from "react";


export const HeaderSidebar = () => {
  const [openSettings, setOpenSettings] = useState(false);
  const [formValueProfile, setFormValueProfile] = useState({
    name: "",
    email: ""
  })

  async function handleLogout(){
    localStorage.clear();
    window.location.href = "/";
  }

  return (
    <div className="md:pl-14 pt-2 sm:pl-0">
      <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
        <Breadcrumb className="hidden md:flex">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <a href="#">Dashboard</a>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Register Immobiler</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="relative ml-auto flex-1 md:grow-0">
        <ModeToggle/>
        </div>
        <DropdownMenu>
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
                <Input id="name" value={formValueProfile.name} className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Username
                </Label>
                <Input id="username" value={formValueProfile.name} className="col-span-3" />
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
