import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ContentPaste from '@mui/icons-material/ContentPaste';
import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/base/ModalUnstyled';
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

import axios from 'axios'

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  width: 400,
  bgcolor: 'white',
  border: '2px solid #000',
  p: 2,
  px: 4,
  pb: 3,
};

export default function SideBar() {

  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const [data, setData] = useState([])

  const [open1, setOpen1] = React.useState(false);
  const handleClose1 = () => setOpen1(false);

  const [showLogin, setLogin] = useState(true)

  function ModalUnstyledDemo() {
    return (
      <div>
        <StyledModal
          aria-labelledby="unstyled-modal-title"
          aria-describedby="unstyled-modal-description"
          open={open}
          onClose={handleClose}
          BackdropComponent={Backdrop}
        >
          <>
            {
              data.map((d) => (
                <Box sx={style}>
                  <h2 id="unstyled-modal-title">{d.user}</h2>
                  <p id="unstyled-modal-description">Product Name: {'Name'}</p>
                  <p id="unstyled-modal-description">Amount: {d.amount}</p>
                  <p id="unstyled-modal-description">Status: {d.status}</p>
                </Box>
              ))
            }
          </>
        </StyledModal>
      </div>
    );
  }

  const test = () => {
    setOpen1(false)
    setLogin(false)
  }

  function ModalUnstyledDemo2() {
    return (
      <div>
        <StyledModal
          aria-labelledby="unstyled-modal-title"
          aria-describedby="unstyled-modal-description"
          open={open1}
          onClose={handleClose1}
          BackdropComponent={Backdrop}
        >
          <div style={{ margin: 20 }}>
            <Paper style={{ padding: 100 }}>
              <h2>Login</h2>
              <div margin={{ margin: 20 }}>
                <TextField
                  label={"Email"} //optional
                />
              </div>
              <div margin={{ margin: 20 }}>

                <TextField
                  label={"Password"} //optional
                  type='password'
                />
              </div>
              <div margin={{ margin: 20 }}>
                <Button onClick={() => { test() }}>Submit</Button>
              </div>
            </Paper>
          </div>

        </StyledModal>
      </div>
    );
  }

  async function fetchOrders() {
    try {

      let response = await axios.get('http://localhost:5000/user/order/all')

      if (response.data.message == "success") {
        setData(response.data.data)
        setOpen(true)
      }

    } catch (err) {
      alert('Error!')
    }
  }

  return (
    <Paper sx={{ width: 320, maxWidth: '100%' }}>
      <ModalUnstyledDemo />
      <ModalUnstyledDemo2 />
      <MenuList>
        <MenuItem>
          <ListItemIcon>
            <ContentPaste fontSize="small" />
          </ListItemIcon>
          <ListItemText onClick={fetchOrders}>My Orders</ListItemText>
        </MenuItem>
        {
          showLogin ? (
            <MenuItem>
              <ListItemIcon>
                <ContentPaste fontSize="small" />
              </ListItemIcon>
              <ListItemText onClick={() => setOpen1(true)} >Login</ListItemText>
            </MenuItem>
          ) : (null)
        }
      </MenuList>
    </Paper>
  );
}
