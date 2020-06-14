import React, {Component} from "react"

export default class Action extends Component {

    render() {
        const {action} = this.props
        return (
            action ? (
            <div className = 'action-item'>
                <p className = 'tag'>{action.subject}</p>
                <h3 className = 'h3 text-grey'>
                  <a href = {action.url} target="_blank" rel="noopener noreferrer">
                    {action.title}</a>
                </h3>
                <p className = 'card-text'>{action.details}</p>
            </div>
            ) : ''
        )
    }
}
