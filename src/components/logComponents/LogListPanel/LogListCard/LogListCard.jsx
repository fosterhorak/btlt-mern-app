import './LogListCard.css';
import {Link} from 'react-router-dom';



export default function LogListCard({ 
  log, activeLog, setActiveLog, 
  //setDeleteLogForm
}) {
  
  //function to handleClick
    //setActiveExercise(exercise);
    //setDeleteExerciseForm(false);
    
  async function handleClick() {
    setActiveLog(log);
    //setDeleteLog(false);
  }

  return (
    <>
        <div onClick={handleClick} className={log === activeLog ? "log-card selected" : "log-card"}>
            <h1 className="card-title" >EXERCISE NAME</h1> 
            <p className="b"><span > DATE | VARIABLE DATA </span></p>
        </div>

    </>
  );
}

