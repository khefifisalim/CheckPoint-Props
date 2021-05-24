import "./App.css";
import ProfileComponent from "../src/Profile/ProfileComponent";

function App() {
  const handleName = (name) => alert(name);
  return (
    <div>
      <ProfileComponent
        FullName={"Cristiano Ronaldo"}
        bio={
          "Cristiano Ronaldo dos Santos Aveiro, couramment appelé Ronaldo ou Cristiano Ronaldo et surnommé CR7, né le 5 février 1985 à Funchal, est un footballeur international portugais qui évolue au poste d'attaquant à la Juventus FC."
        }
        profession={"Football player"}
        handle={handleName}
      >
        <img
          style={{ width: "25%", padding: "10px" }}
          src="https://sportpng.com/wp-content/uploads/2020/01/Cristiano-Ronaldo-sportpng-3.jpg"
          alt="Cris"
        />
      </ProfileComponent>
    </div>
  );
}

export default App;
