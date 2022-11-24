import { Row, Col } from "react-bootstrap";

const DateAction = ({ deletData, viewData }) => {
  return (
    <Row className="justify-content-center my-2 ">
      <Col sm="8" className="d-flex justify-content-between">
        <button onClick={deletData} className="btn-style p-2">
          مسح الكل
        </button>
        <button onClick={viewData} className="btn-style p-2">
          عرض البيانات
        </button>
      </Col>
    </Row>
  );
};

export default DateAction;
