import Contact from "./contact";

import MrWhiskerson from "./images/mr-whiskerson.png"
import Felix from "./images/felix.png"
import Pumpkin from "./images/pumpkin.png"


export default function App() {
    return (
        <div className="contacts">
            <Contact
            // passing props
                img={MrWhiskerson}
                // img= "src/images/mr-whiskerson.png"
                name="Mr. Whiskerson"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
            />
            <Contact
                img="src/images/fluffykins.png"
                name="Fluffykins"
                phone="(212) 555-2345"
                email="fluff@me.com"
            />
            <Contact
                //  img="src/Section2/challenge2/images/felix.png"
                 img={Felix}
                name="Felix"
                phone="(212) 555-4567"
                email="thecat@hotmail.com"
            />
            <Contact
            //    img="src/Section2/challenge2/images/pumpkin.png"
               img={Pumpkin}
                name="Pumpkin"
                phone="(0800) CAT KING"
                email="pumpkin@scrimba.com"
            />
        </div>
    )
}

// u can do with all images i left one to remember relative path  also a method 