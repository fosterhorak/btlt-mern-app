
import './ExerciseDetailPanel.css';
export default function ExerciseDetailPanel({activeExercise}) {

    return (
      <>
        { activeExercise ? 
          <div className="detail-container">
            <div className="detail-card">
              <div className="detail-card-header">
                <h1>{activeExercise.name}</h1>
                <hr/>
              </div>
              <div className="detail-card-body">

                  <div className="columnL">
                    <h3>Category: </h3>
                  </div>
                  <div className="columnR">
                    <h3>{activeExercise.category}</h3>
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
                      <h4><a href={activeExercise.demoLink}> LINK </a></h4>
                    </div>
                    </>
                  : ""}
              </div>
            </div>
            <div className="update-delete-btn-container">
              <p>created by: {activeExercise.creatorEmail}</p>
              <p>user_id: {activeExercise.creator}</p>
            </div>
            <div className="detail-log-graph-container">

                  <div className="log-graph">
                    <h1>recent log list / graph goes here</h1>
                  </div>
                  <div className="detail-log-graph-btns">
                    <button className="gl-btns">RECENT LOGS</button>
                    <button className="gl-btns">GRAPH</button>
                  </div>
            </div>
          </div>
 


        : ''}
      </>
    );
  }