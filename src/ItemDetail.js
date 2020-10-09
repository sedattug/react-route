import React, {useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import configData from "./config/config.json";


function ItemDetail(props) {

    const ITEM_ID = props.match.params.id;
    const API_URL = 'https://fortniteapi.io/v1/items/get?id='+ITEM_ID+'&lang=en';
    const API_KEY = configData.API_KEY;

    const options = {
        method: "GET",
        headers: {
            "Authorization": API_KEY
        }
    };

    const [item, setItem] = useState({
        images: {}
    });

    useEffect(() => {
        fetchItem();
    }, []);


    const fetchItem = async () => {
        const data = await fetch(API_URL, options);
        const item = await data.json();
        setItem(item.item);
        console.log(item.item);
    }

    return (
        <Container>
        <Row>
            <Col md={3}></Col>
            <Col md={6}>
                <Card>
                    <Card.Img variant="top" src={item.images.background} />
                    <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                        {item.description}
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={3}></Col>
        </Row>
        </Container>
    );

}

export default ItemDetail;