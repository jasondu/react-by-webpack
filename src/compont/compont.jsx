var React = require('react');
var ReactDOM = require('react-dom');


var Compont = React.createClass({
    getInitialState: function () {
        return {
            backColor: 'red',
            list: [
                {text: '选项一', value: '1'},
                {text: '选项二', value: '2'},
            ]
        };
    },

    onClick: function () {
        this.setState({
            backColor: 'red'
        });
    },

    onAdd: function (e) {
        e.preventDefault();
        var refs = this.refs;
        var refName = ReactDOM.findDOMNode(refs.name);
        if (refName.value === '') {
            alert('请输入');
            return;
        }
        var list = this.state.list;
        list.push({
            text: refName.value,
            value: refName.value
        });
        this.setState({
            list: list
        });
    },
    render: function() {
        var list = this.state.list.map(function (obj) {
            return (
                <li data-value={obj.value} key={obj.value}>{obj.text}</li>
            );
        });
        return (
            <div>
                <ul>{list}</ul>
                <form onSubmit={this.onAdd}>
                    <input type="text" ref="name"/>
                    <input type="submit" value="提交"/>
                </form>
            </div>
        );
    }
});

module.exports = Compont;
