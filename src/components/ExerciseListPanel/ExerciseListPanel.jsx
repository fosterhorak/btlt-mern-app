import ExerciseListCard from "../ExerciseListCard/ExerciseListCard";
import './ExerciseListPanel.css';

export default function ExerciseListPanel(props) {

    return (
      <>
        <div className="list-panel">
          <h1 className="list-title">Exercise List</h1> 
          
          <div className="exercise-list-container">
            
            <div className="exercise-list-btns">
              <button className="list-btns">SORT</button>
              <button className="list-btns">FILTER</button>
              <button className="list-btns">RESET</button>
            </div>
            
            <div className="exercise-list-scroll">
              {props.exercises.map(exercise =>
              <ExerciseListCard exercise={exercise} key={exercise._id}/>
              )}
            </div>
          
          </div>
        
        </div>
      </>
    );
  }