import "./footer.css";
const Footer = (props) => {
  const { companyName } = props;
  return (
    <footer>
      <p>Made with Love by {companyName} Students</p>
    </footer>
  );
};
export default Footer;
