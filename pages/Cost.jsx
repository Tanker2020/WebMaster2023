/*eslint-disable react/no-unescaped-entities*/
import { Carousel } from '@mantine/carousel';
import styles from '../styles/Home.module.css'
import extrastyles from '../styles/Space2.module.scss';
import Glow from '../styles/Glow.module.scss';
import { useMediaQuery,useDisclosure } from '@mantine/hooks';
import { createStyles, Paper, Text, Title, Button, useMantineTheme, rem,Modal,Group } from '@mantine/core';
import { useInView,motion,useAnimation } from 'framer-motion'
import { useRef,useEffect } from 'react';


const useStyles = createStyles((theme) => ({
  card: {
    height: rem(440),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: rem(32),
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
}));

function Card({ image, title, category,overview,keyfeature }) {
    const [opened, { open, close }] = useDisclosure(false);
    const { classes } = useStyles();

  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      sx={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
        <Modal opened={opened} onClose={close} title="More Info" centered size='auto' overlayProps={{
          opacity: 0.55,
          blur: 3,
        }} transitionProps={{ transition: 'fade', duration: 400, timingFunction: 'linear' }} >
            <Group style={{padding: '1%'}}>
            {overview}
            </Group>
            <Group style={{padding: '1%'}}>
            {keyfeature}
            </Group>
        </Modal>
      <div>
        <Text className={classes.category} style={{color:"black",display: 'inline-block',fontSize: 15,background: 'black' ,border: `2px solid black`,boxShadow: `inset 0 0 0.5em 0 white, 0 0 01em 0 white`,textShadow: `0 0 0.125em white, 0 0 0.45em white`}} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title} style={{color:"black" ,textShadow: `0 0 0.125em white, 0 0 0.45em white`}}>
          {title}
        </Title>
      </div>
      <Button variant="white" color="dark" onClick={open}>
        Extra Info
      </Button>
    </Paper>
  );
}

const data = [
  {
    image:
      'https://media.discordapp.net/attachments/1090819724885114930/1099702801824751716/source.png',
    title: 'Interstellar Voyager IV',
    category: 'Fleet Carrier',
    overview: 'Overview: The Interstellar Voyager IV is a cutting-edge spaceship designed for long-duration interplanetary and interstellar missions. It is equipped with advanced propulsion, life support, and communication systems, making it the ultimate spacecraft for exploring the cosmos.',
    keyfeature: 'Key Features: Advanced fusion propulsion system for high-speed, long-range travel. Artificial gravity generation for comfortable living conditions. Life support systems capable of sustaining up to 200 passengers for extended periods. Integrated hydroponic and bioregenerative systems for food production and waste recycling. Advanced communication systems using quantum entanglement technology for real-time communication across vast distances. Price: $5 billion per unit (including development and production costs)'
  
},
  {
    image:
      'https://media.discordapp.net/attachments/1090819724885114930/1099703299369873528/Gallery-7-scaled.png',
    title: 'StratoLifter SL-7',
    category: 'Space Shuttle',
    overview: 'Overview: The StratoLifter SL-7 is a reusable spacecraft designed to transport passengers and cargo from the ground to low Earth orbit destinations. It features advanced propulsion systems, high-capacity life support, and comfortable accommodations for passengers.',
    keyfeature: `Key features:
    Vertical takeoff and landing (VTOL) capabilities.
    Hybrid propulsion system using advanced ion thrusters and chemical rockets.
    Can carry up to 30 passengers and a payload of 15 metric tons.
    Autonomous docking capabilities with orbital stations.
    Advanced heat shield for re-entry and splashdown or runway landing recovery.`
  },
  {
    image:
      'https://media.discordapp.net/attachments/1090819724885114930/1099703529544896602/9c4ebd85204035.png',
    title: 'CER-3000',
    category: 'Land Rover',
    overview: 'Overview: The Celestial Explorer Rover (CER-3000) is a state-of-the-art rover designed to explore and conduct scientific research on celestial bodies. Equipped with advanced AI and autonomous navigation, it can traverse harsh terrain and perform complex tasks with minimal human intervention.',
    keyfeature: `Key features:
    AI-driven autonomous navigation and decision-making capabilities.
    Advanced suite of scientific instruments for geological, atmospheric, and biological analysis.
    Modular design to accommodate specific mission requirements.
    High-resolution imaging and 3D terrain mapping.
    Regenerative power system using solar energy and radioisotope thermoelectric generators (RTGs).
    
    Price:$450 Million`
  },
  {
    image:
      'https://media.discordapp.net/attachments/1090819724885114930/1099711466317303978/star-citizen-unveils-a-massive-space-hauler-crowdfunding-passes-400-million_4.png?width=1054&height=593',
    title: 'SpaceFreighter X-10',
    category: 'Cargo Hauler',
    overview: 'Overview: The SpaceFreighter X-10 is a versatile and efficient cargo hauler designed for transporting goods and resources in space.',
    keyfeature: `Key features include:

    High payload capacity for carrying large quantities of cargo.
    Modular cargo bays for accommodating various types of goods.
    Advanced electric propulsion system for fuel-efficient long-range travel.
    Autonomous navigation and docking capabilities for ease of operation.
    Robotic cargo handling system for efficient loading and unloading.
    In-situ resource utilization for refueling and maintenance in space.
    Reusable design for cost-effective and environmentally friendly operations.
    The SpaceFreighter X-10 combines cutting-edge technology and practical design to provide reliable and sustainable cargo transportation solutions for space commerce and exploration.
    Price: $500 million`
  },
  {
    image:
      'https://media.discordapp.net/attachments/1090819724885114930/1099698132507431023/a835735f4d96c944755847ede340e6d5.png',
    title: 'HyperVelocity-X1',
    category: 'Space Shuttle',
    overview: 'Overview: The HyperVelocity-X1 is a futuristic, high-speed spacecraft designed for space racing competitions. Powered by a fusion reactor and advanced ion thrusters, this sleek and agile vehicle offers unparalleled acceleration, maneuverability, and performance. Featuring AI-assisted flight control, adaptive energy shielding, and a customizable modular design, the Racer-X1 delivers an immersive and thrilling racing experience for pilots seeking the ultimate space racing challenge.',
    keyfeature: `The key features:
    Compact fusion reactor for powerful propulsion.
    Advanced ion thrusters for agility and maneuverability.
    Sleek, aerodynamic design for optimized performance.
    AI-assisted flight control system for precise handling.
    Adaptive energy shielding for protection and efficiency.
    Customizable modular design for tailored configurations.
    Virtual race course integration for immersive racing experiences.
    Price: $95 million`
  },
  {
    image:
      'https://media.discordapp.net/attachments/1090819724885114930/1099715147704041522/kFIC9DH.png?width=1143&height=590',
    title: 'AstroHaven',
    category: 'Biome Habitat',
    overview: 'Overview: The AstroHaven is a state-of-the-art space habitat designed for comfortable and sustainable living in space.',
    keyfeature: `The key features include:

    Modular, expandable design for customizable living spaces.
    Artificial gravity generation for enhanced comfort and well-being.
    Advanced life support systems for air, water, and waste recycling.
    Integrated hydroponics and bioregenerative systems for food production.
    Radiation shielding and micrometeoroid protection for safety.
    Energy-efficient solar power generation and energy storage systems.
    High-speed communication systems for connectivity and entertainment.
    The AstroHaven provides a safe, comfortable, and self-sustaining environment for long-term habitation and exploration beyond Earth.
    
    Price: $200 million `
  },
];

function Demo() {
    const ref = useRef(null);
    const isInView = useInView(ref);
    const animation = useAnimation()
    const animation2 = useAnimation()
    const theme = useMantineTheme();
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
    const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  useEffect(() => {
    if (isInView){
            animation.start({
                x:0,
                transition: {
                    type: 'tween',damping: 7,stiffness: 50, repeat: null,duration: 1.5
                }
            })
            animation2.start({
                x:0,
                transition: {
                    type: 'tween',damping: 7,stiffness: 50, repeat: null,duration: 1.5
                }
            })
    }else if (!isInView){
            animation.start({x:'100vw'})
            animation2.start({x:'-100vw'})
    }

    console.log("Element is in view: ", isInView)
  }, [isInView])

  return (
    <div ref={ref} style={{overflow: 'hidden'}}>
        <motion.div animate={animation} style={{marginBottom: '10%'}}>
                 <h1 style={{color: 'white',textAlign: 'center'}}>THE VEHICLES</h1>
        </motion.div>    
        <Carousel
        withIndicators
        loop
        slideSize="50%"
        breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: 2 }]}
        slideGap="xl"
        align="start"
        slidesToScroll={2}
        >
        {slides}
        </Carousel>
    </div>
  );
}

export default function Cost() {
    return (
        <div style={{background: 'black'}}>
            <div className={extrastyles.mybody+ ' '+extrastyles.space}>
                <MyStyle/>  
            </div>
            <div style={{background: 'black',padding: '10%'}}>
                <Demo/>
            </div>
        </div>
    );
}

function MyStyle() {
    return (
        <div className={extrastyles.solarSystem} style={{minHeight:'200vh'}}>

            {/* types of vehicles and their costs */}
            <div style={{marginLeft: '-38%',color: 'white',marginTop: '-36%', border: 'none',}}>
                <span className={Glow.container} style={{width: '12vw',overflow: 'hidden'}}>
                    <p className={Glow.glitch} dataText="Vehicle Info" style={{fontSize: 22}} >Vehicle Info</p>
                    <p className={Glow.glow}>Vehicle Info</p>
                </span>
            </div>
            <div style={{marginLeft: '-45%',color: 'white',marginTop: '-35%', width: '20vw', minHeight: '20vh',borderRadius: '20px',borderColor: 'orange'}}>
                <p style={{padding: '5%',wordWrap: 'break-word'}}>
{"The space vehicles described here encompass a diverse range of purposes, from exploration and transportation to habitation and cargo hauling. These innovative spacecraft are equipped with advanced technology and designed for optimal performance in the challenging environment of space, ensuring that they meet the needs of their specific missions while maintaining safety and sustainability."}</p>
            </div>
            {/* why are the costs */}
            <div style={{marginLeft: '31%',color: 'white',marginTop: '-21%', border: 'none'}}>
                <span className={Glow.container} style={{width: '10vw',overflow: 'hidden'}}>
                    <p className={Glow.glitch} dataText="Why are the Costs?" style={{fontSize: 21}} >Why are the Costs?</p>
                    <p className={Glow.glow}>Why are the Costs?</p>
                </span>
            </div>
            <div style={{marginLeft: '25%',color: 'white',marginTop: '-20%', width: '20vw', minHeight: '20vh',borderRadius: '20px',borderColor: 'orange'}}>
                <p style={{padding: '5%'}}>{"The cost estimates for the space vehicles consider various aspects, including complexity, technological advancements, and intended use. Vehicles with intricate systems, such as fusion propulsion or artificial gravity, require more sophisticated technology, increasing costs. Pioneering technologies like AI-assisted flight control or quantum communication demand significant research and development investment. Vehicles designed for specialized purposes, such as high-speed space racing or long-duration habitation, need unique features and capabilities that drive up costs. Additionally, advanced materials, specialized components, and complex assembly processes contribute to the production costs of these vehicles. The size and capacity of the vehicles, such as passenger or cargo capacity, also impact overall costs due to the increased materials and engineering requirements."}</p>
            </div>
            {/* vehicle images */}
            <div style={{marginLeft: '-38%',color: 'white',marginTop: '-1%', border: 'none',}}>
                <span className={Glow.container} style={{width: '12vw',overflow: 'hidden'}}>
                    <p className={Glow.glitch} dataText="Training Info" style={{fontSize: 22}} >Training Info</p>
                    <p className={Glow.glow}>Training Info</p>
                </span>
            </div>
            <div style={{marginLeft: '-45%',color: 'white', width: '20vw', minHeight: '20vh',borderRadius: '20px',borderColor:'orange'}}>
                <p style={{margin: '5%',fontSize: 14}}> {"Designed for aspiring space travelers, our comprehensive and immersive training experience provides the essential skills needed for an unforgettable journey beyond Earth's atmosphere. Our program covers academic foundations in subjects like engineering, physics, astronomy, and geology, as well as physical conditioning to build strength, endurance, and flexibility. You'll learn spacecraft operations through hands-on training with state-of-the-art simulators, master extravehicular activities (EVA) skills in advanced training facilities, and develop crucial survival skills for emergency situations. Our program also emphasizes team building and communication through group exercises, simulations, and problem-solving tasks to ensure effective collaboration with fellow astronauts. Finally, you'll participate in realistic mission simulations that replicate the challenges and excitement of a genuine space mission, preparing you for the ultimate space adventure."}</p>
            </div>


            <div className={extrastyles.sun}></div>
            <div className={extrastyles.mercury}></div>
            <div className={extrastyles.venus}></div>
            <div className={extrastyles.earth}></div>
            <div className={extrastyles.mars}></div>
            <div className={extrastyles.jupiter}></div>
            <div className={extrastyles.saturn}></div>
            <div className={extrastyles.uranus}></div>
            <div className={extrastyles.neptune}></div>
            <div className={extrastyles.pluto}></div>
            <div className={extrastyles.mainAsteroidsBelt}></div>
        </div>

    ) 
}