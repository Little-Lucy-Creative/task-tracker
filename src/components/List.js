import React from 'react'

const List = (props) => {
    const {list} = props
    return (
        <div>
            <h3> {list.list_name} </h3>
            { list.tasks.map(task => {
                return (
                    <h3> {task.task_name} </h3>
                )
            }) }
        </div>
    )
}

export default List
