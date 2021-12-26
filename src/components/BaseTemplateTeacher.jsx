import NavTeacher from "./NavTeacher";

function BaseTemplateTeacher({ children, page }) {
  return (
    <section className="grid lg:grid-cols-5 h-screen grid-cols-1">
      <NavTeacher></NavTeacher>
      {children}
    </section>
  );
}
export default BaseTemplateTeacher;
