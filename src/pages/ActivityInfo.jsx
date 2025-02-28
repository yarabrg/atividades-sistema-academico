import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function ActivityInfo() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activity, setActivity] = useState(null);

  useEffect(() => {
    const activities = JSON.parse(localStorage.getItem("activities")) || [];
    const foundActivity = activities.find((act) => act.id === id);
    if (foundActivity) setActivity(foundActivity);
  }, [id]);

  return (
    <div>
      <h2>Detalhe da Atividade</h2>
      {activity ? (
        <div className="activity-details">
          <h2>{activity.name}</h2>
          <p>
            <strong>Responsável:</strong> {activity.responsible}
          </p>
          <p>
            <strong>Data:</strong> {activity.date}
          </p>
          <p>
            <strong>Descrição:</strong> {activity.description}
          </p>
          <button className="action-btn" onClick={() => navigate("/")}>Voltar</button>
        </div>
      ) : (
        <p>Atividade não encontrada.</p>
      )}
    </div>
  );
}

export default ActivityInfo;
