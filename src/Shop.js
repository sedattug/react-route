import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import configData from "./config/config.json";


function Shop() {

    const API_URL = 'https://fortniteapi.io/v1/items/upcoming?lang=en';
    const API_KEY = configData.API_KEY;

    const options = {
        method: "GET",
        headers: {
            "Authorization": API_KEY
        }
    };

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        const data = await fetch(API_URL, options);
        const items = await data.json();
        setItems(items.items);
        console.log(items.items);

    }

    return (
        <Container>
        <Row>
            {items.map(item => (
                <Col md={4}>
                    <Card key={item.id}>
                    <Card.Img variant="top" src={item.images.background} />
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>
                        {item.description}
                        </Card.Text>
                        <Nav.Link key={item.id} href={'/shop/' + item.id}>{item.name}</Nav.Link>
                    </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
        </Container>
    );
}

export default Shop;