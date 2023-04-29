import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowAltCircleRight, FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import EditorsInsides from '../EditorsInside/EditorsInsides';

const News = () => {
    const news = useLoaderData();
    const {title,details,category_id,image_url} = news
    return (
      <div>
        {" "}
        <Card className="mt-3">
          <Card.Img variant="top" src={image_url} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{details}</Card.Text>
            <Link to={`/category/${category_id}`}>
              {" "}
              <Button variant="danger">
                <FaArrowLeft></FaArrowLeft>
                All News in this category
              </Button>
            </Link>{" "}
          </Card.Body>
        </Card>
        <EditorsInsides></EditorsInsides>
      </div>
    );
};

export default News;