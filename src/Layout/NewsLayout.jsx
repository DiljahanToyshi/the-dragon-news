import React from 'react';
import Header from '../page/Shared/Header/Header';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import RightNav from '../page/Shared/RightNav/RightNav';
import Footer from '../page/Shared/Footer/Footer';

const NewsLayout = () => {
    return (
        <div>
            <Header></Header>
        <Container>
        
          <Row>
            <Col lg={9}><Outlet></Outlet></Col>
            <Col lg={3}><RightNav></RightNav></Col>
          </Row>
        </Container>
        <Footer></Footer> 
        </div>
    );
};

export default NewsLayout;