
import './ExerciseDetailPanel.css';
export default function ExerciseDetailPanel({activeExercise}) {

  // ** i want to either: not show anything in the detail panel until i click an exercise...
  // OR 
  // automatically set the first exercise in the list as the activeExercise

  // must deconstruct exercises if i use below...
  //    if (activeExercise.name === null) activeExercise = exercises[0];

    return (
      <>
        { activeExercise ? 
          <div className="detail-container">
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
                      <h4><a href={activeExercise.demoLink} target="_blank"> LINK </a></h4>
                    </div>
                    </>
                  : ""}
                  <div className="temp"><p>created by:</p><br/><p>user_id: </p></div> 
                  <div className="temp"><p> {activeExercise.creatorEmail}</p><br/><p> {activeExercise.creator}</p></div>
              </div>
            </div>
            <div className="update-delete-btn-container">
              <button id="u" className="ud-btns">UPDATE</button>
              <button id="d"className="ud-btns">DELETE</button>
            </div>
            <hr id="b"/>
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