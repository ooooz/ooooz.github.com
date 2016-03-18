import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

let data = {};

data.list1 = [
	{
		'author': 'jintoongyao',
		'age': '28'
	},
	{
		'author': 'wangfang',
		'age': '30'
	},
	{
		'author': 'lichangmign',
		'age': '24'
	}
];

data.list2 = [
	{
		'author': '乔布斯',
		'age': '28'
	},
	{
		'author': '比尔盖茨',
		'age': '30'
	},
	{
		'author': '巴菲特',
		'age': '24'
	}
];

data.title = 'hello world';

let Title = React.createClass({
	render: function() {
		return (
			<h3 onClick={this.props.clickHandler}>{this.props.title}</h3>
		);
	}
});

let NameList = React.createClass({
	render: function() {
		return (
			<ul>
				{this.props.data.map(function(item, index) {
					return (
						<li key={index}>
							{item.author}
						</li>
					);
				})}
			</ul>
		);
	}
});

// this.props
// this.state
let DemoList = React.createClass({
	getInitialState: function() {
		return {
			dataList: data.list1,
			name: 'hahaha'
		};
	},

	componentDidMount: function() {
		this.loadData();
	},

	loadData: function() {
		$.ajax({
			url: '/api/comments',
			success: this.loadSuccess,
			error: this.loadError
		});
	},

	loadError: function(e) {
		console.log(e);
	},

	loadSuccess: function(successData) {
		this.setState({
			dataList: successData
		});
	},

	clickHandler: function() {
		this.setState({
			dataList: data.list2
		});
	},

	render: function() {
		return (
			<span>
				<Title clickHandler={this.clickHandler} title="哈哈哈"/>
				<NameList data={this.state.dataList} />
			</span>
		);
	}
});

ReactDOM.render(<DemoList />, document.getElementById('root'));
