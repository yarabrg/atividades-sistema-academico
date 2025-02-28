import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function AddActivity() {
  const [name, setName] = useState("");
  const [responsible, setResponsible] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !responsible || !date || !description) {
      alert("Todos os campos são obrigatórios!");
      return;
    }

    const activities = JSON.parse(localStorage.getItem("activities")) || [];
    const newActivity = { id: uuidv4(), name, responsible, date, description };
    localStorage.setItem("activities", JSON.stringify([...activities, newActivity]));

    navigate("/");
  };

  return (
    <div className="form">
      <h2>Nova Atividade</h2>
      <form onSubmit={handleSubmit}>
        <label>Nome da Atividade</label>
        <input
          type="text"
          placeholder="Nome da Atividade"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Responsável</label>
        <input
          type="text"
          placeholder="Responsável"
          value={responsible}
          onChange={(e) => setResponsible(e.target.value)}
        />
        <label>Data de Entrega</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <label>Descrição</label>
        <textarea
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="action-btn" type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default AddActivity;
