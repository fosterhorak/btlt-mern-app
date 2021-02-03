import './LogDetailTop.css';
import DeleteLogForm from './DeleteLogForm/DeleteLogForm';
import moment from 'moment';

export default function LogDetailTop({
    activeLog, logs, exercises,
    handleUpdateLog, 
    updateLogForm, setUpdateLogForm,
    handleDeleteLog,
    deleteLogForm, setDeleteLogForm,
    targetExercise,
}) {


    async function handleUpdateLogButton() {
        setUpdateLogForm(true);
    }

    async function handleDeleteLogButton() {
        setDeleteLogForm(true);
    }

    return (
        <>
            <div className="top-half">
            { deleteLogForm ? 
                <DeleteLogForm  
                activeLog={activeLog}
                handleDeleteLog={handleDeleteLog} 
                deleteLogForm={deleteLogForm} setDeleteLogForm={setDeleteLogForm}/>
            :
                <>
                    <div className="detail-card">
                        <div className="detail-card-header">
                        <h1>{targetExercise.name} #{activeLog._id.slice(-4)}</h1>
                        <hr id="a"/>
                        </div>
                        
                        <div className="detail-card-body" id="log">
                            <div className="form-groupL">
                                <label> <strong>EXERCISE DATA</strong> </label>
                                <hr id="new-log"/>
                            </div>
                            <div className="form-groupR">
                            <h5 id="purp">[ LogType: {activeLog.exerciseLogType} ]</h5>
                            </div>


                            <div className="form-groupL">
                                <label><h3>DATE</h3> </label>
                            </div>
                            <div className="form-groupR">
                                <label><h3>{moment(activeLog.dateTime).format('dddd, MMMM Do YYYY, h:mm a')}</h3> </label>
                            </div>

                            { activeLog.exerciseData.weight ? 
                            <>
                            <div className="form-groupL">
                                <label><h3>WEIGHT</h3></label>
                            </div>
                            <div className="form-groupR">
                                <label><h3>{activeLog.exerciseData.weight}</h3> </label>
                            </div>
                            </>
                            : ''}

                            { activeLog.exerciseData.reps ? 
                            <>
                            <div className="form-groupL">
                                <label><h3>REPS</h3></label>
                            </div>
                            <div className="form-groupR">
                                <label><h3>{activeLog.exerciseData.reps}</h3> </label>
                            </div>
                            </>
                            : ''}

                            { activeLog.exerciseData.sets ? 
                            <>
                            <div className="form-groupL">
                                <label><h3>SETS</h3></label>
                            </div>
                            <div className="form-groupR">
                                <label><h3>{activeLog.exerciseData.sets}</h3> </label>
                            </div>
                            </>
                            : ''}

                            { activeLog.exerciseData.restInt ? 
                            <>
                            <div className="form-groupL">
                                <label><h3>REST INTERVAL</h3></label>
                            </div>
                            <div className="form-groupR">
                                <label><h3>{activeLog.exerciseData.restInt}</h3> </label>
                            </div>
                            </>
                            : ''}

                            { activeLog.exerciseData.distance ? 
                            <>
                            <div className="form-groupL">
                                <label><h3>DISTANCE</h3></label>
                            </div>
                            <div className="form-groupR">
                                <label><h3>{activeLog.exerciseData.distance}</h3> </label>
                            </div>
                            </>
                            : ''}

                            { activeLog.exerciseData.time ? 
                            <>
                            <div className="form-groupL">
                                <label><h3>TIME (minutes)</h3></label>
                            </div>
                            <div className="form-groupR">
                                <label><h3>{activeLog.exerciseData.time}</h3> </label>
                            </div>
                            </>
                            : ''}

                            { activeLog.exerciseData.numRds ? 
                            <>
                            <div className="form-groupL">
                                <label><h3>NUMBER OF ROUNDS</h3></label>
                            </div>
                            <div className="form-groupR">
                                <label><h3>{activeLog.exerciseData.numRds}</h3> </label>
                            </div>
                            </>
                            : ''}

                            { activeLog.exerciseData.repsPerRd ? 
                            <>
                            <div className="form-groupL">
                                <label><h3>REPS PER ROUNDS</h3></label>
                            </div>
                            <div className="form-groupR">
                                <label><h3>{activeLog.exerciseData.repsPerRd}</h3> </label>
                            </div>
                            </>
                            : ''}

                            { activeLog.exerciseData.timeCap ? 
                            <>
                            <div className="form-groupL">
                                <label><h3>TIME CAP</h3></label>
                            </div>
                            <div className="form-groupR">
                                <label><h3>{activeLog.exerciseData.timeCap}</h3> </label>
                            </div>
                            </>
                            : ''}

                            { activeLog.exerciseData.volCalc ? 
                            <>
                            <div className="form-groupL">
                                <label><h3>VOLUME</h3></label>
                            </div>
                            <div className="form-groupR">
                                <label><h3>{activeLog.exerciseData.volCalc}</h3> </label>
                            </div>
                            </>
                            : ''}

                            { activeLog.exerciseData.totReps ? 
                            <>
                            <div className="form-groupL">
                                <label><h3>TOTAL REPS</h3></label>
                            </div>
                            <div className="form-groupR">
                                <label><h3>{activeLog.exerciseData.totReps}</h3> </label>
                            </div>
                            </>
                            : ''}

                            { activeLog.exerciseData.avgSpeed ? 
                            <>
                            <div className="form-groupL">
                                <label><h3>PACE</h3></label>
                            </div>
                            <div className="form-groupR">
                                <label><h3>{activeLog.exerciseData.avgSpeed}</h3> </label>
                            </div>
                            </>
                            : ''}

                            { activeLog.notes ? 
                            <>
                            <div className="form-groupL">
                                <label><h3>NOTES</h3> </label>
                            </div>
                            <div className="form-groupR">
                                <label><h3>{activeLog.notes}</h3> </label>
                            </div>
                            </>
                            : ''}

                            { activeLog.exerciseData.complete ? 
                            '': 
                            <>
                            <div className="form-groupL">
                                <label><h3>COMPLETE</h3></label>
                            </div>
                            <div className="form-groupR">
                                <label><h3>{activeLog.exerciseData.complete}</h3> </label>
                            </div>
                            </>
                            }

                    </div>
                    <div className="update-delete-btn-container">
                            <button onClick={handleUpdateLogButton} id="u"className="ud-btns">UPDATE</button>
                            <button onClick={handleDeleteLogButton} id="d"className="ud-btns">DELETE</button>
                    </div>
                    </div>
                </>
                }
        </div>

        </>
    );
}