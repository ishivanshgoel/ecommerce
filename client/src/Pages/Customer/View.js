import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import {
    useParams,
} from "react-router-dom";

import axios from 'axios'

import Navbar from '../../Components/AppBarCustom2'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


function ViewProduct() {

    const [image, setImage] = useState("")
    const [imageUrl, setImageUrl] = useState(null);
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [quantity, setQuantity] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")

    const [data, setData] = useState([])

    const { id } = useParams()

    useEffect(async () => {
        try {
            let response = await axios.get(`http://localhost:5000/products/one?id=${id}`)
            if (response.data.message == "success") {
                let data = response.data.data
                setData(data)
                setName(data.name)
                setPrice(data.price)
                setQuantity(data.quantity)
                setDescription(data.description)
                setCategory(data.category)
            }
        } catch (err) {
            alert('Error!')
        }
    }, []);

    const [selectQuantity, setSelectedQuantity] = useState(0)

    const handleChange = (event) => {
        setSelectedQuantity(event.target.value);
    };

    const placeProduct = async ()=>{
        try{

            let allProducts = []

            for(let i=0;i<selectQuantity;i++){
                allProducts.push(data)
            }

            let amount = price*quantity

            let response = await axios.post("http://localhost:5000/user/order/place", {
                userId: "shoes",
                products: allProducts, 
                amount: amount, 
                paymentType: "stripe", 
                paymentReference: "199900222"
            })

            if(response.data.message == "success"){
                alert(`Order Placed Id: ${response.data.data}`)
            }

        } catch(err){   
            alert(err)
        }
    }

    return (
        <>
            <Navbar />
            <div style={{ marginTop: 100, marginBottom: 300 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <Box mt={2} textAlign="center">
                            <img src="https://assets.ajio.com/medias/sys_master/root/h5a/h59/13018715881502/-1117Wx1400H-460342492-blue-MODEL.jpg" alt={'preview-dummy'} height="400px" style={{ border: "2px solid black" }} />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl style={{ margin: 10 }}>
                            <InputLabel htmlFor="my-input">Name</InputLabel>
                            <Input disabled={true} id="my-input" aria-describedby="my-helper-text" style={{ width: 500 }} value={name} />
                        </FormControl>
                        <FormControl style={{ margin: 10 }}>
                            <InputLabel htmlFor="my-input">Price</InputLabel>
                            <Input disabled={true} type="number" id="my-input" aria-describedby="my-helper-text" style={{ width: 500 }} value={price} />
                        </FormControl>
                        <FormControl style={{ margin: 10 }}>
                            <InputLabel htmlFor="my-input">Quantity Available</InputLabel>
                            <Input disabled={true} type="number" id="my-input" aria-describedby="my-helper-text" style={{ width: 500 }} value={quantity} />
                        </FormControl>
                        <FormControl style={{ margin: 10 }}>
                            <InputLabel htmlFor="my-input">Description</InputLabel>
                            <Input disabled={true} id="my-input" aria-describedby="my-helper-text" style={{ width: 500 }} multiline rows={10} rowsMax={20} value={description} />
                        </FormControl>
                        <FormControl style={{ margin: 10 }}>
                            <InputLabel htmlFor="my-input">Category (Brand Name)</InputLabel>
                            <Input disabled={true} id="my-input" aria-describedby="my-helper-text" style={{ width: 500 }} value={category} />
                        </FormControl>
                    </Grid>

                    <Grid container justify="center">
                        <Box sx={{ minWidth: 120, marginRight: 20 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Select Qunatity</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={selectQuantity}
                                    label="Age"
                                    onChange={handleChange}
                                >
                                    {
                                        Array.from({ length: quantity }, (_, i) => i + 1).map((q) => (
                                            <MenuItem value={q}>{q}</MenuItem>
                                        ))
                                    }
                                </Select>
                            </FormControl>
                        </Box>
                        <Button variant="contained" color="primary" onClick={() => {placeProduct()}}>
                            Buy +
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default ViewProduct
