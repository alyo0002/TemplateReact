import Page from 'components/Page';
import Typography from 'components/Typography';
import React from 'react';
import { Card, CardBody, CardHeader, Col, Row, Input, Button } from 'reactstrap';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

class TaskPage extends React.Component{

constructor(props){
  super(props);
  this.state = {
    startDate: new Date()
  };
  this.handleChange = this.handleChange.bind(this);
  }
  handleChange(date) {
    this.setState({
      startDate: date
    });
}
render(){
  return (
    <Page
      title="Tasks"
      breadcrumbs={[{ name: 'Tasks', active: true }]}>
      <Row>
        <Col>
          <Card>
            <CardHeader>Add Task:</CardHeader>
            <CardBody>
              <Row>
                <Col lg="3" md="12" sm="12" xs="12">
                  <h4>Task Name:</h4>
                </Col>
                <Col lg="9" md="12" sm="12" xs="12">
                  <Input type="text" name="text" id="exampleText" placeholder="Finalize Tom Report" />
                </Col>
              </Row>
              <Row>
                <Col lg="3" md="12" sm="12" xs="12">
                  <h4>Task Description:</h4>
                </Col>
                <Col lg="9" md="12" sm="12" xs="12">
                  <Input type="textarea" name="text" id="exampleText" placeholder="Create a summary of Tom's interview and forward to specialist" />
                </Col>
              </Row>
              <Row>
                <Col lg="3" md="12" sm="12" xs="12">
                  <h4>Task Priority:</h4>
                </Col>
                <Col lg="9" md="12" sm="12" xs="12">
                  <Input type="select" name="select" id="exampleSelect">
                    <option>urgent</option>
                    <option>not urgent</option>
                  </Input>
                </Col>
              </Row>
              <Row>
                <Col lg="3" md="12" sm="12" xs="12">
                  <h4>Complete Date:</h4>
                </Col>
                <Col lg="9" md="12" sm="12" xs="12">
                  <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                  />
                </Col>
              </Row>
              <Row>
                <Col lg="3" md="12" sm="12" xs="12">
                  <h4>Assigned to:</h4>
                </Col>
                <Col lg="9" md="12" sm="12" xs="12">
                  <Input type="select" name="select" id="exampleSelect">
                    <option>All users</option>
                    <option>Petra</option>
                    <option>Technician</option>
                    <option>Receptionist</option>
                  </Input>
                </Col>
              </Row>
              <Row>
                <Col lg="3" md="12" sm="12" xs="12">
                </Col>
                <Col lg="9" md="12" sm="12" xs="12">
                  <Button color="primary" size="lg" style={{fontSize:16}}>Add New Task</Button>{' '}
                  <Button color="primary" size="lg" style={{fontSize:16}}>Dashboard</Button>{' '}
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>

    </Page>
  );
};
}
export default TaskPage;
