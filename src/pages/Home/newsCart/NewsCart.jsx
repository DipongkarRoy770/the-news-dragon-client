import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import moment from "moment";
import { FaBookmark,FaShare,FaEye,FaStar } from 'react-icons/fa';


const NewsCart = ({ category }) => {
  const { _id, title, details, image_url, author,rating,total_view } = category;
  return (
    <Card className="mb-4">
      <Card.Header>
        <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <Image style={{ height: "40px" }} src={author.img} roundedCircle />
          <div className="ps-2">
            <p className="mb-0">{author.name}</p>
            <p>
              <small>{moment(author.published_date).format("yyyy-mm-d")}</small>
            </p>
          </div>
        </div>
        <div className="d-flex gap-2">
          <FaBookmark></FaBookmark>
          <FaShare></FaShare>
        </div>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length < 250 ? (
            <>{details}</>
          ) : (
            <>
              {details.slice(0, 250)}....
              <Link to={`/news/${_id}`}>Read more</Link>
            </>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex">
        <div className="flex-grow-1 align-items-center">
          <FaStar></FaStar>
          <FaStar></FaStar>
          <FaStar></FaStar>
          <FaStar></FaStar>
            <span>{rating.number}</span>
        </div>
        <div>
           <FaEye></FaEye>{total_view}
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCart;
