let courses = [
    {
        id: '123',
        title: 'CS5200',
        modules: [
            {
                title: 'Week 1',
                lessons: [
                    {
                        title: 'Lesson 1',
                        topics: [
                            {
                                title: 'topic 1',
                                widgets: [
                                    {
                                        title: 'widget 1'
                                    },
                                    {
                                        title: 'widget 2'
                                    },
                                    {
                                        title: 'widget 3'
                                    }
                                ]
                            },
                            {
                                title: 'topic 2',
                                widgets: [
                                    {
                                        title: 'widget a'
                                    },
                                    {
                                        title: 'widget b'
                                    },
                                    {
                                        title: 'widget c'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        title: 'Lesson 2',
                        topics: [
                            {
                                title: 'topic a'
                            },
                            {
                                title: 'topic b'
                            },
                            {
                                title: 'topic c'
                            }
                        ]
                    },
                    {
                        title: 'Lesson 3'
                    }
                ]
            },
            {
                title: 'Week 2',
                lessons: [
                    {
                        title: 'Lesson A'
                    },
                    {
                        title: 'Lesson B'
                    },
                    {
                        title: 'Lesson C'
                    }
                ]
            },
            {
                title: 'Week 3',
                lessons: []
            }
        ]
    },
    {
        id: '234',
        title: 'CS5610',
        modules: []
    }
]

export default class CourseService {
    findAllCourses = () =>
        courses
    createCourse = course =>
        courses.push(course)
    deleteCourse = courseId =>
        courses = courses.filter(
            course => course.id !== courseId
        )
    deleteModule = moduleToDelete => {
        courses = courses.map(course => {
            course.modules = course.modules.filter(
                module => module !== moduleToDelete
            )
            return course;
        })
    }
}