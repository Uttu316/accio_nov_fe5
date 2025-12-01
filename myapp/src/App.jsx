import "./App.css";
import Counter from "./components/Counter";
import Footer from "./components/footer";
import Header from "./components/header";
import Inventory from "./components/inventory";
import UserList from "./components/userList";

function App() {
  return (
    <>
      <Header title={"Home"} />

      <div className="main_container">
        <h1 className="heading">Welcome to React</h1>
        <UserList />
        <Counter />
        <Inventory />
      </div>
      <Footer companyName="Accio" />
    </>
  );
}

export default App;
