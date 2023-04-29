import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaArrowLeft } from 'react-icons/fa';


const News = () => {
  const category = useLoaderData()
  const { title, details, image_url } = category;
  return (
    <Card>
     <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
        {details}
        </Card.Text>
       <Link to ={`/category/:category_id`}> <Button variant="danger"><FaArrowLeft></FaArrowLeft> All news category </Button></Link>
      </Card.Body>
    </Card>
  );
}

export default News;