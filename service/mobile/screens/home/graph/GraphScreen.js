/* eslint-disable arrow-parens */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
 
import GraphForm from './GraphForm';

const propTypes = {};

class GraphScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <GraphForm />
    );
  }
}

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = {};

GraphScreen.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(GraphScreen);
