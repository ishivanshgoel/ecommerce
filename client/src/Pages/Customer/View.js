import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'


function ViewProduct() {

    const [image, setImage] = useState("")
    const [imageUrl, setImageUrl] = useState(null);
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [quantity, setQuantity] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")

    useEffect(() => {
        if (image) {
            setImageUrl(URL.createObjectURL(image));
        }
    }, [image]);

    return (
        <div style={{marginTop: 100}}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <Box mt={2} textAlign="center">
                        <img src="https://assets.ajio.com/medias/sys_master/root/h5a/h59/13018715881502/-1117Wx1400H-460342492-blue-MODEL.jpg" alt={'preview-dummy'} height="400px" style={{border: "2px solid black"}} />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl style={{margin: 10}}>
                        <InputLabel htmlFor="my-input">Name</InputLabel>
                        <Input id="my-input" aria-describedby="my-helper-text" style={{ width: 500 }} onChange={(event) => setName(event.target.value)} />
                    </FormControl>
                    <FormControl style={{margin: 10}}>
                        <InputLabel htmlFor="my-input">Price</InputLabel>
                        <Input type="number" id="my-input" aria-describedby="my-helper-text" style={{ width: 500 }} onChange={(event) => setPrice(event.target.value)} />
                    </FormControl>
                    <FormControl style={{margin: 10}}>
                        <InputLabel htmlFor="my-input">Quantity</InputLabel>
                        <Input type="number" id="my-input" aria-describedby="my-helper-text" style={{ width: 500 }} onChange={(event) => setQuantity(event.target.value)} />
                    </FormControl>
                    <FormControl style={{margin: 10}}>
                        <InputLabel htmlFor="my-input">Description</InputLabel>
                        <Input id="my-input" aria-describedby="my-helper-text" style={{ width: 500 }} multiline rows={10} rowsMax={20} onChange={(event) => setDescription(event.target.value)} />
                    </FormControl>
                    <FormControl style={{margin: 10}}>
                        <InputLabel htmlFor="my-input">Category (Brand Name)</InputLabel>
                        <Input id="my-input" aria-describedby="my-helper-text" style={{ width: 500 }} onChange={(event) => setCategory(event.target.value)} />
                    </FormControl>
                </Grid>
                <Grid container justify="center">
                    <Button variant="contained" color="primary" onClick={()=>{}}>
                        Buy +
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default ViewProduct
