import { Row, Col } from 'react-bootstrap'

const DateCount = ({ person }) => {
  return (
    <Row className="justify-content-center my-2">
        <Col sm='8'>
            لديك {person.length} مواعيد
        </Col>
    </Row>
  )
}

export default DateCount