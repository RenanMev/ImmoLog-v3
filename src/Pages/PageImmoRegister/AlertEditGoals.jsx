import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Pencil } from "lucide-react";
import { Input } from "@/components/ui/input";
import {  useState } from "react";
import PropTypes from 'prop-types';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { OctagonAlert } from 'lucide-react';


export const AlertEditGoals = (props) => {
  const [valueGoalsCoins, setValueGoalsCoins] = useState();
  const [valueGoals, setValueGoals] = useState();
  const [alert, setAlert] = useState(false)

  function handleEditValue(e) {
    const newValue = e.target.value;
    let valueGoals = newValue.replace(/\D/g, '')
    setValueGoals(valueGoals)
    setValueGoalsCoins(`R$ ${newValue.replace(/\D/g, '')}`);
    if (props.minValue > valueGoals) {
      setAlert(true)
    } else{
      setAlert(false)
    }

    localStorage.setItem("meta", valueGoals )
  }
  function handleConfirm() {
    props.ChangeGoals(valueGoals)
  }

  const handleAlert = () => {
    return (
      <Alert>
        <OctagonAlert className="h-4 w-4" />
        <AlertTitle className="text-red-500">Atenção!</AlertTitle>
        <AlertDescription >
          Você esta colocando um valor maior que o valor vendido no momoento*
        </AlertDescription>
      </Alert>
    )
  }


  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Pencil className="h-4 w-4" />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Qual será a nova meta?</AlertDialogTitle>
          <AlertDialogDescription>
            <Input className="text-white"
              placeholder={"R$ 40000*"}
              value={valueGoalsCoins}
              onChange={handleEditValue}
            />
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter >
          <div className="w-full flex-col">
            <div>
              <AlertDialogCancel>Cancelar</AlertDialogCancel>
              <AlertDialogAction onClick={handleConfirm}>Continuar</AlertDialogAction>
            </div>
            <div className="flex pt-4">
              {alert ? handleAlert() : null}
            </div>
          </div>


        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

AlertEditGoals.propTypes = {
  ChangeGoals: PropTypes.func.isRequired,
  minValue: PropTypes.number.isRequired,
};
