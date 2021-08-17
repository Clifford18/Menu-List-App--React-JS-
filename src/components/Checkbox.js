import {Form,Row,Col } from 'react-bootstrap';
const Checkbox = ({ selected, label, onChange }) => {
  return (
    <div className="checkbox">
      
      <Form.Group as={Row}  className="mb-3" controlId="formHorizontalCheck">
        <Col sm={{ span: 10, offset: 2 }}>
          <Form.Check onClick={() => onChange(!selected)} label="" />
          
         </Col>
      </Form.Group>
      <div className="checkbox__label"  >{label}</div>


      

    </div>



  )
}

export default Checkbox