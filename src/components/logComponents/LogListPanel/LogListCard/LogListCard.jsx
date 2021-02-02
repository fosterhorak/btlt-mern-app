import './LogListCard.css';
import {Link} from 'react-router-dom';
import { PromiseProvider } from 'mongoose';



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
            <h1 className="card-title" >LOG ID: {log._id}</h1> 
            <h3 className="b">LOG NOTES: {log.notes}</h3>
            <h3 className="b">DATETIME: {log.dateTime}</h3>
        </div>

    </>
  );
}

