import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function EditActivity() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activity, setActivity] = useState({
    name: "",
    responsible: "",
    date: "",
    description: "",
  });

  useEffect(() => {
    const activities = JSON.parse(localStorage.getItem("activities")) || [];
    const foundActivity = activities.find((act) => act.id === id);
    if (foundActivity) setActivity(foundActivity);
  }, [id]);

  const handleChange = (e) => {
    setActivity({ ...activity, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!activity.name || !activity.responsible || !activity.date || !activity.description) {
      alert("Todos os campos são obrigatórios!");
      return;
    }

    let activities = JSON.parse(localStorage.getItem("activities")) || [];
    activities = activities.map((act) => (act.id === id ? activity : act));
    localStorage.setItem("activities", JSON.stringify(activities));

    navigate("/");
  };

  return (
    <div>
      <h2>
        Editar {activity.name && `- ${activity.name}`}
      </h2>
      <form onSubmit={handleSubmit}>
        <label>Nome da Atividade</label>
        <input
          type="text"
          name="name"
          placeholder="Nome da Atividade"
          value={activity.name}
          onChange={handleChange}
        />
        <label>Responsável</label>
        <input
          type="text"
          name="responsible"
          placeholder="Responsável"
          value={activity.responsible}
          onChange={handleChange}
        />
        <label>Data de Entrega</label>
        <input type="date" name="date" value={activity.date} onChange={handleChange} />
        <label>Descrição</label>
        <textarea
          name="description"
          placeholder="Descrição"
          value={activity.description}
          onChange={handleChange}
        />
        <div className="edit-buttons">
          <button className="action-btn" type="submit">Salvar</button>
          <button className="action-btn" onClick={() => navigate("/")}>Voltar</button>
        </div>
        
      </form>
    </div>
  );
}

export default EditActivity;
