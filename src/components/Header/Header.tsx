import SearchBar from "../SearchBar/SearchBar";

export default function Header() {
  return (
    <>
      <header className="header" style={{ background: "red" }}>
        <div className="container">
          <SearchBar />
        </div>
      </header>
    </>
  );
}
