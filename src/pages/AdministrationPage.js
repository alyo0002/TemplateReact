import Page from 'components/Page';
import React from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

const tableTypes = ['', 'bordered', 'striped', 'hover'];

const AdministrationPage = () => {
  return (
    <Page
      title="Administrations"
      breadcrumbs={[{ name: 'Administrations', active: true }]}
      className="AdministrationsPage"
    >

    </Page>
  );
};

export default AdministrationPage;
