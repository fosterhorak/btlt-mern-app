import './ExerciseDetailTop.css';

export default function ExerciseDetailTop({activeExercise, exercises, handleUpdateExercise, updateExerciseForm, setUpdateExerciseForm}) {


    async function handleUpdateExerciseButton() {
        setUpdateExerciseForm(true);
    }


    return (
        <>

            <div className="top-half">
            <div className="detail-card">
                <div className="detail-card-header">
                <h1>{activeExercise.name}</h1>
                <hr id="a"/>
                </div>
                <div className="detail-card-body">

                    <div className="columnL">
                    <h3>Category: </h3>
                    </div>
                    <div className="columnR">
                    <h3>{activeExercise.category.toUpperCase()}</h3>
                    </div>

                    <div className="columnL">
                    <h3>Log Type: </h3>
                    </div>
                    <div className="columnR">
                    <h3>{activeExercise.logType}</h3>
                    </div>

                    <div className="columnL">
                    <h3>Description: </h3>
                    </div>
                    <div className="columnR">
                    <h3>{activeExercise.description}</h3>
                    </div>

                    { activeExercise.demoLink ? 
                    <>
                    <div className="columnL">
                        <h3>Demo URL: </h3>
                    </div>
                    <div className="columnR">
                        <h4><a href={activeExercise.demoLink} target="_blank"> LINK </a></h4>
                    </div>
                    </>
                    : ""}
                    <div className="temp"><p>created by:</p><br/><p>user_id: </p></div> 
                    <div className="temp"><p> {activeExercise.creatorEmail}</p><br/><p> {activeExercise.creator}</p></div>
                </div>
            </div>
            <div className="update-delete-btn-container">
                <button onClick={handleUpdateExerciseButton} id="u"className="ud-btns">UPDATE</button>
                <button id="d"className="ud-btns">DELETE</button>
            </div>
            </div>

        </>
    );
}