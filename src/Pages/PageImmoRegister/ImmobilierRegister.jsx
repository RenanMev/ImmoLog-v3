
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



export const ImmobilierRegister = () => {
  const [immobiles, setImmobiles] = useState([]);

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





  return (
    <div><div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
        <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            <Card
              className="sm:col-span-2" x-chunk="dashboard-05-chunk-0"
            >
              <CardHeader className="pb-3">
                <CardTitle>Register New Immobile</CardTitle>
                <CardDescription className="max-w-lg text-balance leading-relaxed">
                  Introducing Our Dynamic Orders Dashboard for Seamless
                  Management and Insightful Analysis.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <FormRegisterImovel />
              </CardFooter>
            </Card>
               <Card x-chunk="dashboard-05-chunk-1">
            <CardHeader className="pb-2">
              <CardDescription>This Week</CardDescription>
              <CardTitle className="text-4xl">$1,329</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">
                +25% from last week
              </div>
            </CardContent>
            <CardFooter>
              <Progress value={25} aria-label="25% increase" />
            </CardFooter>
          </Card>
            <Card x-chunk="dashboard-05-chunk-2">
              <CardHeader className="pb-2">
                <CardDescription>This Month</CardDescription>
                <CardTitle className="text-4xl">$5,329</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-muted-foreground">
                  +10% from last month
                </div>
              </CardContent>
              <CardFooter>
                <Progress value={12} aria-label="12% increase" />
              </CardFooter>
            </Card>
          </div>
          <Tabs defaultValue="week">
            <TabsContent value="week">
              <Card x-chunk="dashboard-05-chunk-3">
                <CardHeader className="px-7">
                  <CardTitle>Orders</CardTitle>
                  <CardDescription>
                    Recent orders from your store.
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