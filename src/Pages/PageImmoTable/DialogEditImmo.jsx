import  { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Cross2Icon } from "@radix-ui/react-icons";

export const DialogEditImmo = (props) => {
  const [open, setOpen] = useState(props.openDialog);
  const dialogRef = useRef(null);

  const handleClose = () => {
    props.handleCloseDialog(false);
  };

  useEffect(() => {
    setOpen(props.openDialog);
  }, [props.openDialog]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target)) {
        handleClose();
      }
    };
    if (open) {
      document.addEventListener("click", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [open]);

  return (
    <div className="dialog-container">
      <Dialog open={open}>
        <DialogContent ref={dialogRef}>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
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
        </DialogContent>
      </Dialog>
    </div>
  );
};

DialogEditImmo.propTypes = {
  openDialog: PropTypes.bool.isRequired,
  handleCloseDialog: PropTypes.func.isRequired,
  immobileSelect:PropTypes.bool.isRequired,
};
