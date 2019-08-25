import bg11Image from 'assets/img/bg/background_1920-11.jpg';
import bg18Image from 'assets/img/bg/background_1920-18.jpg';
import bg1Image from 'assets/img/bg/background_640-1.jpg';
import bg3Image from 'assets/img/bg/background_640-3.jpg';

import UserProgressTable from 'components/UserProgressTable';
import user1Image from 'assets/img/users/100_1.jpg';
import { UserCard } from 'components/Card';
import Page from 'components/Page';
import { bgCards, gradientCards, overlayCards } from 'demos/cardPage';
import { getStackLineChart, stackLineChartOptions } from 'demos/chartjs';
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Progress,
  Button,
  Card,
  CardBody, CardHeader,
  CardImg,
  CardImgOverlay,
  CardLink,
  CardText,
  CardTitle,
  Col,
  ListGroup,
  ListGroupItem,
  FormGroup,
  Input,
  Label,
  Row,
} from 'reactstrap';
import {
  MdBubbleChart,
  MdInsertChart,
  MdPersonPin,
  MdPieChart,
  MdRateReview,
  MdShare,
  MdShowChart,
  MdThumbUp,
} from 'react-icons/md';
import {
  avatarsData,
  chartjs,
  productsData,
  supportTicketsData,
  todosData,
  userProgressTableData,
} from 'demos/dashboardPage';
import "../styles/custom.scss";

class PatientProfile extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      data: '0'
    };
    this.updateState = this.updateState.bind(this);
  }
  updateState(e) {
    this.setState({
      data: e.target.value
    });
  }

render() {
  return (
    <Page title="Patient Profile" breadcrumbs={[{ name: 'Patient Profile', active: true }]}>
      <Row>
        <Col>
          <Card>
            <CardBody>
              <div>
                <div className="text-center">{this.state.data}%</div>
                <Progress value={this.state.data} />
              </div><br/>
              <Row>
                <Col lg="4" md="4" sm="12" xs="12">
                  <h3>Patient Name:Tom Murphy</h3>
                  <h6>Email Address: t.murphy86@gmail.com</h6>
                  <h6>Parent ID:1234</h6>
                </Col>
                <Col lg="5" md="5" sm="12" xs="12">
                  <h3 class="text-center">Treatment Phase</h3>
                  <FormGroup tag="fieldset">
                    <Row>
                      <Col lg="3" md="3" sm="12" xs="12">
                        <FormGroup check className="text-center">
                            <Input type="radio" name="radio1" value="25" onChange={this.updateState}/><br/>
                            <p>Phase 1</p>
                        </FormGroup>
                      </Col>
                      <Col lg="3" md="3" sm="12" xs="12">
                        <FormGroup check className="text-center">
                          <Input type="radio" name="radio1" value="50" onChange={this.updateState}/><br/>
                          <p>Phase 2</p>
                        </FormGroup>
                      </Col>
                      <Col lg="3" md="3" sm="12" xs="12">
                        <FormGroup check className="text-center">
                          <Input type="radio" name="radio1" value="75" onChange={this.updateState}/><br/>
                          <p>Phase 3</p>
                        </FormGroup>
                      </Col>
                      <Col lg="3" md="3" sm="12" xs="12">
                        <FormGroup check className="text-center">
                          <Input type="radio" name="radio1" value="100" onChange={this.updateState}/><br/>
                          <p>Phase 4</p>
                        </FormGroup>
                      </Col>
                    </Row>
                  </FormGroup>
                </Col>
                <Col lg="3" md="3" sm="12" xs="12">
                  <Col className="text-center">
                    <Button color="primary" size="lg" style={{fontSize:16}} className="profile-button">Edit</Button>{' '}
                    <Button color="primary" size="lg" style={{fontSize:16}} className="profile-button">Back</Button>{' '}
                  </Col>
                  <div className="text-center">
                    <Button color="primary" style={{fontSize:10}}>Generate<br/>Acknowlegment</Button>{' '}
                  </div>
                </Col>
              </Row>
              <Row>
                  <Input type="textarea" name="text" id="exampleText" style={{margin:10}}/>
              </Row>
              <Row>
                      <span style={{fontSize:30}}>Upload</span>
                      <FormGroup check>
                        <Label check  className="align-bottom">
                          <Input type="radio" name="radio2"/>{' '}
                          Report
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Label check>
                          <Input type="radio" name="radio2" />{' '}
                          Scan
                        </Label>
                      </FormGroup>
              </Row>
              <Row>
                <Input type="textarea" name="text" id="exampleText" style={{margin:10}}/>
              </Row>
              <Row>
                <Col className="text-center">
                  <Button color="primary" className="profile-button">Upload</Button>{' '}
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
export default PatientProfile;
