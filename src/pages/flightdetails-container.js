
import { connect } from 'react-redux';
import { FlightDetails } from './flightdetails';
import * as actions from '../actions/actions.js';

export const FlightDetailsContainer = connect(state => ({
    schedules: state.flightSchedules
}), {
    simpleAction: actions.getSchedules(),
})(FlightDetails);