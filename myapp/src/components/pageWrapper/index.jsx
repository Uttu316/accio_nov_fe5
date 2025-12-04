import Footer from "../footer";
import Header from "../header";

const PrageWrapper = (props) => {
  const { children, title, className } = props;

  return (
    <div className={className}>
      <Header title={title} />
      {children}
      <Footer />
    </div>
  );
};

export default PrageWrapper;
