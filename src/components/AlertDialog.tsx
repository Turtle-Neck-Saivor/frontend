import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { DialogProps } from '../types/Dialog';

const AlertDialog = (props: DialogProps) => {
  const handleClose = () => {
    props.setIsDialog(false);
  };
  return (
    <Dialog
      open={props.isDialog}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{props.title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {props.description}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>취소</Button>
        <Button onClick={props.handleAgree}>이동하기</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AlertDialog;
