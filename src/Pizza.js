import React, { useState } from "react";
const Pizza = () => {
  const [size, setSize] = useState("");
  const [toppings, setToppings] = useState("Pepperoni");
  const [check, setCheck] = useState(false);
  const [instr, setInst] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    console.log({
      size: size,
      topping: toppings,
      GlutenFree: check,
      Comment: instr
    });
  };
  return (
    <form>
      <h3>Order your Pizza</h3>
      <h2>Size</h2>
      <input
        type="radio"
        value="small"
        name="size"
        onChange={(e) => setSize(e.target.value)}
      />
      <label>Small</label>
      <input
        type="radio"
        value="medium"
        name="size"
        onChange={(e) => setSize(e.target.value)}
      />
      <label>Medium</label>
      <input
        type="radio"
        value="large"
        name="size"
        onChange={(e) => setSize(e.target.value)}
      />
      <label>Large</label>
      <br />
      <label>Topping</label>
      <select name="topping" onChange={(e) => setToppings(e.target.value)}>
        <option value="Pepperoni">Pepperoni</option>
        <option value="Cheese">Cheese</option>
        <option value="Corn">Corn</option>
      </select>
      <br />
      <input type="checkbox" value={check} onChange={() => setCheck(!check)} />
      Gluten Free
      <br />
      <label>Special Instructions</label>
      <br />
      <textarea value={instr} onChange={(e) => setInst(e.target.value)} />
      <br />
      <button onClick={handleClick}>Send Order</button>
    </form>
  );
};
export default Pizza;
