import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { getSmurfs } from '../actions';
import AddSmurf from '../components/AddSmurf';



const App = (props) =>  {
    return (
      <div className="App">
        <h1>The Village People</h1>
        {!props.App && !props.isFetching && <p>See the Village!</p>}
        <div className="village">
          {props.smurfs.map(info => {
            return (
              <div class="card" style={{width: '18rem'}}>
                <div class="card-body">
                  <h5 class="card-title">Name: {info.name}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Age: {info.age}</h6>
                  <p class="card-text">Height: {info.height}</p>
                </div>
              </div>
            )
          })}
        </div>
        <button className="add-btn" onClick={props.getSmurfs}>Unveil Smurfs</button>
        <AddSmurf />
      </div>
    );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetching
  }
}

export default connect(mapStateToProps, { getSmurfs })(App);
