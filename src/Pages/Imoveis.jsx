import { MoreHorizontal } from "lucide-react"

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
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function Imoveis() {
  return (
    <div className="px-20 pt-8">
      <Card>
        <CardHeader>
          <CardTitle>Products</CardTitle>
          <CardDescription>
            Manage your products and view their sales performance.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="hidden w-[100px] sm:table-cell">
                  <span className="sr-only">img</span>
                </TableHead>
                <TableHead>Bropropertiesker</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Price</TableHead>
                <TableHead className="hidden md:table-cell">
                  Broker
                </TableHead>
                <TableHead className="hidden md:table-cell">Created at</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
            <TableRow>
                <TableCell className="hidden sm:table-cell">
                  <img
                    alt="Product img"
                    className="aspect-square rounded-md object-cover"
                    height="64"
                    src="https://imgs.search.brave.com/dHOp1jmrzDUg9sIOXupIwyfIFwOuzArOLoXZ9CdUsqM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/ZW1icmFjb24uY29t/LmJyL19uZXh0L2lt/YWdlP3VybD1odHRw/czovL2VtYnJhLWFz/c2V0cy5ueWMzLmRp/Z2l0YWxvY2VhbnNw/YWNlcy5jb20vcHVi/bGljL2Jsb2cvNUJ6/aGNZZWlIeFBYR0d3/SzBZVnFwMnJ0dW9J/WlZuLW1ldGFWbUZ1/ZEdGblpXNXpJR1Vn/WkdWemRtRnVkR0Zu/Wlc1eklHUmxJRzF2/Y21GeUlHVnRJSFZ0/SUhCeXc2bGthVzh1/YW5Cbi0uanBnJnc9/Mzg0MCZxPTc1"
                    width="64"
                  />
                </TableCell>
                <TableCell className="font-medium">
                      Imovel Rio Branco, Estrela Sul
                </TableCell>
                <TableCell>
                  <Badge variant="outline">Draft</Badge>
                </TableCell>
                <TableCell>$499.99</TableCell>
                <TableCell className="hidden md:table-cell">Jackson Eduardo</TableCell>
                <TableCell className="hidden md:table-cell">
                  2023-07-12 10:42 AM
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button aria-haspopup="true" size="icon" variant="ghost">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Toggle menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter>
          <div className="text-xs text-muted-foreground">
            Showing <strong>1-10</strong> of <strong>32</strong> products
          </div>
        </CardFooter>
      </Card>
    </div>

  )
}
