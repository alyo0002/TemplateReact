import React from 'react';
import { Row, Col, Card, CardHeader, CardBody } from 'reactstrap';
import Page from 'components/Page';
import Typography from 'components/Typography';
import { NumberWidget, IconWidget } from 'components/Widget';
import { iconWidgetsData, numberWidgetsData } from 'demos/widgetPage';
import RichTextEditor from 'components/RichTextEditor';

const ReportPage = () => {
  return (
    <Page
      className="ReportPage"
      title="Reports"
      breadcrumbs={[{ name: 'reports', active: true }]}
    >
     <Row>
      <Col>
        <Card>
          <CardHeader>General Report: Tom</CardHeader>
          <CardBody>
            <Row>
              <Col lg={5} md={12} sm={12} xs={12}>
                <p>Scan Images:</p>

              </Col>
              <Col lg={7} md={12} sm={12} xs={12}>
                <p>Report Generate:</p>
                <RichTextEditor />
              </Col>
            </Row>

          </CardBody>
        </Card>
      </Col>
     </Row>
    </Page>
  );
};

export default ReportPage;
