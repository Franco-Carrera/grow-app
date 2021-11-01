import "./UserForm.css";
import Button from "../Button/Button";

const UserForm = ({ showForm, submitForm, confirmOrder }) => {
  const onClickhandler = (state) => {
    showForm(state);
  };

  const onSubmitHandler = (e, showFormState) => {
    e.preventDefault();
    const buyer = {
      name: e.target.children.name.value,
      phone: e.target.children.phone.value,
      email: e.target.children.email.value,
    };

    showForm(showFormState);
    confirmOrder(buyer);
  };
  return (
    <div className="buy__Modal">
      <form
        autoComplete="off"
        className="userForm"
        onSubmit={(e) => {
          onSubmitHandler(e, false);
        }}
      >
        <label htmlFor="name">Nombre</label>
        <input type="text" id="name" name="name" required autoComplete="off" />
        <label htmlFor="phone">Telefono</label>
        <input
          type="number"
          id="phone"
          name="phone"
          required
          autoComplete="off"
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          autoComplete="off"
        />
        <Button label="Finalizar compra" />
        <button className="closeForm" onClick={() => onClickhandler(false)}>
          X
        </button>
      </form>
    </div>
  );
};

export default UserForm;
