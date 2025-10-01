// src/components/StudentCard.jsx
function StudentCard({ name, id, dept }) {
    return (
        <div>
            <h3>Name: {name}</h3>
            <p>Student ID: {id}</p>
            <p>Department: {dept}</p>
        </div>
    );
}

export default StudentCard;
