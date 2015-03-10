var React 		= require('react')
var Fluxxor 	= require('fluxxor')
var Router		= require('react-router')
var State  		= Router.State

module.exports = React.createClass({

	mixins: [
		State
	],


	render: function () {
		var data = this.flux.stores.indicators.getData()


		return (
			<ul>
				{

				}
			</ul>

		)

	},

	componentDidMount: function () {

	}




})