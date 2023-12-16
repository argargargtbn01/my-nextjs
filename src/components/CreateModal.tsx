import { Box, Modal, Typography } from "@mui/material";

interface IProps {
  showModalCreate: boolean;
  setShowModalCreate: (value: boolean) => void;
}

const style = {
    position: 'absolute' as 'absolute',
    top: '20%',
    left: '50%',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    transform: "translate(-50%, -50%)",
  };
export default function CreateModal(props: IProps) {
  const { showModalCreate, setShowModalCreate } = props;
  return (
    <>
      <Modal
        open={showModalCreate}
        onClose={() =>setShowModalCreate(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{...style,width:400}}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
