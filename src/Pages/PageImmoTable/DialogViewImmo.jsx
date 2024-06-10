import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Cross2Icon } from "@radix-ui/react-icons";
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from '@/components/ui/button';
import axios from "axios";

export const DialogViewImmo = (props) => {
  console.log(props)
  const [open, setOpen] = useState(props.openDialog);
  const dialogRef = useRef(null);

  const [nomeImovel, setNomeImovel] = useState('');
  const [statusImovel, setStatusImovel] = useState('');
  const [numero, setNumero] = useState('');
  const [cep, setCep] = useState('');
  const [selectBroker, setSelectBroker] = useState()

  useEffect(()=>{
    if(props.immobileSelect){
      setNomeImovel(props.immobileSelect.propertyname)
      setStatusImovel(props.immobileSelect.status)
      setNumero(props.immobileSelect.number)
      setCep(props.immobileSelect.cep)
      setSelectBroker(props.immobileSelect.broker)
    }
  },[props.immobileSelect])



  const handleClose = () => {
    props.handleCloseDialog(false);
  };

  useEffect(() => {
    setOpen(props.openDialog);
  }, [props]);

  const handleViewImmobiler = () => {
    const requestBody = {
      id: props.immobileSelect.idimovel,
      nameImmobiler: nomeImovel,
      status: statusImovel,
      number: numero,
      cep: cep,
      corretor: selectBroker
    };
  
    axios.post("http://localhost:3333/ViewImmobiler", requestBody)
      .then(() => {
        props.fetchImmobiles()
        handleClose()
      })
      .catch((error) => {
        console.error("Erro ao Viewar imóvel:", error);
      });
  }
  


  return (
    <div className="dialog-container">
      <Dialog open={open}>
        <DialogContent className="max-w-3xl" ref={dialogRef}>
          <DialogHeader>
            <DialogTitle>Imoveis</DialogTitle>
            <DialogDescription>
              <div className='grid grid-cols-4  gap-4 pt-4'>
                <div className='grid col-start-1 col-end-3 row-start-1 row-end-2'>
                  <Input placeholder="Nome do Imovel" value={nomeImovel} onChange={e => setNomeImovel(e.target.value)} />
                </div>
                <div className='grid col-start-1  col-end-3 row-start-2' >
                <Select className='' onValueChange={(value) =>
                    setStatusImovel(value)
                } value={statusImovel} >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="venda" onClick>venda</SelectItem>
                      <SelectItem value="analise">analise</SelectItem>
                      <SelectItem value="vendido">vendido</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Input placeholder="Numero" type="number" value={numero} onChange={e => setNumero(e.target.value)} />
                </div>
                <div>
                  <Input placeholder="CEP" type="number" value={cep} onChange={e => setCep(e.target.value)} />
                </div>
                <div>
                  <Select onValueChange={(value) =>
                    setSelectBroker(value)
                } value={selectBroker} >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Corretor" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Renan" onClick>Renan</SelectItem>
                      <SelectItem value="Jackson">Jackson</SelectItem>
                      <SelectItem value="João">João</SelectItem>
                      <SelectItem value="Tinin">Tinin</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </DialogDescription>
            <DialogClose
              as="button"
              className="absolute top-4 right-4 opacity-70 hover:opacity-100 focus:outline-none"
              onClick={handleClose}
            >
              <Cross2Icon className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </DialogClose>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={handleClose} variant="ghost">Cancelar</Button>
            <Button onClick={handleViewImmobiler}>Viewar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

DialogViewImmo.propTypes = {
  openDialog: PropTypes.bool.isRequired,
  handleCloseDialog: PropTypes.func.isRequired,
  fetchImmobiles: PropTypes.func.isRequired,
  immobileSelect: PropTypes.bool.isRequired,
};
