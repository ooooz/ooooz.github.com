webpackJsonp([5],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React, ReactDOM) {'use strict';

	var _lee = __webpack_require__(679);

	var _lee2 = _interopRequireDefault(_lee);

	var _wang = __webpack_require__(680);

	var _wang2 = _interopRequireDefault(_wang);

	var _xing = __webpack_require__(681);

	var _xing2 = _interopRequireDefault(_xing);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Demo = React.createClass({
		displayName: 'Demo',
		getInitialState: function getInitialState() {
			return {
				'select': 'wang'
			};
		},
		changeComponent: function changeComponent(name) {
			this.setState({
				'select': name
			});
		},


		render: function render() {
			var testCase = void 0;
			if (this.state.select === 'xing') {
				testCase = React.createElement(_xing2.default, null);
			} else if (this.state.select === 'lee') {
				testCase = React.createElement(_lee2.default, null);
			} else {
				testCase = React.createElement(_wang2.default, null);
			}
			return React.createElement(
				'div',
				null,
				React.createElement(
					'span',
					null,
					React.createElement(
						'a',
						{ href: '#', onClick: this.changeComponent.bind(this, 'wang') },
						'wang'
					)
				),
				'  |  ',
				React.createElement(
					'span',
					null,
					React.createElement(
						'a',
						{ href: '#', onClick: this.changeComponent.bind(this, 'lee') },
						'lee'
					)
				),
				'  |  ',
				React.createElement(
					'span',
					null,
					React.createElement(
						'a',
						{ href: '#', onClick: this.changeComponent.bind(this, 'xing') },
						'xing'
					)
				),
				React.createElement(
					'div',
					null,
					testCase
				)
			);
		}
	}); /**
	     * Copyright 2015-2016 Inc.
	     * All rights reserved.
	     * created by JinTongYao @ 2016-03-10
	     *
	     */


	ReactDOM.render(React.createElement(Demo, null), document.getElementById('root'));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(158)))

/***/ },

/***/ 679:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	/**
	 * Copyright 2015-2016, 百年视野教育, Inc.
	 * All rights reserved.
	 * created by JinTongYao @ 2016-03-05
	 *
	 */
	var Lee = React.createClass({
		displayName: "Lee",

		render: function render() {
			return React.createElement(
				"div",
				null,
				"HelloWorld"
			);
		}
	});

	exports.default = Lee;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },

/***/ 680:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// 行列表
	//let LineList = React.createClass({
	//	render: function() {
	//		return (
	//			<ul>
	//				{this.props.data.map(function(item, index) {
	//					return (
	//						<li key={index}>
	//							{item.nom}
	//						</li>
	//					);
	//				})}
	//			</ul>
	//		);
	//	}
	//});
	//
	//let DomeList = React.createClass({
	//
	//	getInitialState: function() {
	//		return {
	//			lineList: [],
	//			maxNo: 0,
	//			customize: ''
	//		};
	//	},
	//
	//	clickHandlerInsert: function() {
	//		// 判断文本框是否有值,有值则使用文本框的值,没有值则使用默认数字
	//		if (this.state.customize === '') {
	//			this.state.lineList.push({'nom': (this.state.maxNo + 1)});
	//		} else {
	//			this.state.lineList.push({'nom': (this.state.customize)});
	//		}
	//		this.setState({
	//			maxNo: this.state.customize === '' ? this.state.maxNo + 1 : this.state.maxNo
	//		});
	//	},
	//
	//	clickHandlerRemove: function() {
	//		this.state.lineList.pop();
	//		this.setState({
	//			maxNo: this.state.maxNo <= 1 ? 0 : this.state.maxNo - 1
	//		});
	//	},
	//
	//	// 文本框的回调方法
	//	textOnchange: function(even) {
	//		this.setState({
	//			customize: even.target.value
	//		});
	//	},
	//
	//	render: function() {
	//		console.log(this.state.maxNo);
	//		return (
	//			<span>
	//                <span>
	//                    <input onClick={this.clickHandlerInsert} type="button" value="插入一行!"/>
	//                    <input onClick={this.clickHandlerRemove} type="button" value="删除一行!"/>
	//                    <input value={this.state.customize} onChange={this.textOnchange}/>
	//                </span>
	//                <span>
	//                    <LineList data={this.state.lineList}/>
	//                </span>
	//            </span>
	//		);
	//	}
	//});
	//
	////ReactDom.render(<DomeList/>,document.getElementById("insertRow"));
	//
	//// 级联菜单
	//let province = [
	//	{'name': '河北省', 'id': '1'},
	//	{'name': '内蒙古自治区', 'id': '2'},
	//	{'name': '山东省', 'id': '3'}
	//];
	//
	//let city = [
	//	{'proId': '1', 'name': '石家庄市', 'id': '1001'},
	//	{'proId': '1', 'name': '唐山市', 'id': '1002'},
	//	{'proId': '2', 'name': '呼和浩特', 'id': '2001'},
	//	{'proId': '3', 'name': '济南', 'id': '3001'},
	//	{'proId': '3', 'name': '青岛', 'id': '3002'},
	//	{'proId': '3', 'name': '潍坊', 'id': '3003'}
	//];
	//
	//let ProvinceList = React.createClass({
	//	handleChange: function(event) {
	//		this.props.onChange(event.target.value);
	//	},
	//	render: function() {
	//		return (
	//			<select defaultValue={this.props.select} onChange={this.handleChange}>
	//				{
	//					this.props.data.map(function(item, index) {
	//						return (
	//							<option value={item.id} key={index}>{item.name}</option>
	//						);
	//					})
	//				}
	//			</select>
	//		);
	//	}
	//});
	//
	//let CityList = React.createClass({
	//	render: function() {
	//		return (
	//			<select>
	//				{
	//					city.filter(function(item) {
	//						return (
	//							item.proId === this.props.select
	//						);
	//					}.bind(this)).map(function(item, index) {
	//						return (
	//							<option value={item.id} key={index}>{item.name}</option>
	//						);
	//					})
	//				}
	//			</select>
	//		);
	//	}
	//});
	//
	//let SelectedList = React.createClass({
	//	getInitialState: function() {
	//		return ({
	//			selectProvince: '1'
	//		});
	//	},
	//
	//	onProvinceChange(select) {
	//		this.setState({
	//			selectProvince: select
	//		});
	//	},
	//
	//	render: function() {
	//		return (
	//			<span>
	//				<ProvinceList onChange={this.onProvinceChange} select={this.state.selectProvince} data={province}/>
	//				<CityList select={this.state.selectProvince}/>
	//            </span>
	//		);
	//	}
	//});

	//export default SelectedList;

	//let goodsList = [
	//	{'category': 'Sporting Goods', 'price': '$49.99', 'stocked': true, 'name': 'Football'},
	//	{'category': 'Sporting Goods', 'price': '$9.99', 'stocked': true, 'name': 'Baseball'},
	//	{'category': 'Sporting Goods', 'price': '$29.99', 'stocked': false, 'name': 'Basketball'},
	//	{'category': 'Electronics', 'price': '$99.99', 'stocked': true, 'name': 'iPod Touch'},
	//	{'category': 'Electronics', 'price': '$399.99', 'stocked': false, 'name': 'iPhone 5'},
	//	{'category': 'Electronics', 'price': '$199.99', 'stocked': true, 'name': 'Nexus 7'}
	//];
	//
	//// 为每个 分类（ category ） 展示一列表头
	//let ProductCategoryRow = React.createClass({
	//	render: function() {
	//		return (
	//			<tr>
	//				<th colSpan="2">{this.props.goodsKind}</th>
	//			</tr>
	//		);
	//	}
	//});
	//
	////  为每个 产品（ product ） 展示一列
	//let ProductRow = React.createClass({
	//	render: function() {
	//		let redName = <span style={{color: 'red'}}>{this.props.product.name}</span>;
	//		let name = this.props.product.stocked ? this.props.product.name : redName;
	//		return (
	//			<tr>
	//				<td>{name}</td>
	//				<td>{this.props.product.price}</td>
	//			</tr>
	//		);
	//	}
	//});
	//
	//// 根据 用户输入（ user input ） 过滤和展示 数据集合（ data collection ）
	//let ProductTable = React.createClass({
	//	render: function() {
	//		let goodsKinds = [];
	//		let lastGoodsKind = '';
	//		this.props.goodsList.forEach(function(even) {
	//			// 不符合条件跳出本次循环
	//			if (even.name.indexOf(this.props.filterText) === -1 || (!even.stocked && this.props.inStockOnly)) {
	//				return;
	//			}
	//			if (even.category !== lastGoodsKind) {
	//				goodsKinds.push(<ProductCategoryRow goodsKind={even.category} key={even.category}/>);
	//				lastGoodsKind = even.category;
	//			}
	//			goodsKinds.push(<ProductRow product={even} key={even.name}/>);
	//		}.bind(this));
	//		console.log(goodsKinds);
	//		return (
	//			<table>
	//				<thead>
	//				<tr>
	//					<th>Name</th>
	//					<th>Price</th>
	//				</tr>
	//				</thead>
	//				<tbody>
	//				{goodsKinds}
	//				</tbody>
	//			</table>
	//		);
	//	}
	//});
	//
	//// 接受所有 用户输入（ user input ）
	//let SearchBar = React.createClass({
	//	textOrCheckboxOnchange: function() {
	//		this.props.textOnchange(
	//			this.refs.textInput.value,
	//			this.refs.inStockOnlyInput.checked
	//		);
	//	},
	//	render: function() {
	//		return (
	//			<form>
	//				<input
	//					type="text" placeholder="请输入..."
	//					value={this.props.filterText}
	//					onChange={this.textOrCheckboxOnchange}
	//					ref="textInput"
	//				/>
	//				<input
	//					type="checkbox"
	//					checked={this.props.inStockOnly}
	//					onChange={this.textOrCheckboxOnchange}
	//					ref="inStockOnlyInput"
	//				/>
	//			</form>
	//		);
	//	}
	//});
	//
	//// 包含整个例子的容器
	//let FilterableProductTable = React.createClass({
	//	getInitialState: function() {
	//		return ({
	//			filterText: '',
	//			inStockOnly: false
	//		});
	//	},
	//	textOnchange: function(filterText, inStockOnly) {
	//		this.setState({
	//			filterText: filterText,
	//			inStockOnly: inStockOnly
	//		});
	//	},
	//	render: function() {
	//		return (
	//			<div>
	//				<SearchBar
	//					filterText={this.state.filterText}
	//					inStockOnly={this.state.inStockOnly}
	//					textOnchange={this.textOnchange}
	//				/>
	//				<ProductTable
	//					filterText={this.state.filterText}
	//					inStockOnly={this.state.inStockOnly}
	//					goodsList={goodsList}
	//				/>
	//			</div>
	//		);
	//	}
	//});

	//export default FilterableProductTable;

	var Test1 = React.createClass({
		displayName: 'Test1',

		render: function render() {
			var a = 'name=wang;age=30;sex=man;address=Inspur;';
			//let arr;
			var reg = new RegExp('(^| )name=([^;]*)(;|$)');
			console.log(a.match(reg)[0]);
			console.log(a.match(reg)[1]);
			console.log(a.match(reg)[2]);
			return React.createElement('div', null);
		}
	});

	exports.default = Test1;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },

/***/ 681:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	/**
	 * Copyright 2015-2016, 百年视野教育, Inc.
	 * All rights reserved.
	 * created by JinTongYao @ 2016-03-06
	 *
	 */
	//import Util from '../../common/util';
	//
	//let HelloWorld = React.createClass({
	//	getInitialState() {
	//		return {
	//			'newsList': []
	//		};
	//	},
	//	componentDidMount() {
	//		Util.ajaxGet('http://news-at.zhihu.com/api/4/news/latest', null, this.dataLoaded);
	//	},
	//	dataLoaded(data) {
	//		this.setState({
	//			'newsList': data.stories
	//		});
	//	},
	//	render: function() {
	//		console.log('render');
	//		console.log('state', this.state);
	//		return (
	//			<div>
	//				<div>
	//					<ul>
	//						{this.state.newsList.map(function(item, index) {
	//							return (
	//								<li key={index}>{item.title}</li>
	//							);
	//						})}
	//					</ul>
	//				</div>
	//			</div>
	//		);
	//	}
	//});
	//
	//export default HelloWorld;

	var ShuaiGe = '周星宇';

	var NumberOne = React.createClass({
		displayName: 'NumberOne',

		render: function render() {
			return React.createElement(
				'h2',
				null,
				'zxx ',
				ShuaiGe
			);
		}
	});

	var Xing = React.createClass({
		displayName: 'Xing',

		render: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(NumberOne, null),
				React.createElement(
					'ul',
					null,
					React.createElement(
						'li',
						null,
						' ',
						React.createElement('numberOne', null),
						' '
					),
					React.createElement(
						'li',
						null,
						'21 ',
						ShuaiGe
					),
					React.createElement(
						'li',
						null,
						'3'
					)
				)
			);
		}
	});

	exports.default = Xing;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }

});