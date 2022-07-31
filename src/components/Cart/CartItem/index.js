import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { Button } from '@mui/material';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

function CartItem({elem, handleList}){
    const { name, category, img } = elem;
    return (
        <Paper
            sx={{
            p: 1,
            margin: '1.5% auto',
            maxWidth: 320,
            flexGrow: 1,
            boxShadow: 0,
            backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
        >
            <Grid container spacing={2} >
            <Grid item>
                <ButtonBase sx={{ width: 70, height: 70 }}>
                <Img alt={name} src={img}/>
                </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1" component="div">
                            {name}
                            </Typography>
                            <Typography variant="caption" gutterBottom>
                                {category}
                            </Typography>
                        </Grid>
                </Grid>
                <Grid item>
                    <Button onClick={() => {handleList(elem)}}>Remover</Button>
                </Grid>
            </Grid>
            </Grid>
        </Paper>
    )
}

export default CartItem