import Nav from "./Nav";

function BaseTemplate({ children, page }) {
  return (
    <section className="grid lg:grid-cols-5 h-screen grid-cols-1">
      <Nav></Nav>

      {children}
    </section>
  );
}
export default BaseTemplate;
