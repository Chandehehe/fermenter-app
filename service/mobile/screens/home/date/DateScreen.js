/* eslint-disable arrow-parens */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
 
import DateForm from './DateForm';

const propTypes = {};

class TemperatureScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <DateForm />
    );
  }
}

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = {};

TemperatureScreen.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(TemperatureScreen);
