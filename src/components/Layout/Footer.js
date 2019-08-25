import React from 'react';

import { Navbar, Nav, NavItem } from 'reactstrap';

import SourceLink from 'components/SourceLink';

const Footer = () => {
  return (
    <Navbar>
      <Nav navbar>
        <NavItem>
          2019    O P M S <SourceLink>South Africa</SourceLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Footer;
