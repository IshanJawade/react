import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";
import 'bulma/css/bulma.css';
// import 'bootstrap/dist/css/bootstrap.css'

function App(){
    return(
      
        <div>
            <section class="hero is-primary">
                <div class="hero-body">
                    <p class="title">
                        Personal Digital Assistants
                    </p>
                </div>
            </section>

            <div className = 'container'>
                <section calssName = 'section'>
                    <div className = 'columns'>
                        <div className = 'column is-3'>
                            <ProfileCard title = "Alexa" handle = "@alexa99" image = {AlexaImage}
                                desc = 'Alexa is made by Amazon. It helps you to buy things. And other stuff'
                            />
                        </div>
                        <div className = 'column is-3'>
                            <ProfileCard title = "Cortana" handle = "@cortana15" image = {CortanaImage}
                                desc = 'Contana is made by Microsoft. Who is now capturing every company.'
                            />
                        </div>
                        <div className = 'column is-3'>
                            <ProfileCard title = "Siri" handle = "@apple.siri" image = {SiriImage}
                                desc = 'Siri is made by Apple.Inc. Now, its neglected by people and others.'
                            />
                        </div>
                    </div>
                </section>
            </div>      
        </div>
       
    )
}

export default App;