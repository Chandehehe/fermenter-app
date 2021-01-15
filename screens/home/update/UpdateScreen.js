/* eslint-disable arrow-parens */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
 
import UpdateForm from './UpdateForm';

const propTypes = {};

class UpdateScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <UpdateForm />
    );
  }
}

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = {};

UpdateScreen.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(UpdateScreen);
