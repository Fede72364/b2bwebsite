// Mui components
import ModalMui from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// Hooks

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
  };


const Modal = ({open, handleClose}:{open:boolean, handleClose:Function}) => {

    return (
      <div>
        <ModalMui
          open={open}
          onClose={ (evt, reason) => handleClose(evt, reason) }
          aria-labelledby="Oportunidad para comprar el servicio"
          aria-describedby="Texto y Botón con redirección a whatsapp para comprar el servicio"
        >
          <Box sx={style}>
            <Typography id="modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </ModalMui>
      </div>
    );
}
export default Modal