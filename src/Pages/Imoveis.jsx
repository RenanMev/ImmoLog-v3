import { useState, useEffect } from 'react';
import axios from "axios"; 
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
import AlertDeleteImovel from '@/PageLogin/componentes/alertSucessDelte';

export default function Imoveis() {
  const [immobiles, setImmobiles] = useState([]);
  const [openAlertSuccess, setOpenAlertSuccess] = useState(false);


  const fetchImmobiles = async () => {
    try {
      const response = await axios.post('http://localhost:3333/listImmobile');
      setImmobiles(response.data);
    } catch (error) {
      console.error('Erro ao obter lista de imóveis:', error);
    }
  };


  useEffect(() => {
    fetchImmobiles();
  }, []);

  async function deleteImovel(immobileId) {
      await axios.post("http://localhost:3333/deleteImmobile", { id: immobileId.idimovel }).then(()=>{
        setOpenAlertSuccess(true);
        fetchImmobiles()
      })
     
    
  }

  const tableList = immobiles.map((immobile, index) => (
    <TableRow key={index}>
      <TableCell className="hidden sm:table-cell">
        {immobile.image && <img
          alt="Product img"
          className="aspect-square rounded-md object-cover"
          height="64"
          src={immobile.image}
          width="64"
        />}
      </TableCell>
      <TableCell className="font-medium">{immobile.propertyname}</TableCell>
      <TableCell>
        <Badge variant="outline">{immobile.status}</Badge>
      </TableCell>
      <TableCell>R$ {immobile.rent.replace('.', ',')}</TableCell>
      <TableCell className="hidden md:table-cell">{immobile.broker}</TableCell>
      <TableCell className="hidden md:table-cell">{immobile.city}</TableCell>
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
            <DropdownMenuItem>
              <button onClick={() => deleteImovel(immobile)}>
                Delete
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  ));

  return (
    <div className="px-20 pt-8">
      <Card>
        <CardHeader>
          <CardTitle>Imóveis</CardTitle>
          <CardDescription>
            Imóveis registrados
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="hidden w-[100px] sm:table-cell">
                  <span className="sr-only">img</span>
                </TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Price</TableHead>
                <TableHead className="hidden md:table-cell">Broker</TableHead>
                <TableHead className="hidden md:table-cell">City</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tableList}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter>
          <div className="text-xs text-muted-foreground">
            Showing <strong>{immobiles.length}</strong> of <strong>{immobiles.length}</strong> products
          </div>
        </CardFooter>
      </Card>
      {openAlertSuccess && <AlertDeleteImovel/>}
    </div>
  );
}
