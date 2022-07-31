import {
  Box,
  Button,
  Fab,
  Modal,
  styled,
  Tooltip,
  Typography,
} from "@mui/material";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import { useState } from "react";
import CartItem from "../CartItem";
import CartTotal from "../CartTotal";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const CloseButton = styled(Button)`
  background: transparent;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  opacity: 0.3;
  transition: 0.4s;
  color: #fff;
  &:hover {
    opacity: 1;
  }
`;

const FabModal = ({
  currentSale,
  cartTotal,
  setCartTotal,
  handleList,
  setCurrentSale,
  activeAlert,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Tooltip
        onClick={() => setOpen(true)}
        title="Carrinho"
        color="primary"
        sx={{ position: "fixed", bottom: 20, right: { xs: 30, md: 30 } }}
      >
        <Fab>
          <ShoppingCartRoundedIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={365}
          height={530}
          bgcolor="#FFF"
          borderRadius={5}
          p={2}
          position="relative"
        >
          <Box
            bgcolor="#27AE60"
            height={50}
            p={1}
            borderRadius={2}
            position="relative"
            boxShadow={3}
          >
            <Typography variant="h6" color="white">
              Carrinho de compras
            </Typography>
            <CloseButton onClick={() => setOpen(false)}>
              <CloseSharpIcon />
            </CloseButton>
          </Box>
          {currentSale.length === 0 ? (
            <Box
              bgcolor="#F5F5F5"
              boxShadow={3}
              borderRadius={2}
              sx={{
                height: "90%",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Typography variant="h4" fontWeight={700} fontSize={18}>
                Sua sacola está vazia
              </Typography>
              <Typography variant="caption">Adicione itens</Typography>
            </Box>
          ) : (
            <>
              <Box maxHeight={325} bgcolor="inherit" sx={{ overflowY: "auto" }}>
                {currentSale.map((elem) => (
                  <CartItem key={elem.id} elem={elem} handleList={handleList} />
                ))}
              </Box>
              <CartTotal
                setCurrentSale={setCurrentSale}
                setCartTotal={setCartTotal}
                cartTotal={cartTotal}
                activeAlert={activeAlert}
              />
            </>
          )}
        </Box>
      </StyledModal>
    </>
  );
};

export default FabModal;
