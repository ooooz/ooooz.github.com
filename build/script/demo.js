webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React, ReactDOM) {'use strict';

	var _components = __webpack_require__(160);

	var _rcProgress = __webpack_require__(676);

	/**
	 * Copyright 2015-2016 Inc.
	 * All rights reserved.
	 * created by JinTongYao @ 2016-03-10
	 * demo main js
	 */


	var circleContainerStyle = {
		'width': '250px',
		'height': '250px'
	};

	// 饼状图数据
	var pieOption = {
		title: {
			text: '饼状图示例'
		},
		series: [{
			name: '访问来源',
			type: 'pie',
			radius: '55%',
			data: [{ value: 400, name: '搜索引擎' }, { value: 335, name: '直接访问' }, { value: 310, name: '邮件营销' }, { value: 274, name: '联盟广告' }, { value: 235, name: '视频广告' }]
		}]
	};

	// 柱状图数据
	var barOption = {
		title: {
			text: '柱状图示例'
		},
		tooltip: {},
		legend: {
			data: ['销量']
		},
		xAxis: {
			data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
		},
		yAxis: {},
		series: [{
			name: '销量',
			type: 'bar',
			data: [5, 20, 36, 10, 10, 20]
		}]
	};

	var lineOption = {
		title: {
			text: '血压统计',
			subtext: '金同尧'
		},
		tooltip: {
			trigger: 'axis'
		},
		legend: {
			data: ['高压', '低压']
		},
		toolbox: {
			show: true,
			feature: {
				dataZoom: {},
				dataView: { readOnly: false },
				magicType: { type: ['line', 'bar'] },
				restore: {},
				saveAsImage: {}
			}
		},
		xAxis: {
			type: 'category',
			boundaryGap: false,
			data: ['2-01', '2-7', '2-14', '2-21', '2-27', '3-6', '3-13']
		},
		yAxis: {
			type: 'value',
			axisLabel: {
				formatter: '{value}'
			}
		},
		series: [{
			name: '高压',
			type: 'line',
			data: [111, 120, 115, 123, 121, 113, 120],
			markPoint: {
				data: [{ type: 'max', name: '最大值' }, { type: 'min', name: '最小值' }]
			},
			markLine: {
				data: [{ type: 'average', name: '平均值' }]
			}
		}, {
			name: '低压',
			type: 'line',
			data: [80, 70, 72, 82, 69, 72, 77],
			markPoint: {
				data: [{ name: '周最低', value: -2, xAxis: 1, yAxis: -1.5 }]
			},
			markLine: {
				data: [{ type: 'average', name: '平均值' }]
			}
		}]
	};

	var Demo = React.createClass({
		displayName: 'Demo',
		print: function (_print) {
			function print() {
				return _print.apply(this, arguments);
			}

			print.toString = function () {
				return _print.toString();
			};

			return print;
		}(function () {
			print();
		}),
		render: function render() {
			return React.createElement(
				'span',
				null,
				React.createElement(_components.Header, null),
				React.createElement(
					'h3',
					null,
					'打印'
				),
				React.createElement(
					'div',
					{ onClick: this.print },
					React.createElement(
						'a',
						{ href: 'javascript:void(0)' },
						'打印'
					)
				),
				React.createElement(
					'h3',
					null,
					'日历'
				),
				React.createElement(_components.DateSelector, null),
				React.createElement(
					'h3',
					null,
					'圆形进度条'
				),
				React.createElement(
					'div',
					{ style: circleContainerStyle },
					React.createElement(_rcProgress.Circle, { percent: '72', trailWidth: '2', strokeWidth: '2', strokeColor: '#3FC7FA' })
				),
				React.createElement(_components.LoadingSpinner, { type: 'folding-cube', width: '40', height: '40', backgroundColor: '#99CC99' }),
				React.createElement(
					'h3',
					null,
					'图表'
				),
				React.createElement(
					'div',
					null,
					React.createElement(_components.SeriesPieChart, { option: pieOption })
				),
				React.createElement(
					'div',
					null,
					React.createElement(_components.SeriesBarChart, { option: barOption })
				),
				React.createElement(
					'div',
					null,
					React.createElement(_components.SeriesLineChart, { option: lineOption })
				),
				React.createElement(_components.Footer, null)
			);
		}
	});

	ReactDOM.render(React.createElement(Demo, null), document.getElementById('root'));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(158)))

/***/ },

/***/ 676:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(677);

/***/ },

/***/ 677:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var assign = __webpack_require__(678);
	var React = __webpack_require__(1);
	var defaultProps = {
	  strokeWidth: 1,
	  strokeColor: '#3FC7FA',
	  trailWidth: 1,
	  trailColor: '#D9D9D9'
	};

	var Line = React.createClass({
	  displayName: 'Line',

	  render: function render() {
	    var props = assign({}, this.props);
	    var pathStyle = {
	      'strokeDasharray': '100px, 100px',
	      'strokeDashoffset': 100 - props.percent + 'px',
	      'transition': 'stroke-dashoffset 0.6s ease 0s, stroke 0.6s linear'
	    };

	    ['strokeWidth', 'strokeColor', 'trailWidth', 'trailColor'].forEach(function (item) {
	      if (item === 'trailWidth' && !props.trailWidth && props.strokeWidth) {
	        props.trailWidth = props.strokeWidth;
	        return;
	      }
	      if (item === 'strokeWidth' && props.strokeWidth && (!parseFloat(props.strokeWidth) || parseFloat(props.strokeWidth) > 100 || parseFloat(props.strokeWidth) < 0)) {
	        props[item] = defaultProps[item];
	        return;
	      }
	      if (!props[item]) {
	        props[item] = defaultProps[item];
	      }
	    });

	    var strokeWidth = props.strokeWidth;
	    var center = strokeWidth / 2;
	    var right = 100 - strokeWidth / 2;
	    var pathString = 'M ' + center + ',' + center + ' L ' + right + ',' + center;
	    var viewBoxString = '0 0 100 ' + strokeWidth;

	    return React.createElement(
	      'svg',
	      { className: "rc-progress-line", viewBox: viewBoxString, preserveAspectRatio: "none" },
	      React.createElement('path', { className: "rc-progress-line-trail", d: pathString, strokeLinecap: "round",
	        stroke: props.trailColor, strokeWidth: props.trailWidth, fillOpacity: "0" }),
	      React.createElement('path', { className: "rc-progress-line-path", d: pathString, strokeLinecap: "round",
	        stroke: props.strokeColor, strokeWidth: props.strokeWidth, fillOpacity: "0", style: pathStyle })
	    );
	  }
	});

	var Circle = React.createClass({
	  displayName: 'Circle',

	  render: function render() {
	    var props = assign({}, this.props);
	    var strokeWidth = props.strokeWidth;
	    var radius = 50 - strokeWidth / 2;
	    var pathString = 'M 50,50 m 0,-' + radius + '\n     a ' + radius + ',' + radius + ' 0 1 1 0,' + 2 * radius + '\n     a ' + radius + ',' + radius + ' 0 1 1 0,-' + 2 * radius;
	    var len = Math.PI * 2 * radius;
	    var pathStyle = {
	      'strokeDasharray': len + 'px ' + len + 'px',
	      'strokeDashoffset': (100 - props.percent) / 100 * len + 'px',
	      'transition': 'stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease'
	    };
	    ['strokeWidth', 'strokeColor', 'trailWidth', 'trailColor'].forEach(function (item) {
	      if (item === 'trailWidth' && !props.trailWidth && props.strokeWidth) {
	        props.trailWidth = props.strokeWidth;
	        return;
	      }
	      if (!props[item]) {
	        props[item] = defaultProps[item];
	      }
	    });

	    return React.createElement(
	      'svg',
	      { className: 'rc-progress-circle', viewBox: '0 0 100 100' },
	      React.createElement('path', { className: 'rc-progress-circle-trail', d: pathString, stroke: props.trailColor,
	        strokeWidth: props.trailWidth, fillOpacity: '0' }),
	      React.createElement('path', { className: 'rc-progress-circle-path', d: pathString, strokeLinecap: 'round',
	        stroke: props.strokeColor, strokeWidth: props.strokeWidth, fillOpacity: '0', style: pathStyle })
	    );
	  }
	});

	module.exports = {
	  Line: Line,
	  Circle: Circle
	};

/***/ },

/***/ 678:
/***/ function(module, exports) {

	/* eslint-disable no-unused-vars */
	'use strict';
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	module.exports = Object.assign || function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ }

});