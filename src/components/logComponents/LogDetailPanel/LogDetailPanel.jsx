import './LogDetailPanel.css';
import LogDetailTop from './LogDetailTop/LogDetailTop';
import LogDetailBottom from './LogDetailBottom/LogDetailBottom';
import UpdateLogForm from './UpdateLogForm/UpdateLogForm';




export default function LogLogDetailPanel({
  activeLog, logs, exercises,
  handleUpdateLog, 
  updateLogForm, setUpdateLogForm,
  handleDeleteLog, 
  deleteLogForm, setDeleteLogForm

}) {

// If the UpdateLogForm is up, and I click on a new log, I want to see the UpdateLogForm for the new active log...

    return (
      <>
        { activeExercise.name ? 
          <div className="detail-container">
            
            { updateExerciseForm ? 
              <UpdateExerciseForm 
                handleUpdateExercise={handleUpdateExercise} 
                activeExercise={activeExercise} 
                setUpdateExerciseForm={setUpdateExerciseForm} /> 
            :
              <>
              <ExerciseDetailTop 
                activeExercise={activeExercise} exercises={exercises} 
                updateExerciseForm={updateExerciseForm} setUpdateExerciseForm={setUpdateExerciseForm}
                handleDeleteExercise={handleDeleteExercise}
                deleteExerciseForm={deleteExerciseForm} setDeleteExerciseForm={setDeleteExerciseForm}
                />
              
              <hr id="b"/>

              <ExerciseDetailBottom />
              </>
            }
          </div>

        : ''}
      </>
    );
  }