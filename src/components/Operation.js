const Operation = (props) => {
  return (
    <div className={`operation-item ${props.color}`}>
      <span>{props.date}</span>
      <div className="item-right">
        <h2>{props.description}</h2>
        <h2>{props.amount} €</h2>
      </div>
    </div>
  );
};

export default Operation;
