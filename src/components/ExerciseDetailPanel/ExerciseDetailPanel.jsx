import './ExerciseDetailPanel.css';
import Popup from 'reactjs-popup';
import EditExerciseForm from '../EditExerciseForm/EditExerciseForm';
import ExerciseDetailTop from '../ExerciseDetailTop/ExerciseDetailTop';

export default function ExerciseDetailPanel({activeExercise, exercises, handleUpdateExercise}) {

    // i want the form to update an existing exercise to pop up and replace the two detail panels if the "update" button is selected
    // must incorporate a new hook -- "updateExercise" -- into the existing ternary on this page...

    return (
      <>
        { activeExercise.name ? 
          <div className="detail-container">
            
            <ExerciseDetailTop activeExercise={activeExercise} exercises={exercises} handleUpdateExercise={handleUpdateExercise}/>
            
            <hr id="b"/>

            {/*<ExerciseDetailBottom />*/}

            <div className="detail-log-graph-container">

                  <div className="log-graph">
                    <br/><br/><br/><br/>
                    <h1>recent log list / graph goes here</h1>
                  </div>
                  <div className="detail-log-graph-btns">
                    <button className="gl-btns">RECENT LOGS</button>
                    <button className="gl-btns">GRAPH</button>
                  </div>
            </div>


          </div>
 


        : ''}
      </>
    );
  }