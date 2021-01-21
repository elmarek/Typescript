import React from "react";

function Form() {
  const [state, setState] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState((prevProps) => ({
      ...prevProps,
      [e.currentTarget.name]: e.currentTarget.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(
      `Your name is: ` +
        state.name +
        " Your email is: " +
        state.email +
        " and your password is: " +
        state.password
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={state.name}
        onChange={handleChange}
      />

      <br></br>
      <label>Email:</label>
      <input type="text" name="email" value={state.email} />
      <br></br>
      <label>Password:</label>
      <input type="text" name="password" value={state.password} />
      <br></br>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Form;
