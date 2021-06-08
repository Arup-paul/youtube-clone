import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Video from "../../components/video/video";
import CategoriesBar from "../../components/categoriesBar/categoriesBar";

function HomeScreen( ) {
    return (
        <div>
            <Container>
                <CategoriesBar />
               <Row>
                   {[...new Array(20)].map(() => (
                               <Col lg={3} md={4}>
                                <Video />
                              </Col>
                           ))}

               </Row>
            </Container>
        </div>
    );
}

export default HomeScreen;