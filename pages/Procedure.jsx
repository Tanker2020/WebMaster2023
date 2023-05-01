/*eslint-disable react/no-unescaped-entities*/
import extraStyle2 from '../styles/Caps.module.css'
import extraStyle from '../styles/Final.module.scss'
import { useState } from 'react';
import {Image } from '@mantine/core'
import extraStyles3 from '../styles/Glow.module.scss'

export default function Procedure() {
    return (
        <div>
        <h1>Procedure</h1>
        <RoadMap/>
        </div>
    );
}

function RoadMap() {

    const [data,Setdata] = useState('Neel Space Industries is a pioneering company in the field of civilian space exploration. Our mission is to make space accessible to everyone, and we are proud to be at the forefront of this exciting new industry. With our advanced spacecraft and highly trained civilian astronauts, we are making strides towards exploring the planets of our solar system.')
    const [img,Setimg] = useState('https://images.fineartamerica.com/images-medium-large-5/mercury-planet-bernard-michel.jpg')

    function Data(num){
        if (num==9){
            Setdata('For Pluto, the HyperVelocity-X1 is a futuristic, high-speed spacecraft that offers unparalleled acceleration, maneuverability, and performance. It is powered by a fusion reactor and advanced ion thrusters and is designed for space racing competitions.')
            Setimg('https://img5.goodfon.com/wallpaper/nbig/a/fe/science-fiction-visual-effects-galaxy-universe-fresh-viewp-7.jpg')
        }else if (num==8){
            Setdata('Neptune is the eighth planet from the sun and is known for its blue color caused by the absorption of red light by methane in its atmosphere. Neel Space Industries Interstellar Voyager IV is capable of reaching Neptune, where it can conduct research on its atmosphere and study its moons. The Interstellar Voyager IV has advanced communication systems, making it capable of real-time communication across vast distances.')
            Setimg('https://cdn.shopify.com/s/files/1/0074/0497/8227/products/Neptune_THUMB.png?v=1558471776')
        }else if (num==7){
            Setdata('Uranus is the seventh planet from the sun and has a unique tilt, causing its axis to be almost parallel to its orbit. Neel Space Industries Interstellar Voyager IV is equipped to study Uranus, which has advanced hydroponic and bioregenerative systems for food production and waste recycling, making it self-sustaining for long-term habitation.')
            Setimg('https://images.fineartamerica.com/images-medium-large/artwork-of-uranus-julian-baum.jpg')
        }else if (num==6){
            Setdata('Saturn is known for its beautiful rings and is the sixth planet from the sun. Neel Space Industries Interstellar Voyager IV is capable of reaching Saturn, where it can conduct research on its atmosphere and study its rings. The Interstellar Voyager IV has advanced life support systems, making it capable of sustaining up to 200 passengers for extended periods.')
            Setimg('https://cdn.shopify.com/s/files/1/1568/8443/products/main_View_Of_Planet_Saturn_Wall_Art.jpg?crop=center&height=1024&v=1650219964&width=1024')
        }else if (num==5){
            Setdata('Jupiter is the largest planet in the solar system and has a strong magnetic field. To explore Jupiter, Neel Space Industries utilizes the Interstellar Voyager IV, which is equipped with advanced communication systems using quantum entanglement technology for real-time communication across vast distances. It also has artificial gravity generation for comfortable living conditions, making long-duration missions feasible.')
            Setimg('https://rare-gallery.com/uploads/posts/967166-space-Jupiter-sun-rays-red-Endless-Space-space-art.jpg')
        }else if (num==4){
            Setdata('Mars is known as the "Red Planet" due to its reddish appearance, caused by iron oxide on its surface. To explore Mars, Neel Space Industries uses the Celestial Explorer Rover (CER-3000) and the Interstellar Voyager IV. CER-3000 can traverse the harsh terrain of Mars and perform complex tasks with minimal human intervention. The Interstellar Voyager IV is equipped with an advanced fusion propulsion system for high-speed, long-range travel, making it the perfect spacecraft for long-duration interplanetary and interstellar missions.')
            Setimg('https://cdn.shopify.com/s/files/1/1568/8443/products/main_Glowing_Planet_Mars_Wall_Art.jpg?crop=center&height=1024&v=1649201884&width=1024')
        }else if (num==3){
            Setdata('Earth is the only planet in the solar system that has life. Neel Space Industries vehicles designed for exploration on Earth are the Celestial Explorer Rover (CER-3000) and the Interstellar Voyager IV. CER-3000 can conduct geological, atmospheric, and biological analysis, while the Interstellar Voyager IV is the ultimate spacecraft for exploring the cosmos. It has advanced life support systems capable of sustaining up to 200 passengers for extended periods and integrated hydroponic and bioregenerative systems for food production and waste recycling.')
            Setimg('https://hdwallpaperim.com/wp-content/uploads/2017/08/22/447893-space-planet-digital_art-space_art.jpg')
        }else if (num==2){
            Setdata('Venus is a planet with a toxic atmosphere and extreme atmospheric pressure. Neel Space Industries uses the StratoLifter SL-7 spacecraft to reach Venus, which has an advanced heat shield for re-entry and splashdown or runway landing recovery. It is a reusable spacecraft that can transport passengers and cargo from the ground to low Earth orbit destinations. Its vertical takeoff and landing (VTOL) capabilities, hybrid propulsion system, and autonomous docking capabilities with orbital stations make it ideal for the task.')
            Setimg('https://storage.googleapis.com/pod_public/1300/120926.jpg')
        }else if (num==1){
            Setdata('Mercury is the planet closest to the sun, and its temperature can reach over 800 degrees Fahrenheit. To explore Mercury, Neel Space Industries utilizes the Celestial Explorer Rover (CER-3000), which can withstand extreme temperatures and harsh terrain. Equipped with an AI-driven autonomous navigation system, CER-3000 can operate with minimal human intervention. Additionally, the rover has a regenerative power system using solar energy and radioisotope thermoelectric generators (RTGs), providing it with a long-lasting energy source.')
            Setimg('https://images.fineartamerica.com/images-medium-large-5/mercury-planet-bernard-michel.jpg')
        }
    }

    return (
        <>
    <div className={extraStyle.body}>
      <h1 className={extraStyle.logo} style={{marginTop: '5%'}}>Solar explorer</h1>

      <input type="radio" id="pluto" name="planet" className={extraStyle.planet9} checked/>
      <label htmlFor="pluto" className={`${extraStyle.menu} ${extraStyle.pluto}`}>
        <div className={extraStyle.preview}></div>
        <div className={extraStyle.info}>
          <h2 onClick={()=>Data(9)}><span className={extraStyle.pip}>Pluto</span></h2>
        </div>
      </label>

      <input type="radio" id="neptune" name="planet" className={extraStyle.planet8}checked />
      <label htmlFor="neptune" className={`${extraStyle.menu} ${extraStyle.neptune}`}>
        <div className={extraStyle.preview}></div>
        <div className={extraStyle.info}>
          <h2 onClick={()=>Data(8)}><span className={extraStyle.pip}>Neptune</span></h2>
        </div>
      </label>

      <input type="radio" id="uranus" name="planet" className={extraStyle.planet7} checked/>
      <label htmlFor="uranus" className={`${extraStyle.menu} ${extraStyle.uranus}`}>
        <div className={extraStyle.preview}></div>
        <div className={extraStyle.info}>
          <h2 onClick={()=>Data(7)}><span className={extraStyle.pip}>Uranus</span></h2>
        </div>
      </label>

      <input type="radio" id="saturn" name="planet" className={extraStyle.planet6} checked/>
      <label htmlFor="saturn" className={`${extraStyle.menu} ${extraStyle.saturn}`}>
        <div className={extraStyle.preview}></div>
        <div className={extraStyle.info}>
          <h2 onClick={()=>Data(6)}><span className={extraStyle.pip}>Saturn</span></h2>
        </div>
      </label>

      <input type="radio" id="jupiter" name="planet" className={extraStyle.planet5} checked/>
      <label htmlFor="jupiter" className={`${extraStyle.menu} ${extraStyle.jupiter}`}>
        <div className={extraStyle.preview}></div>
        <div className={extraStyle.info}>
          <h2 onClick={()=>Data(5)}><span className={extraStyle.pip}>Jupiter</span></h2>
        </div>
      </label>

      <input type="radio" id="mars" name="planet" className={extraStyle.planet4} checked />
      <label htmlFor="mars" className={`${extraStyle.menu} ${extraStyle.mars}`}>
        <div className={extraStyle.preview}></div>
        <div className={extraStyle.info}>
          <h2 onClick={()=>Data(4)}><span className={extraStyle.pip}>Mars</span></h2>
        </div>
      </label>

      <input type="radio" id="earth" name="planet" className={extraStyle.planet3} checked />
      <label htmlFor="earth" className={`${extraStyle.menu} ${extraStyle.earth}`}>
        <div className={extraStyle.preview}></div>
        <div className={extraStyle.info}>
          <h2 onClick={()=>Data(3)}><span className={extraStyle.pip}>Earth</span></h2>
        </div>
      </label>

      <input type="radio" id="Venus" name="planet" className={extraStyle.planet2} checked />
      <label htmlFor="Venus" className={`${extraStyle.menu} ${extraStyle.venus}`}>
        <div className={extraStyle.preview}></div>
        <div className={extraStyle.info}>
          <h2 onClick={()=>Data(2)}><span className={extraStyle.pip}>Venus</span></h2>
        </div>
      </label>

      <input type="radio" id="Mercury" name="planet" className={extraStyle.planet1} checked />
      <label htmlFor="Mercury" className={`${extraStyle.menu} ${extraStyle.mercury}`}>
        <label className={extraStyle.preview}></label>
        <div className={extraStyle.info}>
          <h2 onClick={()=>Data(1)}><span className={extraStyle.pip}>Mercury</span></h2>
        </div>
      </label>
      <p style={{color:'white',textAlign: 'center',marginTop: '10%',marginLeft: '40%',maxWidth: '20%'}}>{data}</p>
      <Image style={{marginTop: '-15%',marginLeft: '70%',maxWidth: '20%',minWidth:'10%'}} src={img} alt="Broken Image"/> 
    </div>
    <div style={{overflow: 'hidden'}}>        
        <section className={extraStyle2.section}>
            <h1 style={{lineHeight: 1.15,fontSize: '4rem',color:"black" ,textShadow: `0 0 0.125em white, 0 0 0.45em white`,position: 'relative',top:'270px',zIndex: '1',maxWidth: '60%', textAlign: 'center',marginLeft:'20%'}}>SAFETY</h1>
            <p style={{color:"white" ,textShadow: `0 0 0.125em white, 0 0 0.45em white`,position: 'relative',top:'270px',zIndex: '1',maxWidth: '60%', textAlign: 'center',marginLeft:'20%'}}>Neel Space Industries is a company that specializes in training and transforming civilians into astronauts, giving them the unique opportunity to experience space travel. Neel Space Industries recognizes that space travel can be risky, and as such, the company takes specific safety measures to maximize the experience of the civilians. First and foremost, Neel Space Industries ensures that all of its spacecraft and equipment are thoroughly inspected and maintained. Additionally, the company has a comprehensive training program that covers everything from spaceflight fundamentals to emergency procedures. All civilians undergo rigorous physical and mental evaluations to ensure they are fit for space travel. Neel Space Industries also has a team of experienced and qualified astronauts who accompany the civilians on their journey, providing guidance and support throughout the entire mission. With these safety procedures in place, Neel Space Industries offers an unforgettable and safe space travel experience for civilians.</p>

            <article className={extraStyle2.article}>                
                <div></div>
                <div></div>
                <div></div>
            </article>
        </section>
    </div>
    </>
    );
}

  
