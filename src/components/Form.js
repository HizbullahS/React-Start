import "./formstyles.css"

export default function Form() {
  return (
    <>
      <h1>Student Form</h1>

      <form>
        <input class="input" type="text" placeholder="First Name" />
        <input class="input" type="text" placeholder="Last Name" />
        <input class="input" type="email" placeholder="Email" />
        <input class="input" type="number" placeholder="Number" />
        <input class="input" type="number" placeholder="Age" />
        <input class="input" type="text" placeholder="Address" />
        <br />
        <br />
        <button>Submit</button>
      </form>

    </>
  );
}