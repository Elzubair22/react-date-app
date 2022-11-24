import { Row, Col } from "react-bootstrap";

const DateList = ({ person }) => {
  return (
    <Row className="justify-content-center">
      <Col sm="8">
        <div className="rectangle p-2">
          {person.length ? (
            person.map((item) => {
              return (
                <div key={item.id} className="d-flex border-bottom mx-3 my-4">
                  <img src={item.img} alt="img" className="img-avatar" />
                  <div className="px-3">
                    <p className="d-inline fs-5">{item.name}</p>
                    <p className="fs-6">{item.date}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <h2 className="p-5 text-center">لا توجد مواعيد اليوم</h2>
          )}
        </div>
      </Col>
    </Row>
  );
};

export default DateList;
