// src/components/StudentCard.jsx

function StudentCard({ name, id, dept }) {
    return (
        <div className="student-card">
            <h3>Name: {name}</h3>
            <p><strong>Student ID:</strong> {id}</p>
            <p><strong>Department:</strong> {dept}</p>
        </div>
    );
}

export default StudentCard;
