import Grid from '@mui/material/Grid';
import Product from '../Product';

function ProductList({ products, filtroOn, filteredProducts, addItemList} ) {
    function validate() {
        if(filtroOn === true){
            return filteredProducts
        } else {
            return products
        }
    }
    const array = validate();  
    return (
        <Grid container spacing={2} columns={24} justifyContent={{sx: 'center'}} sx={{padding: '2.5% 0', justifyContent: 'center'}} >
                {array.map((elem) => (
                    <Grid key={elem.id} item xs={24} sm={8} md={8} >
                        <Product addItemList={addItemList} elem={elem}/>
                    </Grid>
                ))}
        </Grid>
    )
}
export default ProductList