import './LogDetailTop.css';
import DeleteLogForm from './DeleteLogForm/DeleteLogForm';

export default function LogDetailTop({
    activeLog, logs, exercises,
    handleUpdateLog, 
    updateLogForm, setUpdateLogForm,
    handleDeleteLog,
    deleteLogForm, setDeleteLogForm,
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
                        <h1>EXERCISE NAME {activeLog._id}</h1>
                        <hr id="a"/>
                        </div>
                        <div className="detail-card-body">

                            <div className="columnL">
                            <h3>EXERCISE CATEGORY: </h3>
                            </div>
                            <div className="columnR">
                            <h3>{activeLog.exerciseID}</h3>
                            </div>

                            <div className="columnL">
                            <h3>LOG TYPE: </h3>
                            </div>
                            <div className="columnR">
                            <h3>{activeLog.exerciseLogType}</h3>
                            </div>

                            <div className="columnL">
                            <h3>NOTES: </h3>
                            </div>
                            <div className="columnR">
                            <h3>{activeLog.notes}</h3>
                            </div>


                            <div className="temp"><p>user_id: </p></div> 
                            <div className="temp"><p> {activeLog.userId}</p></div>
                        </div>
                    </div>
                    <div className="update-delete-btn-container">
                        <button onClick={handleUpdateLogButton} id="u"className="ud-btns">UPDATE</button>
                        <button onClick={handleDeleteLogButton} id="d"className="ud-btns">DELETE</button>
                    </div>
                </>
            }
            </div>

        </>
    );
}