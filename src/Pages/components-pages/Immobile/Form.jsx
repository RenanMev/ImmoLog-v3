import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Separator } from "@/components/ui/separator"
import axios from "axios"; 

export const FormRegisterImovel = () => {
  const [imagemValue, setImagemValue] = useState(""); 

  const [formValues, setFormValues] = useState({
    name: '',
    cep: '', // CEP (Código de Endereçamento Postal)
    cidade: '', // Cidade
    uf: '', // Estado
    bairro: '', // Bairro
    rua: '', // Rua
    number: '', // Número
    picture: '', // Foto
    cost: '', // Custo
    iptu: '', // IPTU (Imposto Predial e Territorial Urbano)
    rent: '', // Aluguel
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const picture = e.target.files[0];
    setFormValues(prevState => ({
      ...prevState,
      picture,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formValues.picture) {
      setImagemValue(formValues.picture); 
    }
    try {
      await axios.post('http://localhost:3333/registerImmobile', {
        name: formValues.name ,
        cep: formValues.cep,
        rua: formValues.rua,
        bairro: formValues.bairro,
        cidade: formValues.cidade,
        uf: formValues.uf,
        balance: formValues.balance, 
        iptu: formValues.iptu,
        img: imagemValue, 
        number: formValues.number,
        rent: formValues.rent,
      });
      setFormValues({
        name: '',
        cep: '',
        cidade: '',
        uf: '',
        bairro: '',
        rua: '',
        number: '',
        picture: '',
        cost: '', 
        iptu: '',
        rent: '',
      });
    } catch (error) {
      console.error("Erro ao enviar dados para o servidor:", error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger className="bg-primary p-2 rounded-lg text-white font-bold px-6 ">Register</DialogTrigger>
      <Card>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="pb-4">Register new Immobile</DialogTitle>
            <DialogDescription>
              <form onSubmit={handleSubmit} className='gap-8 flex-col'>
                <div className='flex gap-4 pb-2'>
                  
                <Input
                    className="w-28 "
                    type="text"
                    placeholder="Name Immobile"
                    name="name"
                    value={formValues.name}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    className="w-28 "
                    type="text"
                    placeholder="CEP"
                    name="cep"
                    value={formValues.cep}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    className="row-start-2 row-end-4 "
                    type="text"
                    placeholder="Cidade"
                    name="cidade"
                    value={formValues.cidade}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='grid grid-flow-col grid-cols-4 gap-2'>
                  <Input
                    className='col-start-1 col-end-2'
                    type="text"
                    placeholder="UF"
                    name="uf"
                    required
                    value={formValues.uf}
                    onChange={handleChange}
                  />
                  <Input
                    className="row-start-1 row-end-2 col-start-2 col-end-5"
                    type="text"
                    placeholder="Bairro"
                    name="bairro"
                    required
                    value={formValues.bairro}
                    onChange={handleChange}
                  />
                  <Input
                    className="row-start-2 row-end-5 col-start-1 col-end-4"
                    type="text"
                    placeholder="Rua"
                    required
                    name="rua"
                    value={formValues.rua}
                    onChange={handleChange}
                  />
                  <Input
                    className="row-start-2 row-end-4 col-start-4 col-end-5"
                    type="text"
                    required
                    placeholder="Número"
                    name="number"
                    value={formValues.number}
                    onChange={handleChange}
                  />
                  <div className="col-start-1 col-end-4  max-w-sm items-center gap-1.5">
                    <Label htmlFor="picture">Picture</Label>
                    <Input
                      id="picture"
                      type="file"
                      onChange={handleFileChange}
                    />
                  </div>
                  <Separator />
                  <Input
                    className="row-start-4 row-end-5 col-start-1 col-end-3"
                    type="text"
                    placeholder="Cost"
                    name="cost"
                    value={formValues.cost}
                    onChange={handleChange}
                  />
                  <Input
                    className="row-start-4 row-end-5 col-start-3 col-end-5"
                    type="number"
                    placeholder="IPTU"
                    name="iptu"
                    value={formValues.iptu}
                    onChange={handleChange}
                  />
                  <Input
                    className="row-start-5 row-end-6 col-start-1 col-end-3"
                    placeholder="Rent"
                    name="rent"
                    value={formValues.rent}
                    onChange={handleChange}
                  />
                </div>
                <Button type="submit" className="row-start-7 w-full mt-6">Register</Button>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Card>
    </Dialog>
  );
};
