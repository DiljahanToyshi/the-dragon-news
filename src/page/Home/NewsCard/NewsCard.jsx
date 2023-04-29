import moment from 'moment/moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const NewsCard = ({news}) => {
const {_id,title,details,image_url,author,publish_date,total_view,rating} =news;
    return (
      <div>
        <Card className="mb-4">
          <Card.Header>
            <div className="d-flex align-items-center">
              {" "}
              <Image
                style={{ height: "40px" }}
                src={author.img}
                roundedCircle
              />
              <div className="ps-2 flex-grow-1">
                <p className="mb-0">{author?.name}</p>
                <p>
                  {" "}
                  <small>
                    {moment(author?.publish_date).format("MMMM Do YYYY")}
                  </small>
                </p>
              </div>
              <div>
                <FaShareAlt className="me-1"></FaShareAlt>
                <FaRegBookmark></FaRegBookmark>
              </div>
            </div>
          </Card.Header>

          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Img src={image_url} alt="Card image" />

            <Card.Text>
              {details.length < 250 ? (
                <>{details}</>
              ) : (
                <>
                  {details.slice(0, 250)}...
                  <Link to={`/news/${_id}`}>Read More</Link>
                </>
              )}
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted d-flex justify-content-between">
            <div>
              <Rating
                placeholderRating={rating}
                readonly
                emptySymbol={<FaRegStar></FaRegStar>}
                placeholderSymbol={<FaStar className="text-warning"></FaStar>}
                fullSymbol={<FaStar></FaStar>}
              />
              <span className='ms-1'>{rating?.number}</span>
            </div>
            <div>
              <FaEye className="me-1"></FaEye>
              {total_view}
            </div>
          </Card.Footer>
        </Card>
      </div>
    );
};

export default NewsCard;