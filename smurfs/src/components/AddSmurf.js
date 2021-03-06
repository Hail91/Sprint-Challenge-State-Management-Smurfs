import React, { useState } from 'react';
import { addSmurfs } from '../actions';
import { connect } from 'react-redux';

const AddSmurf = (props) => {
    const [smurf, newSmurf] = useState({
        name: '',
        age: '',
        height: ''
    })

    const handleChanges = event => {
        newSmurf({...smurf, [event.target.name]: event.target.value });
    };

    const handleSubmit = event => {
        event.preventDefault();
        const addSmurfData = {
            name: smurf.name,
            age: smurf.age,
            height: smurf.height
        };
        props.addSmurfs(addSmurfData);
    }
    
    return (
        <div className="add-smf-form">
           <form onSubmit={handleSubmit}>
               <input 
               className="input"
               type='text'
               name='name'
               value={smurf.name}
               onChange={handleChanges}
               placeholder='Add name here'
               />
               <input
                className="input"
                type='text'
                name='age'
                value={smurf.age}
                onChange={handleChanges}
                placeholder='Add age here'
               />
               <input 
               className="input"
               type='text'
               name='height'
               value={smurf.height}
               onChange={handleChanges}
               placeholder='Add height here'
               />
               <button type="button" onClick={handleSubmit} className="btn btn-primary add-btn-2">Add Villager</button>
           </form> 
        </div>
    )
};

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isFetching: state.isFetching
    }
}

export default connect(mapStateToProps, { addSmurfs })(AddSmurf);

