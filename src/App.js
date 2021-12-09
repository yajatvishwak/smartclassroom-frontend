import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import StudentDashboard from "./pages/StudentDashboard";
import StudentLogin from "./pages/StudentLogin";
import StudentReports from "./pages/StudentReports";
import StudentSubmission from "./pages/StudentSubmission";
import TeacherDashboard from "./pages/TeacherDashboard";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/student/reports" exact>
            <StudentReports></StudentReports>
          </Route>
          <Route path="/student/login" exact>
            <StudentLogin></StudentLogin>
          </Route>
          <Route path="/student/submission" exact>
            <StudentSubmission></StudentSubmission>
          </Route>
          <Route path="/teacher/" exact>
            <TeacherDashboard></TeacherDashboard>
          </Route>
          <Route path="/student" exact>
            <StudentDashboard></StudentDashboard>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
