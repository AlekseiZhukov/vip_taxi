import React from 'react'
import './App.css'

import SimpleSlider from './components/Slider/SimpleSlider'
import Header from './components/Header/Header'
import Section2 from './components/Section2/Section2'
//import Section3 from './components/Section3/Section3'
import Section4 from './components/Section4/Section4'
import SectionAddition from './components/SectionSddition/SectionAddition'
import Conditions from './components/Conditions/Conditions'
import Section5 from './components/Section5/Section5'
import Section6 from './components/Section6/Section6'
import FeedbackForm from './components/FeedbackForm/FeedbackForm'
//import { BrowserRouter, Switch, Route } from 'react-router-dom'


class App extends React.Component {
		constructor(props) {
			super(props)
			this.state = {
				conditions: false,
				feedbackForm: false,

			}
		}

		onHandleClickConditions = (e) => {

			this.setState({
				conditions: true,
			})
		}

		onHandleClickConditionsClose = () => {

			this.setState({
				conditions: false,
			})
		}

		onHandleClickFeedbackForm = () => {
			this.setState({
				feedbackForm: true,
			})
		}

		onHandleClickFeedbackFormClose = () => {
			this.setState({
				feedbackForm: false,
			})
		}

		render() {
				const {
					conditions,
					feedbackForm
				} = this.state
				return ( <
					div className = "body-color" >
					<
					Header click = {
						this.onHandleClickConditions
					}
					/> <
					SimpleSlider feedbackFormOn = {
						this.onHandleClickFeedbackForm
					}
					/> <
					Section2 / >
					<
					Section4 / >
					<
					SectionAddition / > {
						conditions ? < Conditions close = {
							this.onHandleClickConditionsClose
						}
						/> : null} <
						Section5 / >
						<
						Section6 / > {
							feedbackForm ? < FeedbackForm conditionOn = {
								this.onHandleClickConditions
							}
							close = {
								this.onHandleClickFeedbackFormClose
							}
							/> : null} < /
							div >
						)
					}
				}

				export default App;