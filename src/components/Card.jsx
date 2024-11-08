const Card = ({ data }) => {
  return (
    <div>
      <div>
        <p>Nombre:</p>
        <p>{data.name}</p>
      </div>
      <hr />
      <div>
        <p>Apellido:</p>
        <p>{data.lastname}</p>
      </div>
      <hr />
      <div>
        <p>Color favorito:</p>
        <p>{data.color}</p>
      </div>
      <div>
        <p>Sabemos que tu color favorito es:</p>
        <div style={{ backgroundColor: data.color, height: "100px" }}></div>
      </div>
    </div>
  );
};

export default Card;
