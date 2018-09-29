import React from 'react'

class WidgetList extends React.Component {
    constructor(props) {
        super(props);
        props.init(props.widgetsInit, props.topic)
    }

    componentDidUpdate() {
        this.props.init(this.props.widgetsInit, this.props.topic)
    }
    render() {
        return(
            <ul className="list-group">
                {
                    this.props.widgets.map((widget, index) =>
                        <li key={index}
                            className="list-group-item">
                            {widget.title}
                            <button
                                onClick={() => this.props.deleteWidget(widget)}
                                className="btn btn-danger float-right">
                                Delete
                            </button>
                        </li>
                    )
                }
            </ul>
        )
    }
}
export default WidgetList