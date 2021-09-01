import React from 'react'
import Grid from '@material-ui/core/Grid'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import { FormHelperText } from '@material-ui/core'

// components
import AppBarCustom from '../../Components/AppBarCustom'

function AddProduct() {
    return (
        <div>
            <AppBarCustom text={'Add Product'} />
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    Image Here
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl>
                        <InputLabel htmlFor="my-input">Name</InputLabel>
                        <Input id="my-input" aria-describedby="my-helper-text" style={{width: 500}}/>
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="my-input">Price</InputLabel>
                        <Input id="my-input" aria-describedby="my-helper-text" style={{width: 500}}/>
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="my-input">Quantity</InputLabel>
                        <Input id="my-input" aria-describedby="my-helper-text" style={{width: 500}}/>
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="my-input"></InputLabel>
                        <Input id="my-input" aria-describedby="my-helper-text" style={{width: 500}}/>
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="my-input">Name</InputLabel>
                        <Input id="my-input" aria-describedby="my-helper-text" style={{width: 500}}/>
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="my-input">Name</InputLabel>
                        <Input id="my-input" aria-describedby="my-helper-text" style={{width: 500}}/>
                    </FormControl>
                </Grid>
            </Grid>
        </div>
    )
}

export default AddProduct
