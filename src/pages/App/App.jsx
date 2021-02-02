import { useState, useEffect } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import Aside from '../../components/Aside/Aside';
import LogListPanel from '../../components/logComponents/LogListPanel/LogListPanel';
import LogDetailPanel from '../../components/logComponents/LogDetailPanel/LogDetailPanel';
import ExerciseListPanel from '../../components/exerciseComponents/ExerciseListPanel/ExerciseListPanel';
import ExerciseDetailPanel from '../../components/exerciseComponents/ExerciseDetailPanel/ExerciseDetailPanel';

import NewLogForm from '../../components/NewLogForm/NewLogForm';
// import NewLogTestForm from '../../components/NewLogTestForm/NewLogTestForm';
import NewExerciseForm from '../../components/NewExerciseForm/NewExerciseForm';

import * as exerciseAPI from '../../utilities/exercises-api';
import * as logAPI from '../../utilities/logs-api';
// import UpdateExerciseForm from '../../components/exerciseComponents/ExerciseDetailPanel/UpdateExerciseForm/UpdateExerciseForm';



export default function App() {
  const [user, setUser] = useState(getUser());
  
  const [exercises, setExercises] = useState([]);
  const [activeExercise, setActiveExercise] = useState({});

  const [updateExerciseForm, setUpdateExerciseForm] = useState(false);
  const [deleteExerciseForm, setDeleteExerciseForm] = useState(false);

  
  const [logs, setLogs] = useState([]);
  const [activeLog, setActiveLog] = useState({});

  const [updateLogForm, setUpdateLogForm] = useState(false);
  const [deleteLogForm, setDeleteLogForm] = useState(false);



  const history = useHistory();

  // useEffect(() => {
  //   history.push("/")
  // }, [exercises, history])

  // ----------- FUNCTIONS FOR EXERCISES --------------------
  useEffect(() => {
    async function getExercises(){
      const exercises = await exerciseAPI.getAll();
      setExercises(exercises);
    }
    if (user) getExercises();
    else {
      setExercises([]);
      setActiveExercise({});
      setUpdateExerciseForm(false);
    }
  }, [user]);

  async function handleAddExercise(newExerciseData) {
    const newExercise = await exerciseAPI.create(newExerciseData);
    setExercises([...exercises, newExercise]);
    history.push('/exercises');
  }

  async function handleUpdateExercise(updatedExerciseData) {
    console.log(`activeExercise.name is... : ${activeExercise}`);
    console.log(`setUpdateExerciseForm is set to... : ${updateExerciseForm}`);
    console.log(`updateExerciseData.name is : ${updatedExerciseData}`);

    const updatedExercise = await exerciseAPI.update(updatedExerciseData);
    const newExerciseArray = exercises.map(exercise =>
      exercise._id === updatedExercise._id ? updatedExercise : exercise
    );
    setExercises(newExerciseArray);
    setActiveExercise(updatedExercise);
    setUpdateExerciseForm(false);
  }

  async function handleDeleteExercise(exercise) {
    console.log('handleDeleteExercise is running...')
    const exerciseID = exercise._id;
    console.log(`exerciseID: ${exerciseID}`)

    // create a list of logs to delete (avoid orphan logs)
    // for each item in logsToDelete, i want to delete it..
    const logsToDelete = logs.filter(log => log.exerciseID === exerciseID);
    
    console.log(`logsToDelete: ${logsToDelete}`)

    logsToDelete.forEach( async function(log) {
      await logAPI.deleteOne(log);
    });
    
    // set new logs state
    console.log(`logs before filter: ${logs}`)
    setLogs(logs.filter(log => log.exerciseID !== exerciseID));
    console.log(`logs after filter: ${logs}`)


    //then delete the exercise
    await exerciseAPI.deleteOne(exercise);
    //and set new exercises state
    setExercises(exercises.filter(exercise => exercise._id !== exerciseID));

    //reset states for activeExercise, activeLog, DeleteExerciseForm, and DeleteLogForm
    setActiveExercise({});
    setActiveLog({});
    setDeleteExerciseForm(false);
    setDeleteLogForm(false);
    history.push('/exercises');
  }

  // ----------- FUNCTIONS FOR LOGS --------------------
  useEffect(() => {
    async function getLogs(){
      const logs = await logAPI.getAll();
      setLogs(logs);
    }
    if (user) getLogs();
    else {
      setLogs([]);
      setActiveLog({});
      setUpdateLogForm(false);
    }
  }, [user])

  async function handleAddLog(newLogData) {
    const newLog = await logAPI.create(newLogData);
    setLogs([...logs, newLog]);
    history.push('/logs');
  }


  async function handleUpdateLog(updatedLogData) {
    const updatedLog = await logAPI.update(updatedLogData);
    const newLogArray = logs.map(log =>
      log._id === updatedLog._id ? updatedLog : log
    );
    setLogs(newLogArray);
    setActiveLog(updatedLog);
    setUpdateLogForm(false);
  }

  async function handleDeleteLog(log) {
    const logID = log._id;
    await logAPI.deleteOne(log);
    setLogs(logs.filter(log => log._id !== logID));
    setActiveLog({});
    setDeleteLogForm(false);
    history.push('/logs');
  }

  //delete many logs (when i delete an exercise)
  //pass in a list of logs to delete... (list of objects? or log_ids?)
  // async function handleDeleteManyLogs(logsToDelete) {
  //   const logID = log._id;
  //   await logAPI.deleteOne(log);
  //   setLogs(logs.filter(log => log._id !== logID));
  //   setActiveLog({});
  //   setDeleteLogForm(false);
  //   history.push('/logs');
  // }



  return (
    <div className="App">
      { user ?
          <>
            <main>
            <Aside user={user} setUser={setUser} />
            <Switch>
              <Route exact path="/logs">
                <div className="list-and-detail">
                <LogListPanel 
                  logs={logs} setLogs={setLogs} 
                  exercises={exercises} 
                  activeLog={activeLog} setActiveLog={setActiveLog}
                  setDeleteLogForm={setDeleteLogForm}
                  />
                <LogDetailPanel 
                  exercises={exercises}  
                  logs={logs} activeLog={activeLog}  
                  handleUpdateLog={handleUpdateLog} 
                  updateLogForm={updateLogForm} setUpdateLogForm={setUpdateLogForm} 
                  handleDeleteLog={handleDeleteLog}
                  deleteLogForm={deleteLogForm} setDeleteLogForm={setDeleteLogForm}

                />
                </div>
              </Route>
              <Route path="/exercises">
                <div className="list-and-detail">
                <ExerciseListPanel 
                  exercises={exercises} setExercises={setExercises} 
                  activeExercise={activeExercise} setActiveExercise={setActiveExercise}
                  setDeleteExerciseForm={setDeleteExerciseForm}/>
                <ExerciseDetailPanel 
                  exercises={exercises} activeExercise={activeExercise}  
                  handleUpdateExercise={handleUpdateExercise} 
                  updateExerciseForm={updateExerciseForm} setUpdateExerciseForm={setUpdateExerciseForm} 
                  handleDeleteExercise={handleDeleteExercise}
                  deleteExerciseForm={deleteExerciseForm} setDeleteExerciseForm={setDeleteExerciseForm}/>
                </div>
              </Route>
              <Route exact path="/new-log">
                <NewLogForm exercises={exercises} logs={logs} user={user} setLogs={setLogs} handleAddLog={handleAddLog} />
              </Route>
              <Route exact path="/new-exercise">
                <NewExerciseForm exercises={exercises} user={user} setExercises={setExercises} handleAddExercise={handleAddExercise}/>
              </Route>
              <Redirect to="/logs"/>
            </Switch>
            </main>
          </>
        :
          <>
          <AuthPage setUser={setUser}/>
          </>
      }
    </div>
  );
}
