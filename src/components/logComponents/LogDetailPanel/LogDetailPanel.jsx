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
        { activeLog._id ? 
          <div className="detail-container">
            
            { updateLogForm ? 
              <UpdateLogForm 
                handleUpdateLog={handleUpdateLog} 
                activeLog={activeLog} 
                setUpdateLogForm={setUpdateLogForm} /> 
            :
              <>
              <LogDetailTop 
                activeLog={activeLog} logs={logs} exercises={exercises}
                updateLogForm={updateLogForm} setUpdateLogForm={setUpdateLogForm}
                handleDeleteLog={handleDeleteLog}
                deleteLogForm={deleteLogForm} setDeleteLogForm={setDeleteLogForm}
                />
              
              <hr id="b"/>

              <LogDetailBottom />
              </>
            }
          </div>

        : ''}
      </>
    );
  }