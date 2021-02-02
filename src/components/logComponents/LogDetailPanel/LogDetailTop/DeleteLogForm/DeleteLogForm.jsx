import './DeleteLogForm.css';

export default function DeleteLogForm({
    activeLog,
    handleDeleteLog,
    deleteLogForm, setDeleteLogForm,
}) {

    async function handleCancelDelete() {
        setDeleteLogForm(false);
    }

    async function handleDelete() {
        handleDeleteLog(activeLog);
    }

    
    return (
        <>
            <div className="delete-card">
                
                
                
                <div className="delete-card-header">
                <h1 id="delete">ARE YOU SURE?</h1>
                <hr id="a"/>
                </div>


                <div className="delete-card-body">
                    <h3>Are you sure you want to delete this log?</h3>
                    <h3>Once it's gone, it's gone forever!</h3>
                </div>
            </div>
            <div className="delete-form-btn-container">
                <button onClick={handleCancelDelete} className="cancel-del-btn">CANCEL</button>
                <button onClick={handleDelete} className="del-ex-btn">DELETE</button>
            </div>
        </>

    );
}