import React, {Component} from 'react'
import ModuleList2 from "./ModuleList2";

export default class CourseEditor extends Component {
    constructor(props) {
        super(props);

        // retrieve courseId from the URL path parameter 'courseId'
        // the props.match.params is part of the Route library which
        // parses the URL path and names the parameters and creates
        // the params map
        const courseId = this.props.match.params.courseId;

        // use courseId to find the course object from the
        // courses array passed in as a property
        const course = this.props.courses.find(
            course => course.id === courseId);

        this.state = {
            course: course
        }
    }

    render() {
        return(
            <div>
                <h2>Course Editor:
                    {this.state.course.title}
                    ({this.props.match.params.courseId})
                </h2>
                <div className="row">
                    <div className="col-4">
                        <ModuleList2
                            modules={this.state.course.modules}/>
                    </div>
                </div>
            </div>
        )
    }
}
