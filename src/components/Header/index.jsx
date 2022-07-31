import Grid from '@mui/material/Grid';
import { ThemeInput, ThemeButton, FlexBox, FlexBoxReverse } from '../../Global';
import logo from '../../img/logo.svg'


function Header({showFilteredItems}){
    return (
        <Grid container spacing={0} columns={24} sx={{borderBottom: '1px solid #F5F5F5'}}>
            <Grid item xs={24} sm={24} md={12} >
                <FlexBox>
                    <img src={logo} alt='logo'/> 
                </FlexBox>
            </Grid>
            <Grid item xs={24} sm={24} md={12}>
                <FlexBoxReverse>
                    <ThemeInput>
                        <input placeholder="Digitar Pesquisa" onChange={(event) => showFilteredItems(event)} type='search'></input>
                        <ThemeButton>Pesquisar</ThemeButton>
                    </ThemeInput>
                </FlexBoxReverse>
            </Grid>
        </Grid>
    )
}

export default Header;