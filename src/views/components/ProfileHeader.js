import React, { Component } from "react";

export default class ProfileHeader extends Component {
	render () {
		console.log(this.props)
		const commitments = this.props.info.commitments ? this.props.info.commitments : []
		let committed = {};
		commitments.forEach(commitment => committed[commitment.kind] = commitment.amount)
    return (
    <div>
      <span className="background-img position-absolute"></span>
      <div className="container">
			<div className="flex-wrapper flex-center">


				<h1 className="h1 dash text-yellow col-4 text-white z-2 position-relative">Thanks <span className="heart text-yellow">&#9829;</span> <br/>
				  <span className="text-white subtitle">For Continuing to <strong>ShowUp</strong></span></h1>


			  <div className="commitments background-yellow col-6 text-grey z-2">
				<p className="intro">
				  <strong>My Commitments</strong>
				</p>

				<div className="flex-wrapper">
					{committed.money && (
				  <div>
					<span className="number-large">${committed.money}</span>
					<p>every month</p>
				  </div>
					)}

					{committed.time && (
				  <div>
					<span className="number-large">${committed.time} min</span>
					<p>every day</p>
				  </div>
					)}
					</div>

				<a href="/account" className="small-text italic text-grey margin-bottom">edit</a>

			  </div>

			</div>
		  </div>
	  </div>
    )
  }
}
