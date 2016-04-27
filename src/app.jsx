var React = require('react');
var ReactDOM = require('react-dom');

var Compont = require('./compont/compont.jsx');
var Dropdown = require('./compont/dropdown.jsx');

ReactDOM.render(
	<Compont
		value={[{value: '1', text: '选项一'}, {value: '2', text: '选项二'}]} 
		checked={true}/>,
	document.getElementById('main')
);
