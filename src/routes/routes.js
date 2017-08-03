import React, { Component } from 'react'
import { connect } from 'react-redux'

import {  addNavigationHelpers, StackNavigator} from 'react-navigation'

import Home from '../home/home'


export const RoutesApp = StackNavigator({
	Home: {screen: Home}
})

const Routes = ({ dispatch, nav }) => (
	<RoutesApp navigation={ addNavigationHelpers({dispatch, state: nav})}/>
)

const mapStateToProps = state => ({
	nav: state.nav
})

export default connect(mapStateToProps)(Routes)