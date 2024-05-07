import "./MainLayout.style.css";
import SearchBar from "../functional/SearchBar";

export default function MainLayout() {
  return (
    <div className="mainLayout">
      <header>With A Sky Like This</header>
      <SearchBar />
      <footer>
        <p>
          “Every day may not be good, but there`s something good in every day” -
          Alice Morse Earle.
        </p>
      </footer>
    </div>
  );
}
