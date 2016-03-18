webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(158);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _jquery = __webpack_require__(159);

	var _jquery2 = _interopRequireDefault(_jquery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var data = {};

	data.list1 = [{
		'author': 'jintoongyao',
		'age': '28'
	}, {
		'author': 'wangfang',
		'age': '30'
	}, {
		'author': 'lichangmign',
		'age': '24'
	}];

	data.list2 = [{
		'author': '乔布斯',
		'age': '28'
	}, {
		'author': '比尔盖茨',
		'age': '30'
	}, {
		'author': '巴菲特',
		'age': '24'
	}];

	data.title = 'hello world';

	var Title = _react2.default.createClass({
		displayName: 'Title',

		render: function render() {
			return _react2.default.createElement(
				'h3',
				{ onClick: this.props.clickHandler },
				this.props.title
			);
		}
	});

	var NameList = _react2.default.createClass({
		displayName: 'NameList',

		render: function render() {
			return _react2.default.createElement(
				'ul',
				null,
				this.props.data.map(function (item, index) {
					return _react2.default.createElement(
						'li',
						{ key: index },
						item.author
					);
				})
			);
		}
	});

	// this.props
	// this.state
	var DemoList = _react2.default.createClass({
		displayName: 'DemoList',

		getInitialState: function getInitialState() {
			return {
				dataList: data.list1,
				name: 'hahaha'
			};
		},

		componentDidMount: function componentDidMount() {
			this.loadData();
		},

		loadData: function loadData() {
			_jquery2.default.ajax({
				url: '/api/comments',
				success: this.loadSuccess,
				error: this.loadError
			});
		},

		loadError: function loadError(e) {
			console.log(e);
		},

		loadSuccess: function loadSuccess(successData) {
			this.setState({
				dataList: successData
			});
		},

		clickHandler: function clickHandler() {
			this.setState({
				dataList: data.list2
			});
		},

		render: function render() {
			return _react2.default.createElement(
				'span',
				null,
				_react2.default.createElement(Title, { clickHandler: this.clickHandler, title: '哈哈哈' }),
				_react2.default.createElement(NameList, { data: this.state.dataList })
			);
		}
	});

	_reactDom2.default.render(_react2.default.createElement(DemoList, null), document.getElementById('root'));

/***/ }
]);