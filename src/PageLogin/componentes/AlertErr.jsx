import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const AlertErr = () => {
  return (
    <Alert>
      <AlertTitle className="text-red-800">Erro</AlertTitle>
      <AlertDescription >
          O email ja foi registrado, tente outro
      </AlertDescription>
    </Alert>
  );
};

export default AlertErr;
