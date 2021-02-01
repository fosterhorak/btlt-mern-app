import './DeleteExerciseForm.css';

export default function DeleteExerciseForm({
    activeExercise,
    handleDeleteExercise,
    deleteExerciseForm, setDeleteExerciseForm,
}) {

    async function handleCancelDelete() {
        setDeleteExerciseForm(false);
    }

    async function handleDelete() {
        handleDeleteExercise(activeExercise);
    }

    
    return (
        <>
            <div className="delete-card">
                
                
                
                <div className="delete-card-header">
                <h1 id="delete">ARE YOU SURE?</h1>
                <hr id="a"/>
                </div>


                <div className="delete-card-body">
                    <h3>Are you sure you want to delete <span id="act-ex">{activeExercise.name}</span>?</h3>
                    <h3> 
                        <span id="warn">WARNING</span>: You are also  deleting ALL exercise logs for the exercise <span id="act-ex">{activeExercise.name}</span>.
                    </h3>
                </div>
            </div>
            <div className="delete-form-btn-container">
                <button onClick={handleCancelDelete} className="cancel-del-btn">CANCEL</button>
                <button onClick={handleDelete} className="del-ex-btn">DELETE</button>
            </div>
        </>

    );
}