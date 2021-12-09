import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SideBar from '../../Components/SideBar';
import { useHistory } from 'react-router-dom'

import axios from 'axios'

function Home() {

    let history = useHistory()

    let viewProduct = (id) => {
        history.push(`/${id}`)
    }

    const [products, setProducts] = useState([])

    useEffect(async () => {

        try {
            let response = await axios.get("http://localhost:5000/products")
            if (response.data.message == "success") {
                let data = response.data.data
                setProducts(data)
                console.log(data)
            }
        } catch (err) {
            alert('Cannot get products')
        }
    }, [])

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <div>
                        <img style={{ height: '100vh', width: '100%', display: 'block', objectFit: 'cover' }} src="https://media-cldnry.s-nbcnews.com/image/upload/newscms/2020_17/3318911/200422-eco-shoes-2x1-al-1218.jpg"></img>
                        {/* <section class='hero-header-text'>
                            <h1>Ellen Macpherson</h1>
                            <h2>Just another tech blog.</h2>
                            <button>Read more.</button>
                        </section> */}
                    </div>
                </Grid>
                <Grid item xs={12} sm={2} style={{ paddingLeft: 20 }}>
                    <SideBar />
                </Grid>
                <Grid item xs={10} style={{ padding: 20 }}>
                    <Grid container spacing={2}>
                        {
                            products.map((product) => (
                                <Grid item xs={12} sm={3}>
                                    <Card>
                                        <CardMedia
                                            component="img"
                                            alt="green iguana"
                                            height="140"
                                            image="https://assets.ajio.com/medias/sys_master/root/h5a/h59/13018715881502/-1117Wx1400H-460342492-blue-MODEL.jpg"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {product.name}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {product.description}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small" variant="contained">Price {product.price}/-</Button>
                                            <Button size="small" variant="contained" onClick={() => viewProduct(product._id)}>View</Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Home
