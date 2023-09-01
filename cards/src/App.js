import ProfileCard from "./ProfileCard";

function App(){
    return(
      
        <div>
            <div> Personal Digital Assistants </div>

            <ProfileCard title = "Alexa" handle = "@alexa99"/>
            <ProfileCard title = "Cortana" handle = "@cortana15"/>
            <ProfileCard title = "Siri" handle = "@apple.siri"/>
            
        </div>
       
    )
}

export default App;