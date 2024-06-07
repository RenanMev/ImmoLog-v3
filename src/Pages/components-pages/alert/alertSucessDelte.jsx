import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const AlertDeleteImovel = () => {
  return (
    <div className="text-green-400">

    <Alert>
      <AlertTitle>Sucesso</AlertTitle>
      <AlertDescription>
       Imovel deletado com sucesso 
      </AlertDescription>
    </Alert>
    </div>
  );
};

export default AlertDeleteImovel;
