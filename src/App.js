import "./App.css";
import FormInput from "./components/FormInput";
function App() {
  return (
    <div className='form'>
      <form className="App">
        <FormInput placeholder="@username" />
        <FormInput placeholder="Email" />
        <FormInput placeholder="Password" />
        <FormInput placeholder="Confirm password" />
      </form>
    </div>
  );
}

export default App;
