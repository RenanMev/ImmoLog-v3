import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const AlertSucess = () => {
  return (
    <div className="text-green-400">

    <Alert>
      <AlertTitle>Sucesso</AlertTitle>
      <AlertDescription>
        O usuário foi registrado com sucesso
      </AlertDescription>
    </Alert>
    </div>
  );
};

export default AlertSucess;
