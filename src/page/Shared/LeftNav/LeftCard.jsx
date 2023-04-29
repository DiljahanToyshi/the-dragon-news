import React from 'react';
import { Card, Col } from 'react-bootstrap';
import first from '../../../assets/2.png';
import second from '../../../assets/3.png';
import third from '../../../assets/1.png';

const LeftCard = () => {
    return (
      <div>
        <Col>
          <Card>
            <Card.Img variant="top" src={first} />
            <Card.Body>
              <h6>
                Bayern Slams Authorities Over Flight Delay to Club World Cup
              </h6>
            </Card.Body>

          </Card>
          <Card className='my-3'>
            <Card.Img variant="top" src={second} />
            <Card.Body>
              <h6>
                Bayern Slams Authorities Over Flight Delay to Club World Cup
              </h6>
            </Card.Body>

          </Card>
          <Card>
            <Card.Img variant="top" src={third} />
            <Card.Body>
              <h6>
                Bayern Slams Authorities Over Flight Delay to Club World Cup
              </h6>
            </Card.Body>

          </Card>
        </Col>
      </div>
    );
};

export default LeftCard;