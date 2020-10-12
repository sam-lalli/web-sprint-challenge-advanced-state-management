import React from 'react'
import { connect } from "react-redux"
import './App.css';

const SmurfList = (props) => {

    return (
        <div className="smurf-list">
            {props.smurf.map((item, index) => (
                <div key={index}>
                    <h3>{item.name}</h3>
                    <p>{item.age}</p>
                    <p>{item.height}</p>
                </div>
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurf: state.smurf
    }
}

export default connect(mapStateToProps, {})(SmurfList);