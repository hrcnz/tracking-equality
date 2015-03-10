var React 		= require('react')
var Fluxxor 	= require('fluxxor')
var Router		= require('react-router')
var State  		= Router.State

module.exports = React.createClass({

	mixins: [
		State
	],

	render: function () {
		var params 	= this.getParams() //not used
		var data 		= this.flux.stores.indicators.query(params)
		
		return (
			<ul>
				{
					data.map(function (d) {
						return <li>{d.value}</li>
					})
				}
			</ul>

		)

	},

	componentDidMount: function () {

	}




})