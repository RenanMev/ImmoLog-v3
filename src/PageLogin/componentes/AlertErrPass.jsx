import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const AlertErrPass = () => {
  return (
    <div className="text-red-800">

    <Alert>
      <AlertTitle>Erro</AlertTitle>
      <AlertDescription>
        Senha ou usuario incorreto
      </AlertDescription>
    </Alert>
    </div>
  );
};

export default AlertErrPass;
