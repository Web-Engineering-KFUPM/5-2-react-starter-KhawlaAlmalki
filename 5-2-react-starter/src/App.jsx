// src/App.jsx
import StudentCard from './components/StudentCard';
import './App.css';

function App() {
    return (
        <div className="app">
            {/* Header */}
            <header className="dashboard-header">
                <h1>Student Information Dashboard</h1>
                <p>View and manage student details</p>
            </header>

            {/* Main Content */}
            <main className="dashboard-main">
                <h2>Student Info</h2>

                {/* Cards container */}
                <div className="cards-container">
                    <div className="student-card">
                        <StudentCard name="Khawlah Almaliki" id="202247320" dept="ICS" />
                    </div>

                    <div className="student-card">
                        <StudentCard name="Aisha Salem" id="202155789" dept="IT" />
                    </div>

                    <div className="student-card">
                        <StudentCard name="Maha Ali" id="202198456" dept="Software Engineering" />
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;
