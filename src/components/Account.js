import Operation from "./Operation";
import Button from "./Button";

const Account = (props) => {
  return (
    <div className="account-container">
      <div className="account-header" style={{ backgroundColor: `${props.color}` }}>
        <h1>{props.name}</h1>
        <h1>{`${props.balance} €`}</h1>
      </div>
      {props.operations.map((operation, index) => {
        const { date, description, amount } = operation;
        return (
          <Operation
            key={index}
            color={index % 2 === 0 ? "even" : "odd"}
            date={date}
            description={description}
            amount={amount}
          />
        );
      })}
      <Button />
    </div>
  );
};

export default Account;
