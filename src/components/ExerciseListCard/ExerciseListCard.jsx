import './ExerciseListCard.css';
import {Link} from 'react-router-dom';



export default function ExerciseListCard({ exercise, activeExercise, setActiveExercise }) {

  return (
    <>
        <div onClick={() => setActiveExercise(exercise)} className={exercise === activeExercise ? "exercise-card selected" : "exercise-card"}>
            <h1>{exercise.name}</h1> 
            <p className="p">{exercise.category} | {exercise.logType}</p>
        </div>

        {/*<div className='TrollListItem panel panel-default'>
          <div className="panel-heading">
            <h3 className='panel-title name'>{troll.name}</h3>
            <span className='panel-title other-info'>
                Breed: <strong>{troll.breed}</strong><br/>
                Age: <strong>{troll.age} </strong> <br/> 
            </span>
          </div>

          <div className='panel-footer TrollListItem-action-panel'>
            
              <Link to={{
                pathname: '/details',
                state: {troll}
              }} >
                <button>detail</button> 
              </Link>

              <Link to={{
                pathname: '/edit',
                state: {troll}
              }} >
                <button>edit</button> 
              </Link>

              <button onClick={() => handleDeleteTroll(troll._id)}>delete</button>
          </div>
            </div>*/}
    </>
  );
}

