import React from 'react'
import './App.css'
import SimpleSlider from './components/Slider/SimpleSlider'
import Header from './components/Header/Header'
import Section2 from './components/Section2/Section2'
import Section4 from './components/Section4/Section4'
import SectionAddition from './components/SectionSddition/SectionAddition'
import Conditions from './components/Conditions/Conditions'
import Section5 from './components/Section5/Section5'
import Section6 from './components/Section6/Section6'
import MediaQuery from 'react-responsive'
import HeaderMobile from "./components/HeaderMobale/HeaderMobile";
import SliderMobile from "./components/SliderMobile/SliderMobile";
import Section2Mobile from "./components/Section2Mobile/Section2";
import Section4Mobile from "./components/Section4Mobile/Section4Mobile";
import SectionAdditionMobile from "./components/SectionSdditionMobile/SectionAddition";
import Section5Mobile from "./components/Section5Mobile/Section5";
import Section6Mobile from "./components/Section6Mobile/Section6Mobile";



class App extends React.Component {
		constructor(props) {
			super(props)
			this.state = {
				conditions: false,
				feedbackForm: false,
			}
		}

		onHandleClickConditions = () => {

			this.setState({
				conditions: true,
			})
		}

		onHandleClickConditionsClose = () => {

			this.setState({
				conditions: false,
			})
		}

		render() {
				const {	conditions } = this.state
				return (
					<div className='bodyColor'>
						<MediaQuery maxWidth={499}>
							<HeaderMobile click = {this.onHandleClickConditions}/>
                            <SliderMobile />
                            <Section2Mobile />
                            <Section4Mobile />
                            <SectionAdditionMobile />
                            <Section5Mobile />
                            <Section6Mobile />
						</MediaQuery>
						<MediaQuery minWidth={500}>
							<Header click = {this.onHandleClickConditions}/>
							<SimpleSlider />
                            <Section2 />
                            <Section4 />
							<SectionAddition />
                            <Section5 />
							<Section6 />
						</MediaQuery>
                        {conditions ?
							<Conditions close = {this.onHandleClickConditionsClose}/> : null}



					</div>
				)
		}
}

export default App;