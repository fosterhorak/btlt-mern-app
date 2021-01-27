import { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
//import NewOrderPage from '../NewOrderPage/NewOrderPage';
//import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import Aside from '../../components/Aside/Aside';
import ExerciseLogListPanel from '../../components/ExerciseLogListPanel/ExerciseLogListPanel';
import ExerciseLogDetailPanel from '../../components/ExerciseLogDetailPanel/ExerciseLogDetailPanel';
import ExerciseListPanel from '../../components/ExerciseListPanel/ExerciseListPanel';
import ExerciseDetailPanel from '../../components/ExerciseDetailPanel/ExerciseDetailPanel';
import NewLogForm from '../../components/NewLogForm/NewLogForm';
import NewExerciseForm from '../../components/NewExerciseForm/NewExerciseForm';
import VisitorHeader from '../../components/VisitorHeader/VisitorHeader';



export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Aside />
            <Switch>
              <Route exact path="/">
                <ExerciseLogListPanel />
                <ExerciseLogDetailPanel />
              </Route>
              <Route path="/exercises">
                <ExerciseListPanel />
                <ExerciseDetailPanel />
              </Route>
              <Route exact path="/new-log">
                <NewLogForm />
              </Route>
              <Route exact path="/new-exercise">
                <NewExerciseForm />
              </Route>
              <Redirect to="/"/>
            </Switch>
          </>
        :
          <>
          <VisitorHeader />
          <AuthPage setUser={setUser}/>
          </>
      }
    </main>
  );
}
