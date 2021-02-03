import './ExerciseListCard.css';
import {Link} from 'react-router-dom';



export default function ExerciseListCard({ exercise, activeExercise, setActiveExercise, setDeleteExerciseForm}) {
    
  async function handleClick() {
    setActiveExercise(exercise);
    setDeleteExerciseForm(false);
  }

  // icebox: add number of logs to card
  return (
    <>
        <div onClick={handleClick} className={exercise === activeExercise ? "exercise-card selected" : "exercise-card"}>
            <h1 className="card-title" >{exercise.name}</h1> 
            <p className="b"><span > {exercise.category.toUpperCase()} </span></p>
        </div>

    </>
  );
}

