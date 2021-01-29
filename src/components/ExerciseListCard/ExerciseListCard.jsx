import './ExerciseListCard.css';
import {Link} from 'react-router-dom';



export default function ExerciseListCard({ exercise, activeExercise, setActiveExercise }) {

  return (
    <>
        <div onClick={() => setActiveExercise(exercise)} className={exercise === activeExercise ? "exercise-card selected" : "exercise-card"}>
            <h1>{exercise.name}</h1> 
            <p className="p">{exercise.category} | {exercise.logType}</p>
        </div>

    </>
  );
}

