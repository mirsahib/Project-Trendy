import React, { useState, useEffect } from "react";
import Product from "../../components/Product/Product";
import { Container, Grid, Segment, Dimmer, Loader } from "semantic-ui-react";
import "./Home.css";

function Home() {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    return (
        <div className="home">
            <Container>
                <Grid container columns={4} doubling stackable>
                    <Grid.Column stretched key={1}>
                        <Product
                            id={1}
                            key={1}
                            title={'Demo'}
                            price={12}
                            rating={4}
                            imageUrl={'asdasd'}
                        ></Product>
                    </Grid.Column>
                </Grid>
            </Container>

        </div>
    );
}

export default Home;
