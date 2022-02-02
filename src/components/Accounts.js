import Account from "./Account";

const Accounts = (props) => {
  return (
    <div className="accounts-container">
      {props.accounts.map((account, index) => {
        const { name, balance, color, operations } = account;
        return <Account key={index} name={name} balance={balance} color={color} operations={operations} />;
      })}
    </div>
  );
};

export default Accounts;
