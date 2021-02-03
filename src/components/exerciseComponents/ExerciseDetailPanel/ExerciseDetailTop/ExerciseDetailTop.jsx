import './ExerciseDetailTop.css';
import DeleteExerciseForm from './DeleteExerciseForm/DeleteExerciseForm';

export default function ExerciseDetailTop({
    activeExercise, exercises, 
    handleUpdateExercise, 
    updateExerciseForm, setUpdateExerciseForm,
    handleDeleteExercise,
    deleteExerciseForm, setDeleteExerciseForm,
}) {


    async function handleUpdateExerciseButton() {
        setUpdateExerciseForm(true);
    }

    async function handleDeleteExerciseButton() {
        setDeleteExerciseForm(true);
    }

    



    return (
        <>
            <div className="top-half">
            { deleteExerciseForm ? 
                <DeleteExerciseForm  
                activeExercise={activeExercise}
                handleDeleteExercise={handleDeleteExercise} 
                deleteExerciseForm={deleteExerciseForm} setDeleteExerciseForm={setDeleteExerciseForm}/>
            :
                <>
                    <div className="detail-card">
                        <div className="detail-card-header">
                        <h1>{activeExercise.name}</h1>
                        <hr id="a"/>
                        </div>
                        <div className="detail-card-body">

                            <div className="columnL">
                            <h3>CATEGORY: </h3>
                            </div>
                            <div className="columnR">
                            <h3>{activeExercise.category.toUpperCase()}</h3>
                            </div>

                            <div className="columnL">
                            <h3>LOG TYPE: </h3>
                            </div>
                            <div className="columnR">
                            <h3>{activeExercise.logType}</h3>
                            </div>

                            <div className="columnL">
                            <h3>DESCRIPTION: </h3>
                            </div>
                            <div className="columnR">
                            <h3>{activeExercise.description}</h3>
                            </div>

                            { activeExercise.demoLink ? 
                            <>
                            <div className="columnL">
                                <h3>DEMO URL: </h3>
                            </div>
                            <div className="columnR">
                                <a id="url-demo-link" href={activeExercise.demoLink} target="_blank"> LINK </a>
                            </div>
                            </>
                            : ""}
                                                    </div>
                    </div>
                    <div className="update-delete-btn-container">
                        <button onClick={handleUpdateExerciseButton} id="u"className="ud-btns">UPDATE</button>
                        <button onClick={handleDeleteExerciseButton} id="d"className="ud-btns">DELETE</button>
                    </div>
                </>
            }
            </div>

        </>
    );
}