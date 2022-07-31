import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
function CartTotal({ cartTotal, setCartTotal, setCurrentSale, activeAlert }) {
  function removeTodos() {
    setCurrentSale([]);
    setCartTotal(0);
    activeAlert({
      type: "warning",
      text: "Todos os items foram removidos do carrinho !",
      duration: 3500,
    });
  }
  return (
    <Box
      bgcolor="#F5F5F5"
      position="absolute"
      p={1}
      bottom={30}
      width="90%"
      boxShadow={1}
      borderRadius={1}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        p={1}
      >
        <Typography
          variant="body1"
          color="#333333"
          fontWeight="600"
          fontSize="14px"
        >
          Total
        </Typography>
        <Typography
          variant="body1"
          color="#828282"
          fontWeight="600"
          fontSize="14px"
        >
          R$ {cartTotal},00
        </Typography>
      </Box>
      <Button
        variant="contained"
        onClick={() => removeTodos()}
        sx={{ width: "100%" }}
        startIcon={<DeleteIcon />}
      >
        Remover Todos
      </Button>
    </Box>
  );
}

export default CartTotal;
