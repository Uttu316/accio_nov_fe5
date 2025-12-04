import "./practice.css";
import Counter from "../../components/Counter";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Inventory from "../../components/inventory";
import SaleBanner from "../../components/salebanner";
import UserList from "../../components/userList";

function PracticePage() {
  return (
    <>
      <Header title={"Practice"} />

      <div className="main_container">
        <h1 className="heading">Welcome to React</h1>
        <UserList />
        <Counter />
        <Inventory />
        <SaleBanner />
      </div>
      <Footer companyName="Accio" />
    </>
  );
}

export default PracticePage;
