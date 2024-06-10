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
import AlertDeleteImovel from '@/Pages/components-pages/alert/alertSucessDelte';
import { DialogEditImmo } from './DialogEditImmo';
import { DialogViewImmo } from './DialogViewImmo';



export default function ImmobileTable() {
  const [immobiles, setImmobiles] = useState([]);
  const [openAlertSuccess, setOpenAlertSuccess] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [openDialogView, setOpenDialogView] = useState(false);
  const [tableSelectEdit, setTableSelectEdit] = useState()
  const [tableSelectView, setTableSelectView] = useState()
  const fetchImmobiles = async () => {
    try {
      const response = await axios.post('http://localhost:3333/listImmobile');
      setImmobiles(response.data);
    } catch (error) {
      console.error('Erro ao obter lista de imóveis:', error);
    }
  };

  const handleCloseDialog = (newValue) => {
    setOpenDialog(newValue);
    setOpenDialogView(newValue)
  };


  useEffect(() => {
    fetchImmobiles();
  }, []);

  async function deleteImovel(immobileId) {
    await axios.post("http://localhost:3333/deleteImmobile", { id: immobileId.idimovel }).then(() => {
      setOpenAlertSuccess(true);
      setTimeout(() => {
        setOpenAlertSuccess(false)
      }, 20000);
      fetchImmobiles()
    })
  }

  const handleViewClick = (immobile) =>{
    setOpenDialogView(true);
    setTableSelectView(immobile)
  }

  const handleEditClick = (immobile) => {
    setOpenDialog(true);
    setTableSelectEdit(immobile)
  };


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
      <TableCell className="hidden md:table-cell">{immobile.cep}</TableCell>
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
            <DropdownMenuItem onClick={() => handleViewClick(immobile)}>
              Visualizar
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleEditClick(immobile)} >
              Editar
            </DropdownMenuItem>
            <DropdownMenuItem>
              <button onClick={() => deleteImovel(immobile)}>
                Deletar
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  ));

  return (
    <div className="md:px-20 lg:px-20 sm:px-20 pt-8">
      <Card >
        <CardHeader>
          <CardTitle>Imoveis </CardTitle>
          <CardDescription>
            Imoveis Registrados
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="hidden w-[100px] sm:table-cell">
                  <span className="sr-only">img</span>
                </TableHead>
                <TableHead>Nome do Imovel</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Valor (R$)</TableHead>
                <TableHead className="hidden md:table-cell">Corretor</TableHead>
                <TableHead className="hidden md:table-cell">Cidade</TableHead>
                <TableHead className="hidden md:table-cell">Cep</TableHead>
                <TableHead>
                  <span className="sr-only">Ação</span>
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
      {openAlertSuccess && <div className='pt-5'>
        <AlertDeleteImovel />
      </div>}
      <DialogEditImmo
        fetchImmobiles={fetchImmobiles}
        openDialog={openDialog}
        handleCloseDialog={handleCloseDialog}
        immobileSelect={tableSelectEdit} />
      <DialogViewImmo
       fetchImmobiles={fetchImmobiles}
       openDialog={openDialogView}
       handleCloseDialog={handleCloseDialog}
       immobileSelect={tableSelectView} />


    </div>
  );
}
