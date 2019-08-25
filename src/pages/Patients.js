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

const Patients = () => {
  return (
    <Page title="Patients" breadcrumbs={[{ name: 'Patients', active: true }]}>

      <Row>
        <Col md={4}>
          <UserCard
            avatar={user1Image}
            title="Chris"
            subtitle="Project Lead"
            text="Give me a star!"
            view="View"
            style={{
              height: 300,
            }}
          />
        </Col>
        <Col md={4}>
          <UserCard
            avatar={user1Image}
            title="Chris"
            subtitle="Project Lead"
            text="Give me a star!"
            view="View"
            style={{
              height: 300,
            }}
          />
        </Col>
        <Col md={4}>
          <UserCard
            avatar={user1Image}
            title="Chris"
            subtitle="Project Lead"
            text="Give me a star!"
            view="View"
            style={{
              height: 300,
            }}
          />
        </Col>

      </Row>

    </Page>
  );
};

export default Patients;
