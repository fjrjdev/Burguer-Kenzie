import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { ThemeButton } from '../../Global'
import { Box } from '@mui/system';


function Product({ elem, addItemList }){
    const {name, img, category, price} = elem;
    return (
        <Card sx={{ maxWidth: 275 }} variant="outlined" bgcolor='#F5F5F5'>
            <Box  backgroundColor='#F5F5F5'>
                <CardMedia 
                    style={{ width: '70%', margin: '0 auto'}}
                    component="img"
                    height="150px"
                    image={img}
                    alt={name}
                />
            </Box>
            <Box style={{ display: 'flex', flexDirection:'column', gap: '14px', padding: '5%' } }  >
                <Typography sx={{overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: 230}} variant="h6" component="div">
                    {name}
                </Typography>
                <Typography  variant="caption" component="span">
                    {category}
                </Typography>
                <Typography  variant="body2" component="span" color="primary">
                    R$ {price}
                </Typography>
                <ThemeButton onClick={() => addItemList(elem)}>Adicionar</ThemeButton>
            </Box>
        </Card>
    )
}

export default Product