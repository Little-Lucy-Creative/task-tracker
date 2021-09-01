import React from 'react'
import { connect } from 'react-redux'

const TaskList = (props) => {

    return (
        <div>
        </div>
    )
}

const mapStateToProps = state => {
    return ({
        tasks: state.tasks
    })
  }

export default connect(mapStateToProps)(TaskList)