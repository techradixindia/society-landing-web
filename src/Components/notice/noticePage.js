import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col } from "react-bootstrap";
function NoticePage() {
    return (<>
        <Row className="mt-8">

            <Col className='text-center'>


                <span className="" style={{ color: '#1a2141', fontSize: '40px', fontWeight: 700, textTransform: 'uppercase', lineHeight: 1.2, marginTop: '100px' }}>Notice</span>

            </Col>
        </Row>
        <Row className='d-flex justify-content-center mt-4 '>
            <Col lg={10} >
                <Card  >
                    <Card.Header as="h5" >Notice</Card.Header>
                    <Card.Body style={{ height: '60vh', overflow: 'auto' }}>
                     
                        <Card.Text>
                        <ul style={{lineHeight:'50px'}}>
                                <li> With supporting text below as a natural lead-in to additional content.</li>
                                <li> With supporting text below as a natural lead-in to additional content.</li>
                                <li> With supporting text below as a natural lead-in to additional content.</li>
                                <li> With supporting text below as a natural lead-in to additional content.</li>
                                <li> With supporting text below as a natural lead-in to additional content.</li>
                                <li> With supporting text below as a natural lead-in to additional content.</li>

                                <li> With supporting text below as a natural lead-in to additional content.</li>

                                <li> With supporting text below as a natural lead-in to additional content.</li>
                                <li> With supporting text below as a natural lead-in to additional content.</li>
                                <li> With supporting text below as a natural lead-in to additional content.</li>

                        </ul>
                           
                        </Card.Text>
                     
                    </Card.Body>
                    <Card.Header className='p-3'></Card.Header>
                </Card>
            </Col>
        </Row>

    </>
    );
}

export default NoticePage;