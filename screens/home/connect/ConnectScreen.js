/* eslint-disable arrow-parens */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
 
import ConnectForm from './ConnectForm';

const propTypes = {};

class ConnectScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      looking: true
    }
  }

  toggleLooking = (value) => {
    this.setState({ looking: value });
  }

  render() {
    const { looking } = this.state;
    return (
      <ConnectForm
        looking={looking}
        toggleLooking={this.toggleLooking}
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = {};

ConnectScreen.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(ConnectScreen);
