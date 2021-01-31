import './ExerciseDetailPanel.css';
import ExerciseDetailTop from './ExerciseDetailTop/ExerciseDetailTop';
import ExerciseDetailBottom from './ExerciseDetailBottom/ExerciseDetailBottom';

export default function ExerciseDetailPanel({activeExercise, exercises, handleUpdateExercise}) {

    // i want the form to update an existing exercise to pop up and replace the two detail panels if the "update" button is selected
    // must incorporate a new hook -- "updateExercise" -- into the existing ternary on this page...

    return (
      <>
        { activeExercise.name ? 
          <div className="detail-container">
            
            <ExerciseDetailTop activeExercise={activeExercise} exercises={exercises} handleUpdateExercise={handleUpdateExercise}/>
            
            <hr id="b"/>

            <ExerciseDetailBottom />

          </div>
 


        : ''}
      </>
    );
  }