import React from 'react';
import ReactDom from 'react-dom';
import NewComponent from './new';
import {Router, Route} from 'react-router';

class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			text: '',
			timer: 0,
			array: [
				{
					id: 1,
					text: 'item 1'
				},
				{
					id: 2,
					text: 'item 2'
				},
				{
					id: 3,
					text: 'item 3'
				}
			]
		}
	}
	componentWillMount(){
		setInterval(() => {
			if (this.state.timer > 1) return false;
			this.setState({timer: this.state.timer+1});
		}, 100);
	}
	inputOnChange(event){
		console.log('Event:', event.target.value);
		const text = event.target.value;
		this.setState({text});
	}
	static propTypes = {
		btnText: React.PropTypes.string.isRequired,
		h1text: React.PropTypes.string.isRequired,
		newArray: React.PropTypes.array
	}
	btnOnClick(event){
		console.log('Button clicked', event.target);
	}
	render(){
		return (
			<div className="test" style={{backgroundColor: '#f5f5f5'}}>
				<h1>{this.props.h1text}</h1>
				<h3>It's really works!</h3>
				<input type="text" value={this.state.text} onChange={this.inputOnChange.bind(this)}/>
				<button onClick={this.btnOnClick}>{this.props.children} {this.props.btnText}</button>
				{this.state.timer < 50 ? <NewComponent array={this.state.array} text="hello from NewComponent" />: null}
				<p>{this.state.timer}</p>
			</div>
		);
	}
}
ReactDom.render(
	<App btnText='click on me' h1text='App works!!!' newArray={[1, 2, 3]}></App>,
	document.getElementById('app')
);