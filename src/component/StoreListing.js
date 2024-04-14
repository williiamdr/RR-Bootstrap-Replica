import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function StoreListing() {
    return (
        <Container style={{ marginTop: "40px", textAlign: "center" }}>
            <h2>Browse stores in Houston</h2>
            <Row style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly" }} >
                <Row>
                    <Col xs="2" sm="1">
                        <Image src="https://corporate.aldi.us/fileadmin/fm-dam/logos/ALDI_2017.png" roundedCircle style={{ width: '50px', height: '50px' }} />
                    </Col>
                    <Col>
                        <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
                        <p>Delivery * Pickup</p>
                    </Col>
                </Row>
                <Col sm="1"></Col>
                <Row >
                    <Col xs="2" sm="1">
                        <Image src="https://logos-world.net/wp-content/uploads/2022/11/Sprouts-Farmers-Market-Emblem.png" roundedCircle style={{ width: '50px', height: '50px' }} />
                    </Col>
                    <Col>
                        <h5 style={{ fontWeight: "bold" }}>Sprouts Farmers Market</h5>
                        <p>Delivery * Pickup</p>
                    </Col>
                </Row>
            </Row>
        </Container>
    );
}

export default StoreListing;