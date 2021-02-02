import LogListCard from "./LogListCard/LogListCard";
import './LogListPanel.css';

export default function LogListPanel(props) {

    return (
      <>
          <div className="list-panel">
            <h1 className="list-title">EXERCISE LOGS</h1> 
            
            <div className="log-list-container">
              
              <div className="log-list-btns">
                <button className="list-btns">SORT</button>
                <button className="list-btns">FILTER</button>
                <button className="list-btns">RESET</button>
              </div>
              
              <div className="exercise-list-scroll">
                {props.logs.map(log =>
                  <LogListCard 
                    log={log} 
                    key={log._id} 
                    // exercises={props.exercises}
                    // activeLog={props.activeLog} 
                    // setActiveLog={props.setActiveLog}
                    // setDeleteLogForm={props.setDeleteLogForm}
                  />
                )}

                {/* delete cards below...  just done for devo purposes*/}

                <div className="log-card"//{log === activeLog ? "log-card selected" : "log-card"}>
                  >
                  <h1 className="card-title" >EXERCISE NAME</h1> 
                  <p className="b"><span > DATE | WT | VOLUME </span></p>
                </div>
                <div className="log-card"//{log === activeLog ? "log-card selected" : "log-card"}>
                  >
                  <h1 className="card-title" >EXERCISE NAME</h1> 
                  <p className="b"><span > DATE | WT | VOLUME </span></p>
                </div>
              
              
              </div>
            
            </div>
          
          </div>
        </>
    );
  }
