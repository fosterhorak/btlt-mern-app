import './ExerciseListCard.css';
import {Link} from 'react-router-dom';



export default function ExerciseListCard({ exercise, activeExercise, setActiveExercise }) {
  
  // icebox: add number of logs to card
  return (
    <>
        <div onClick={() => setActiveExercise(exercise)} className={exercise === activeExercise ? "exercise-card selected" : "exercise-card"}>
            <h1>{exercise.name}</h1> 
            <p className="b"><span > {exercise.category.toUpperCase()} </span></p>
        </div>

    </>
  );
}

