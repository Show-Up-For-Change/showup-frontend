import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCustomActions } from "../../store/actions";
import Action from "../components/Action";

class ActionsContainer extends Component {
  constructor(props) {
    super(props);

    this.handleRefreshButton = this.handleRefreshButton.bind(this);
  }

  componentDidMount() {
    this.props.getActions();
  }

  handleBackButton() {
    // this.props.getActions();
  }

  render() {
    const { actions } = this.props;
    const handleBackButton = this.handleBackButton;
    console.log(actions);

    return (
      <div className="background-white container padding-vertical">
        <div className="flex-wrapper actions-list"></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    actions: state.actions.actions,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getActions: () => dispatch(fetchCustomActions()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ActionsContainer);
