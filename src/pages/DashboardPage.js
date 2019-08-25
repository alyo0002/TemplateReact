import { AnnouncementCard, TodosCard } from 'components/Card';
import HorizontalAvatarList from 'components/HorizontalAvatarList';
import MapWithBubbles from 'components/MapWithBubbles';
import Page from 'components/Page';
import ProductMedia from 'components/ProductMedia';
import SupportTicket from 'components/SupportTicket';
import UserProgressTable from 'components/UserProgressTable';
import { IconWidget, NumberWidget } from 'components/Widget';
import { getStackLineChart, stackLineChartOptions } from 'demos/chartjs';
import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4
} from "../variables/charts.jsx";
import { FaRegFutbol, FaPen } from 'react-icons/fa';
import {
  avatarsData,
  chartjs,
  productsData,
  supportTicketsData,
  todosData,
  userProgressTableData,
} from 'demos/dashboardPage';
import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
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
import InfiniteCalendar from 'react-infinite-calendar';
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardDeck,
  CardGroup,
  CardHeader,
  CardTitle,
  Col,
  ListGroup,
  ListGroupItem,
  Row,
  ButtonGroup,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Label,
  FormGroup,
  Input,
  Table,
  UncontrolledTooltip,
} from 'reactstrap';
import { getColor } from 'utils/colors';
import classNames from "classnames";
import "../styles/dashboard.css";

const today = new Date();
const lastWeek = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() - 7,
);

class DashboardPage extends React.Component {

  componentDidMount() {
    // this is needed, because InfiniteCalendar forces window scroll
    window.scrollTo(0, 0);
  }
  constructor(props) {
    super(props);
    this.state = {
      bigChartData: "data1"
    };
  }
  setBgChartData = name => {
    this.setState({
      bigChartData: name
    });
  };
  render() {
    const primaryColor = getColor('primary');
    const secondaryColor = getColor('secondary');

    return (
      <Page
        className="DashboardPage"
        title="Dashboard"
        breadcrumbs={[{ name: 'Dashboard', active: true }]}
      >
        <Row>
          <Col xs="12">
            <Card className="card-chart dashboard-card">
              <CardHeader className="dashboard-cardheader">
                <Row>
                  <Col className="text-left" sm="6">
                    <CardTitle tag="h2">Performance</CardTitle>
                  </Col>
                  <Col sm="6">
                    <ButtonGroup
                      className="btn-group-toggle float-right"
                      data-toggle="buttons"
                    >
                      <Button
                        tag="label"
                        className={classNames("btn-simple", {
                          active: this.state.bigChartData === "data1"
                        })}
                        color="info"
                        id="0"
                        size="sm"
                        onClick={() => this.setBgChartData("data1")}
                      >
                        <input
                          defaultChecked
                          className="d-none"
                          name="options"
                          type="radio"
                        />
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                            Accounts
                          </span>
                        <span className="d-block d-sm-none">
                            <i className="tim-icons icon-single-02" />
                          </span>
                      </Button>
                      <Button
                        color="info"
                        id="1"
                        size="sm"
                        tag="label"
                        className={classNames("btn-simple", {
                          active: this.state.bigChartData === "data2"
                        })}
                        onClick={() => this.setBgChartData("data2")}
                      >
                        <input
                          className="d-none"
                          name="options"
                          type="radio"
                        />
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                            Purchases
                          </span>
                        <span className="d-block d-sm-none">
                            <i className="tim-icons icon-gift-2" />
                          </span>
                      </Button>
                      <Button
                        color="info"
                        id="2"
                        size="sm"
                        tag="label"
                        className={classNames("btn-simple", {
                          active: this.state.bigChartData === "data3"
                        })}
                        onClick={() => this.setBgChartData("data3")}
                      >
                        <input
                          className="d-none"
                          name="options"
                          type="radio"
                        />
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                            Sessions
                          </span>
                        <span className="d-block d-sm-none">
                            <i className="tim-icons icon-tap-02" />
                          </span>
                      </Button>
                    </ButtonGroup>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chartExample1[this.state.bigChartData]}
                    options={chartExample1.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg="6" md="12" sm="12" xs="12">
            <Card className="card-tasks dashboard-card">
              <CardHeader  className="dashboard-cardheader">
                <h6 className="title d-inline" style={{marginRight:20}}>Tasks(5)</h6>
                <p className="card-category d-inline"> today</p>
                <UncontrolledDropdown style={{float:"right"}}>
                  <DropdownToggle
                    caret
                    className="btn-icon"
                    color="link"
                    data-toggle="dropdown"
                    type="button"
                  >
                    {/*<i className="tim-icons icon-settings" />*/}
                    <FaRegFutbol />
                  </DropdownToggle>
                  <DropdownMenu aria-labelledby="dropdownMenuLink" right>
                    <DropdownItem
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Action
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Another action
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Something else
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </CardHeader>
              <CardBody>
                <div className="table-full-width table-responsive task-table">
                  <Table>
                    <tbody>
                    <tr>
                      <td>
                        <FormGroup check>
                          <Label check>
                            <Input defaultValue="" type="checkbox" />
                          </Label>
                        </FormGroup>
                      </td>
                      <td>
                        <p className="title">Update the Documentation</p>
                        <p className="text-muted">
                          Dwuamish Head, Seattle, WA 8:47 AM
                        </p>
                      </td>
                      <td className="td-actions text-right">
                        <Button
                          color="link"
                          id="tooltip636901683"
                          title=""
                          type="button"
                        >
                          <i className="tim-icons icon-pencil" />
                          <FaPen />
                        </Button>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip636901683"
                          placement="right"
                        >
                          Edit Task
                        </UncontrolledTooltip>
                      </td>
                    </tr>
                    <tr>
                      <td >
                        <FormGroup check>
                          <Label check>
                            <Input
                              defaultChecked
                              defaultValue=""
                              type="checkbox"
                            />
                          </Label>
                        </FormGroup>
                      </td>
                      <td>
                        <p className="title">GDPR Compliance</p>
                        <p className="text-muted">
                          The GDPR is a regulation that requires businesses
                          to protect the personal data and privacy of Europe
                          citizens for transactions that occur within EU
                          member states.
                        </p>
                      </td>
                      <td className="td-actions text-right">
                        <Button
                          color="link"
                          id="tooltip457194718"
                          title=""
                          type="button"
                        >
                          <i className="tim-icons icon-pencil" />
                          <FaPen />
                        </Button>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip457194718"
                          placement="right"
                        >
                          Edit Task
                        </UncontrolledTooltip>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <FormGroup check>
                          <Label check>
                            <Input defaultValue="" type="checkbox" />
                            <span className="form-check-sign">
                                  <span className="check" />
                                </span>
                          </Label>
                        </FormGroup>
                      </td>
                      <td>
                        <p className="title">Solve the issues</p>
                        <p className="text-muted">
                          Fifty percent of all respondents said they would
                          be more likely to shop at a company
                        </p>
                      </td>
                      <td className="td-actions text-right">
                        <Button
                          color="link"
                          id="tooltip362404923"
                          title=""
                          type="button"
                        >
                          <i className="tim-icons icon-pencil" />
                          <FaPen />
                        </Button>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip362404923"
                          placement="right"
                        >
                          Edit Task
                        </UncontrolledTooltip>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <FormGroup check>
                          <Label check>
                            <Input defaultValue="" type="checkbox" />
                            <span className="form-check-sign">
                                  <span className="check" />
                                </span>
                          </Label>
                        </FormGroup>
                      </td>
                      <td>
                        <p className="title">Release v2.0.0</p>
                        <p className="text-muted">
                          Ra Ave SW, Seattle, WA 98116, SUA 11:19 AM
                        </p>
                      </td>
                      <td className="td-actions text-right">
                        <Button
                          color="link"
                          id="tooltip818217463"
                          title=""
                          type="button"
                        >
                          <i className="tim-icons icon-pencil" />
                          <FaPen />
                        </Button>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip818217463"
                          placement="right"
                        >
                          Edit Task
                        </UncontrolledTooltip>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <FormGroup check>
                          <Label check>
                            <Input defaultValue="" type="checkbox" />
                            <span className="form-check-sign">
                                  <span className="check" />
                                </span>
                          </Label>
                        </FormGroup>
                      </td>
                      <td>
                        <p className="title">Export the processed files</p>
                        <p className="text-muted">
                          The report also shows that consumers will not
                          easily forgive a company once a breach exposing
                          their personal data occurs.
                        </p>
                      </td>
                      <td className="td-actions text-right">
                        <Button
                          color="link"
                          id="tooltip831835125"
                          title=""
                          type="button"
                        >
                          <i className="tim-icons icon-pencil" />
                          <FaPen />
                        </Button>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip831835125"
                          placement="right"
                        >
                          Edit Task
                        </UncontrolledTooltip>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <FormGroup check>
                          <Label check>
                            <Input defaultValue="" type="checkbox" />
                            <span className="form-check-sign">
                                  <span className="check" />
                                </span>
                          </Label>
                        </FormGroup>
                      </td>
                      <td>
                        <p className="title">Arival at export process</p>
                        <p className="text-muted">
                          Capitol Hill, Seattle, WA 12:34 AM
                        </p>
                      </td>
                      <td className="td-actions text-right">
                        <Button
                          color="link"
                          id="tooltip217595172"
                          title=""
                          type="button"
                        >
                          <i className="tim-icons icon-pencil" />
                          <FaPen />
                        </Button>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip217595172"
                          placement="right"
                        >
                          Edit Task
                        </UncontrolledTooltip>
                      </td>
                    </tr>
                    </tbody>
                  </Table>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="6" md="12" sm="12" xs="12">
            <Card className="dashboard-card">
              <CardHeader  className="dashboard-cardheader">New Users</CardHeader>
              <CardBody>
                <UserProgressTable
                  headers={[
                    <MdPersonPin size={25} />,
                    'name',
                    'date',
                    'participation',
                    '%',
                  ]}
                  usersData={userProgressTableData}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Page>
    );
  }
}
export default DashboardPage;
