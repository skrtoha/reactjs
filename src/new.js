import React from 'react';
import ReactDom from 'react-dom';

export default class NewComponent extends React.Component{
	constructor(props){
		super(props);
		console.log('Constructor');
	}
	componentWillMount(){
		console.log('componentWillMount');
	}
	componentDidMount(){
		console.log('componentDidMount');
	}
	componentWillUnmount(){
		console.log('componentWillUnmount');
	}
	renderItem(item, idx){
		return (
			<li key={item.id}><b>{item.text}</b> - {item.id}</li> 
		)
		console.log('Item:', item);
		console.log('Index:', idx);
	}
	render(){
		console.log('This:', this.props.array);
		return(
			<div style={{background: 'red'}}>
				<h3>New component</h3>
				<p>{this.props.text}</p>
				<ul>
					{this.props.array.map(this.renderItem.bind(this))};
				</ul>
			</div>
		)
	}
}