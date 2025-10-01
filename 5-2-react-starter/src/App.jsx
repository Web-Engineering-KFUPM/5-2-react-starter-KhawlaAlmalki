// src/App.jsx
import StudentCard from './components/StudentCard';

function App() {
    return (
        <div>
            <h1>Student Info</h1>

            <StudentCard name="Khawlah Almaliki" id="202247320" dept="ICS" />
            <StudentCard name="Aisha Salem"      id="202155789" dept="IT" />
        </div>
    );
}

export default App;
