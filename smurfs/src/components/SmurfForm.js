import React, { useState } from 'react'
import { connect } from "react-redux"
import { addSmurfs } from "../actions"
import './App.css';

const SmurfForm = (props) => {
    const { addSmurfs } = props
    const [newSmurf, setNewSmurf] = useState({
        name: '',
        age: '',
        height: ''
    })

    const handleChanges = e => {
        setNewSmurf({ ...newSmurf, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        addSmurfs(newSmurf)
        console.log(newSmurf)

    }

    return (
        <div className="smurf-form">
            <h2>Add Smurf To The Village</h2>
            <form onSubmit={handleSubmit}>
                <label>Name: 
                <input type="text" onChange={handleChanges} name="name" value={newSmurf.name}/>
                </label>
                <label>Age: 
                <input type="text" onChange={handleChanges} name="age" value={newSmurf.age}/>
                </label>
                <label>Height: 
                <input type="text" onChange={handleChanges} name="height" value={newSmurf.height}/>
                </label>
                <button>ADD SMURF</button>
            </form>
        </div>
    )
}

export default connect(null, {addSmurfs})(SmurfForm);


// const SearchForm = (props) => {
//     const [searchTerm, setSearchTerm] = useState("react");
  
//     const handleChanges = (e) => {
//       setSearchTerm(e.target.value);
//     };
  
//     const handleSubmit = (e) => {
//       e.preventDefault();
//       props.setUrl(
//         `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${searchTerm}`
//       );
//     };

//     return (
//       <form onSubmit={handleSubmit}>
//         <input type="text" onChange={handleChanges} value={searchTerm} />
//         <button>{props.isLoading ? renderLoader() : "Search"}</button>
//       </form>
//     );
//   };
  




//   const mapStateToProps = (state) => {
//     return {
//       isLoading: state.isLoading
//     };
//   };
  
//   export default connect(mapStateToProps, {})(SearchForm);