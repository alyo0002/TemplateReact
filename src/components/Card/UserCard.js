import React from 'react';
import PropTypes from 'utils/propTypes';

import classNames from 'classnames';

import { Card, CardTitle, CardSubtitle, CardText, CardBody } from 'reactstrap';

import Avatar from '../Avatar';



const UserCard = ({
  avatar,
  avatarSize,
  title,
  subtitle,
  text,
  view,
  children,
  className,
  ...restProps
}) => {
  const classes = classNames('bg-gradient-theme', className);


  return (
    <Card inverse className={classes} {...restProps}>
      <CardBody className="d-flex justify-content-center align-items-center flex-column">
        <Avatar src={avatar} size={avatarSize} className="mb-2" />
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>{subtitle}</CardSubtitle>
        <CardText>
          <small>{text}</small>
        </CardText>
        <CardText>
          <small><a href="/patient_profile" class="text-white"> {view}</a></small>
        </CardText>
      </CardBody>
      {children}
    </Card>
  );
};

UserCard.propTypes = {
  avatar: PropTypes.string,
  avatarSize: PropTypes.number,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  text: PropTypes.string,
  view: PropTypes.string,
  className: PropTypes.string,
};

UserCard.defaultProps = {
  avatarSize: 80,
};

export default UserCard;
