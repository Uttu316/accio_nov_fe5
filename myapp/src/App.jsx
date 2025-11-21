import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";

function App() {
  const fname = "Gautam";
  const lname = "siddharth";
  const instructor = {
    name: "Utkarsh",
    city: "Agra",
  };
  const add = (x, y) => {
    return x + y;
  };

  const students = [
    "Abhinav",
    "Deepika",
    "Rupali",
    "Pathmasri",
    "Gautam",
    "Gagan",
  ];
  const isGreeting = true;
  return (
    <>
      <Header />
      <div className="main_container">
        <h1 className="heading">Welcome to React</h1>
        <h5>with</h5>
        <h1>{instructor.name}</h1>
        <h2>{instructor.city}</h2>
        {add(2, 3)}
        {add(5, 6)}
        {isGreeting && <p>Hello</p>}
        <hr />
        <h4>Superb Student List:</h4>
        <ol className="list_container">
          {students.map((item) => (
            <li>{item}</li>
          ))}
        </ol>
      </div>
      <Footer />
    </>
  );
}

export default App;
