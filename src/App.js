import "./App.css";
import Profile from "./profile/Profile";
function App() {

  const handleName  = name => alert(name);
  const styleObjet = {border:"black double",  margin:"20px", width:"85vh" ,padding:"20px", position: "absolute",
  left: "30%"}
  return (
    <div style={styleObjet}>
     <Profile fullName="🎀  𝒜𝓀𝒾 𝒦ō𝒹ā  🎀"  bio="defy difficulties😣, put effort, fall and get up, keep learning and hope to be a developer😊!! 🎵 I'm on my way i can go the distance~ i don't care how far somehow i be strong 💪!🎵" 
     profession="developer 💻" alertMyInput={handleName}> 
     /asset/anime.jpg </Profile>
    </div>
  );
}

export default App;




