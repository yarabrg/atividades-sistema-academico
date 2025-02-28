import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ActivityList() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const storedActivities = JSON.parse(localStorage.getItem("activities")) || [];
    setActivities(storedActivities);
  }, []);

  const handleDelete = (id) => {
    const updatedActivities = activities.filter((activity) => activity.id !== id);
    localStorage.setItem("activities", JSON.stringify(updatedActivities));
    setActivities(updatedActivities);
  };

  return (
    <div>
      <h2>Lista de Atividades</h2>
      {activities.length === 0 ? <p>Nenhuma atividade cadastrada.</p> : null}
      <ul className="activity-list">
        {activities.map((activity) => (
          <li key={activity.id} className="activity-card">
            <Link to={`/activity/${activity.id}`}>{activity.name}</Link>
            <div className="action-links">
              <Link to={`/edit/${activity.id}`}>Editar</Link>
              <span>|</span>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleDelete(activity.id);
                }}
              >
              Excluir
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ActivityList;
