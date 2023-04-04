import Nav from "./HeaderNav/HeaderNav";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <h1 className="site-title">Sartre's List</h1>
      <h2 className="site-subtitle">Better-Dressed People</h2>
      <Nav />
    </div>
  );
}
