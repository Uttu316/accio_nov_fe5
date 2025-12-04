import "./practice.css";
import Counter from "../../components/Counter";
import Inventory from "../../components/inventory";
import SaleBanner from "../../components/salebanner";
import UserList from "../../components/userList";
import PrageWrapper from "../../components/pageWrapper";

function PracticePage() {
  return (
    <PrageWrapper title="Practice">
      <div className="main_container">
        <h1 className="heading">Welcome to React</h1>
        <UserList />
        <Counter />
        <Inventory />
        <SaleBanner />
      </div>
    </PrageWrapper>
  );
}

export default PracticePage;
