webpackJsonp([7],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React, ReactDOM) {'use strict';

	var _util = __webpack_require__(672);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * 新闻列表
	 */
	var NewsList = React.createClass({
		displayName: 'NewsList',
		getInitialState: function getInitialState() {
			return {
				'listData': []
			};
		},
		componentDidMount: function componentDidMount() {
			_util2.default.ajaxGet('http://news-at.zhihu.com/api/4/news/latest', null, this.showList);
		},
		showList: function showList(data) {
			console.log(data);
			this.setState({
				'listData': data.stories
			});
		},
		selectNews: function selectNews(id) {
			this.props.selectNews(id);
		},
		render: function render() {
			return React.createElement(
				'ul',
				null,
				this.state.listData && this.state.listData.map(function (item, index) {
					return React.createElement(
						'li',
						{ key: index },
						React.createElement(
							'a',
							{ href: 'javascript:void(0)', onClick: this.selectNews.bind(this, item.id) },
							item.title
						)
					);
				}.bind(this))
			);
		}
	});

	/**
	 * 新闻详情
	 */
	var NewsInfo = React.createClass({
		displayName: 'NewsInfo',
		getInitialState: function getInitialState() {
			return {
				'data': {
					'title': '',
					'body': ''
				}
			};
		},
		componentDidMount: function componentDidMount() {
			_util2.default.ajaxGet('http://news-at.zhihu.com/api/4/news/' + this.props.id, null, this.showInfo);
		},
		showInfo: function showInfo(data) {
			//console.log(data);
			this.setState({
				'data': data
			});
		},
		render: function render() {
			var bodyHtml = {
				__html: this.state.data.body
			};
			return React.createElement(
				'div',
				null,
				React.createElement(
					'h3',
					null,
					this.state.data.title
				),
				React.createElement('div', { dangerouslySetInnerHTML: bodyHtml })
			);
		}
	});

	/**
	 * 知乎信息展示
	 */
	var ZhiHu = React.createClass({
		displayName: 'ZhiHu',
		getInitialState: function getInitialState() {
			return {
				'isList': true,
				'selectNews': ''
			};
		},
		toggleIsList: function toggleIsList(type) {
			this.setState({
				'isList': type === 'list'
			});
		},
		getSelectedNews: function getSelectedNews(id) {
			this.setState({
				'isList': false,
				'selectNews': id
			});
		},
		render: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'div',
					null,
					React.createElement(
						'span',
						null,
						React.createElement(
							'a',
							{ href: '#', onClick: this.toggleIsList.bind(this, 'list') },
							'列表'
						)
					),
					'  |  ',
					React.createElement(
						'span',
						null,
						React.createElement(
							'a',
							{ href: '#', onClick: this.toggleIsList.bind(this, 'info') },
							'详情'
						)
					)
				),
				React.createElement(
					'div',
					null,
					this.state.isList ? React.createElement(NewsList, { selectNews: this.getSelectedNews }) : React.createElement(NewsInfo, { id: this.state.selectNews })
				)
			);
		}
	});

	ReactDOM.render(React.createElement(ZhiHu, null), document.getElementById('root'));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(158)))

/***/ }
]);