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
import axios from "axios"; 

export const FormRegisterImovel = () => {
  const [imagemValue, setImagemValue ] = useState(""); 

  const [name, setName] = useState("");
  const [cep, setCep] = useState("");
  const [cidade, setCidade] = useState("");
  const [uf, setUf] = useState("");
  const [bairro, setBairro] = useState("");
  const [rua, setRua] = useState("");
  const [number, setNumber] = useState("");
  const [cost, setCost] = useState("");
  const [costCoins, setCostCoins] = useState("");
  const [iptu, setIptu] = useState("");
  const [rent, setRent] = useState("");


  const handleChangeName = (e) => {
    const { value } = e.target;
    setName(value);
  };
  
  const handleChangeCep = (e) => {
    let { value } = e.target;
    value = value.replace(/\D/g, '');
    value = value.slice(0, 8);
    if(value.length > 7){
      buscarCEP(value)
    }
    setCep(value);
  };
  
  const handleChangeCidade = (e) => {
    const { value } = e.target;
    setCidade(value);
  };
  
  const handleChangeUf = (e) => {
    let { value } = e.target;
    value = value.replace(/^(.{0,2}).*$/, '$1');
    setUf(value.toUpperCase());
};

  
  const handleChangeBairro = (e) => {
    const { value } = e.target;
    setBairro(value);
  };
  
  const handleChangeRua = (e) => {
    const { value } = e.target;
    setRua(value);
  };
  
  const handleChangeNumber = (e) => {
    let { value } = e.target;
    value = value.replace(/\D/g, '');
    setNumber(value);
  };
  
  const handleChangeCost = (e) => {
    let { value } = e.target;
    value = value.replace(/\D/g, '');
    setCostCoins("R$ " + value)
    setCost(value);
  };
  
  const handleChangeIptu = (e) => {
    const { value } = e.target;
    setIptu(value);
  };
  
  const handleChangeRent = (e) => {
    const { value } = e.target;
    setRent(value);
  };
  

  const handleFileChange = (e) => {
    const picture = e.target.files[0];
    setImagemValue(picture)
  };

  const handleSubmit = async (e) => {
    const broker = localStorage.getItem("user");
    e.preventDefault();
  
    try {
      await axios.post('http://localhost:3333/registerImmobile', {
        name: name ,
        cep: cep,
        rua: rua,
        bairro: bairro,
        cidade: cidade,
        uf: uf,
        balance: cost, 
        iptu: iptu,
        img: imagemValue, 
        number: number,
        rent: rent,
        broker: broker
      });
      setName('');
      setCep('');
      setRua('');
      setBairro('');
      setCidade('');
      setUf('');
      setNumber('');
      setCost('');
      setIptu('');
      setRent('');
      window.location.reload();
    } catch (error) {
      console.error("Erro ao enviar dados para o servidor:", error);
    }
  };
  
  const buscarCEP = (cep) => {
    axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      .then(res => {
        setBairro(res.data.bairro)
        setCidade(res.data.localidade)
        setUf(res.data.uf)
        setRua(res.data.logradouro)
      })
      .catch(error => {
        console.error('Erro ao buscar CEP:', error);
      });
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
                    value={name}
                    onChange={handleChangeName}
                    required
                  />
                  <Input
                    className="w-28 "
                    placeholder="CEP"
                    name="cep"
                    value={cep}
                    onChange={handleChangeCep}
                    required
                  />
                  <Input
                    className="row-start-2 row-end-4 "
                    type="text"
                    placeholder="Cidade"
                    name="cidade"
                    value={cidade}
                    onChange={handleChangeCidade}
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
                    value={uf}
                    onChange={handleChangeUf}
                  />
                  <Input
                    className="row-start-1 row-end-2 col-start-2 col-end-5"
                    type="text"
                    placeholder="Bairro"
                    name="bairro"
                    required
                    value={bairro}
                    onChange={handleChangeBairro}
                  />
                  <Input
                    className="row-start-2 row-end-5 col-start-1 col-end-4"
                    type="text"
                    placeholder="Rua"
                    required
                    name="rua"
                    value={rua}
                    onChange={handleChangeRua}
                  />
                  <Input
                    className="row-start-2 row-end-4 col-start-4 col-end-5"
                    type="number"
                    required
                    placeholder="Número"
                    name="number"
                    value={number}
                    onChange={handleChangeNumber}
                  />
                  <div className="col-start-1 col-end-4  max-w-sm items-center gap-1.5 text-white">
                    <Label htmlFor="picture" className="text-white">Picture</Label>
                    <Input
                      className="text-white"
                      id="picture"
                      type="file"
                      onChange={handleFileChange}
                    />
                  </div>

                  <Input
                    className="row-start-4 row-end-5 col-start-1 col-end-3"

                    placeholder="Cost"
                    name="cost"
                    value={costCoins}
                    onChange={handleChangeCost}
                  />
                  <Input
                    className="row-start-4 row-end-5 col-start-3 col-end-5"
                    type="number"
                    placeholder="IPTU"
                    name="iptu"
                    value={iptu}
                    onChange={handleChangeIptu}
                  />
                  <Input
                    className="row-start-5 row-end-6 col-start-1 col-end-3"
                    type="number"
                    placeholder="Rent"
                    name="rent"
                    value={rent}
                    onChange={handleChangeRent}
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
