import { Box } from "@mui/material"

function Cart(){
    return (
        <Box>
            <Box>
                <h3>Carrinho</h3>
            </Box>
            <Box>
                items
            </Box>
            <Box>
                <Box>
                    <h3>Total:</h3>
                    <span>Valor</span>
                </Box>
                <button> Remover Todos</button>
            </Box>
        </Box>
    )
}

export default Cart 