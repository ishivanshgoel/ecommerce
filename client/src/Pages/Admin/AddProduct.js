import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import Preview from './preview.png'

// components
import AppBarCustom from '../../Components/AppBarCustom'
const axios = require('axios');

function AddProduct() {

    const [image, setImage] = useState("")
    const [imageUrl, setImageUrl] = useState("http://localhost:3000");
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

    const handleAddProduct = async () => {
        try {
            const response = await axios.post('http://localhost:5000/admin/product', {
                name: name, 
                price: price, 
                quantity: quantity, 
                description: description, 
                category: category, 
                imageUrl: imageUrl
            });
            let data = response.data
            if(data.message == "success"){
                let id = data.data._id
                alert('Product Added ', id)
            }           
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <AppBarCustom text={'Add Product'} />
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    {imageUrl && image ? (
                        <Box mt={2} textAlign="center">
                            <img src={imageUrl} alt={image.name} height="300px" style={{ border: "2px solid black" }} />
                        </Box>
                    ) : <Box mt={2} textAlign="center">
                        <img src={Preview} alt={'preview-dummy'} height="300px" style={{ border: "2px solid black" }} />
                    </Box>}
                    <Grid container justify="center">
                        <input
                            accept="image/*"
                            type="file"
                            id="select-image"
                            style={{ display: 'none' }}
                            onChange={e => setImage(e.target.files[0])}
                        />
                        <label htmlFor="select-image">
                            <Button variant="contained" color="primary" component="span">
                                Upload Image
                            </Button>
                        </label>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl style={{ margin: 10 }}>
                        <InputLabel htmlFor="my-input">Name</InputLabel>
                        <Input id="my-input" aria-describedby="my-helper-text" style={{ width: 500 }} onChange={(event) => setName(event.target.value)} />
                    </FormControl>
                    <FormControl style={{ margin: 10 }}>
                        <InputLabel htmlFor="my-input">Price</InputLabel>
                        <Input type="number" id="my-input" aria-describedby="my-helper-text" style={{ width: 500 }} onChange={(event) => setPrice(event.target.value)} />
                    </FormControl>
                    <FormControl style={{ margin: 10 }}>
                        <InputLabel htmlFor="my-input">Quantity</InputLabel>
                        <Input type="number" id="my-input" aria-describedby="my-helper-text" style={{ width: 500 }} onChange={(event) => setQuantity(event.target.value)} />
                    </FormControl>
                    <FormControl style={{ margin: 10 }}>
                        <InputLabel htmlFor="my-input">Description</InputLabel>
                        <Input id="my-input" aria-describedby="my-helper-text" style={{ width: 500 }} multiline rows={10} rowsMax={20} onChange={(event) => setDescription(event.target.value)} />
                    </FormControl>
                    <FormControl style={{ margin: 10 }}>
                        <InputLabel htmlFor="my-input">Category (Brand Name)</InputLabel>
                        <Input id="my-input" aria-describedby="my-helper-text" style={{ width: 500 }} onChange={(event) => setCategory(event.target.value)} />
                    </FormControl>
                </Grid>
                <Grid container justify="center">
                    <Button variant="contained" color="primary" onClick={handleAddProduct}>
                        Upload Product
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default AddProduct
