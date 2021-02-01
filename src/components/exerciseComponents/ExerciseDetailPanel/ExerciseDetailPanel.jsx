import './ExerciseDetailPanel.css';
import ExerciseDetailTop from './ExerciseDetailTop/ExerciseDetailTop';
import ExerciseDetailBottom from './ExerciseDetailBottom/ExerciseDetailBottom';
import UpdateExerciseForm from './UpdateExerciseForm/UpdateExerciseForm';

export default function ExerciseDetailPanel({
  activeExercise, exercises, 
  handleUpdateExercise, 
  updateExerciseForm, setUpdateExerciseForm,
  handleDeleteExercise, 
  deleteExerciseForm, setDeleteExerciseForm

}) {


    // If the UpdateExerciseForm is up, and I click on a new exercise, I want to see the UpdateExerciseForm for the new active exercise...

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