import React from 'react'
import { connect } from 'react-redux'
import List from './List'

const Lists = (props) => {
const {lists } = props;
console.log(lists);
    return (
        <div>
            <h2>Lists!!!!</h2>
            {lists.map(list => {
                return (
                    <List key={Math.random} list={list}/>
                )
            })}
        </div>
    )
}

const mapStateToProps = state => {
    return ({
        lists: state.lists
    })
  }

export default connect(mapStateToProps)(Lists)