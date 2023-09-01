import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

function App(){
    return(
      
        <div>
            <div> Personal Digital Assistants </div>

            <img src={AlexaImage}/>
            <img src={CortanaImage}/>
            <img src={SiriImage}/>

            <ProfileCard title = "Alexa" handle = "@alexa99"/>
            <ProfileCard title = "Cortana" handle = "@cortana15"/>
            <ProfileCard title = "Siri" handle = "@apple.siri"/>
            
        </div>
       
    )
}

export default App;