
import { useState, useEffect } from 'react';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
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
} from "@/components/ui/tabs"
import { FormRegisterImovel } from "@/Pages/PageImmoRegister/FormRegisterImmo"
// import { SalesHighlight } from "@/Pages/components-pages/PageImmoTable/SalesHighlight"
import axios from "axios";
import { Badge } from "@/components/ui/badge"
import { AlertEditGoals } from './AlertEditGoals';



export const ImmobilierRegister = () => {
  const [immobiles, setImmobiles] = useState([]);
  const [overallValue, setOverallValue] = useState()
  const [valueGoals, setValueGoals] = useState(0)
  const [porc, setPorc] = useState()
  const fetchImmobiles = async () => {
    try {
      const response = await axios.post('http://localhost:3333/listImmobile');
      setImmobiles(response.data);
      let totalRent = 0;
      for (let i = 0; i < response.data.length; i++) {
        if (response.data[i].status === 'vendido') {
          totalRent += parseInt(response.data[i].rent);
        }
      }
      setOverallValue(totalRent)
    } catch (error) {
      console.error('Erro ao obter lista de imóveis:', error);
    }
  };


  useEffect(()=>{
    let meta = localStorage.getItem("meta")
    if(meta){
      setValueGoals(meta)
    }
  },[])

  function percentageCalculation() {
    let meta = parseInt(valueGoals)
    let num2 = parseInt(overallValue)
    let porcentagemProgresso = (num2 / meta) * 100
    const porcentagemFinal = porcentagemProgresso > 100 ? 100 : porcentagemProgresso;
    setPorc(porcentagemFinal);
  }
  

  useEffect(() => {
    fetchImmobiles();
  }, []);
  useEffect(()=>{
    percentageCalculation()
  },[valueGoals,overallValue])

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
    </TableRow>
  ));


  function handleChangeGoals(value){
    setValueGoals(value)
  }


  return (
    <div><div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
        <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            <Card
              className="sm:col-span-2" x-chunk="dashboard-05-chunk-0"
            >
              <CardHeader className="pb-3">
                <CardTitle>Registre um novo imovel </CardTitle>
                <CardDescription className="max-w-lg text-balance leading-relaxed">
                  Para controle de imoveis, registre o imovel, com o endereço correto e valores!
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <FormRegisterImovel />
              </CardFooter>
            </Card>
            <Card x-chunk="dashboard-05-c  hunk-1">
              <CardHeader className="pb-2">
                <CardDescription>Vendido </CardDescription>
                <CardTitle className="text-4xl pt-2">R$ {overallValue}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-muted-foreground">

                </div>
              </CardContent>
              <CardFooter>
                <Progress value={porc} aria-label="25% increase" />
              </CardFooter>
            </Card>
            <Card x-chunk="dashboard-05-chunk-2">
              <CardHeader className="pb-2">
                <CardDescription>Meta Anual</CardDescription>
                <CardTitle className="text-3xl flex gap-4 pt-3">
                  <div>
                    R$ {valueGoals}
                  </div>
                  <div>
                    <AlertEditGoals ChangeGoals={handleChangeGoals} minValue={overallValue} />
                  </div>
                </CardTitle>
              </CardHeader>
            </Card>
          </div>
          <Tabs defaultValue="week">
            <TabsContent value="week">
              <Card x-chunk="dashboard-05-chunk-3">
                <CardHeader className="px-7">
                  <CardTitle>Imoveis Registrados</CardTitle>
                  <CardDescription>
                    Imoveis cadastrados por ultimo 
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
              </Card>

            </TabsContent>
          </Tabs>
        </div>
        {/* <SalesHighlight /> */}
      </main>
    </div></div>
  )
}
export default ImmobilierRegister