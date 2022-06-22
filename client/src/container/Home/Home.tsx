import React, { useState, useEffect, useCallback } from "react";
import Product from "../../components/Product/Product";
import { Container, Grid, Segment, Dimmer, Loader } from "semantic-ui-react";
import "./Home.css";
interface ProductState {
    id: string
    title: string,
    price: number,
    rate: number
    image: string
}
function Home() {
    const [product, setProduct] = useState<ProductState[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchProduct = useCallback(async () => {
        const res = await fetch('http://localhost:8080/api/product')
        const data = await res.json()
        setProduct(data.products)
    }, [])

    useEffect(() => {
        fetchProduct().catch(err => {
            console.log(err)
        })
        console.log(product)
    }, [fetchProduct])

    return (
        <div className="home">
            <Container>
                <Grid container columns={4} doubling stackable>
                    {product.map((item: ProductState, index) => {
                        return (<Grid.Column stretched key={index}>
                            <Product
                                id={item.id}
                                key={item.id}
                                title={item.title}
                                price={item.price}
                                rating={item.rate}
                                imageUrl={item.image}
                            ></Product>
                        </Grid.Column>
                        )
                    })}
                </Grid>
            </Container>

        </div>
    );
}

export default Home;
