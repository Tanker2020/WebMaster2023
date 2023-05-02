/*eslint-disable react/no-unescaped-entities*/
import styles from '../styles/SpaceMovement.module.scss'
import { Accordion, createStyles, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    borderRadius: theme.radius.sm,
  },

  item: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    border: `${rem(1)} solid transparent`,
    position: 'relative',
    zIndex: 0,
    transition: 'transform 150ms ease',

    '&[data-active]': {
      transform: 'scale(1.03)',
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
      boxShadow: theme.shadows.md,
      borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],
      borderRadius: theme.radius.md,
      zIndex: 1,
    },
  },

  chevron: {
    '&[data-rotate]': {
      transform: 'rotate(-90deg)',
    },
  },
}));




export default function About() {
    return (
        <div>
            <SpaceBackground/>
        </div>
    );
}

function SpaceBackground(){
    const {classes} = useStyles()

    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('STUDENT_COPYRIGHT_CHECKLIST.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'STUDENT_COPYRIGHT_CHECKLIST.pdf';
                alink.click();
            })
        })
    }

    return (
        <div className={styles.spaceBackground}>
            {/* Generate multiple stars */}
            {Array.from({ length: 100 }).map((_, index) => (
              <div
                key={index}
                className={styles.star}
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                }}
              />
            ))}
            <h1 style={{color: 'white',position: 'relative', top: '150px',textAlign: 'center'}}>About Tools</h1>
            <Accordion
                maw={420}
                mx="auto"
                variant="filled"
                defaultValue="customization"
                classNames={classes}
                className={classes.root}
                style={{marginTop: '20%'}}
            >
                <Accordion.Item value="NextJS">
                    <Accordion.Control>NextJS</Accordion.Control>
                    <Accordion.Panel>The NextJS framework was used to build a fullstack application here to properly utilize Server Side Rendering and other fullstack application tools coming from NextJS it also allows for quick deployment to Vercel.</Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item value="React">
                    <Accordion.Control>React</Accordion.Control>
                    <Accordion.Panel>React is a library used to build fullstack applications with NextJS and it allows for JSX(a form of JS and HTML ) to be utilized with npm packages and custom/built in react logic hooks to complete a website.</Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item value="Mantine">
                    <Accordion.Control>Mantine</Accordion.Control>
                    <Accordion.Panel>Mantine a react library that allows for developers to easily style and create new objects and style sheets in a very fancy and quick way. </Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item value="Bootstrap">
                    <Accordion.Control>Bootstrap</Accordion.Control>
                    <Accordion.Panel>Bootstrap is a library for styling in a much more efficient and developer friendly way for quick and personal styling for JSX.</Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item value="Scss">
                    <Accordion.Control>Scss</Accordion.Control>
                    <Accordion.Panel>Scss is used with the npm package for SASS to precompute logic for css and this allows for much better and cleaner and realistic animations throughout this code.</Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item value="Framer-Motion">
                    <Accordion.Control>Framer-Motion</Accordion.Control>
                    <Accordion.Panel>This package allows for quick animations that are very realistic and useful for user interaction.</Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item value="Image Links">
                    <Accordion.Control>Image Links</Accordion.Control>
                    <Accordion.Panel>
                        <ul>
                        <button onClick={onButtonClick}>
                            DOWNLOAD WORKLOG AND STUDENT CHECKLIST PDF
                        </button>
                        <li><a href='https://space.nss.org/stanford-torus-space-settlement/ ' target="_blank">https://space.nss.org/stanford-torus-space-settlement/</a></li>
                        <li><a href='https://www.pinterest.com/pin/453245149983245632/' target="_blank">https://www.pinterest.com/pin/453245149983245632/</a></li>
                        <li><a href='https://starcitizen.tools/32-SCU_container' target="_blank">https://starcitizen.tools/32-SCU_container</a></li>
                        <li><a href='https://www.behance.net/gallery/85204035/MR-02-Tactical' target="_blank">https://www.behance.net/gallery/85204035/MR-02-Tactical</a></li>
                        <li><a href='https://www.pinterest.com/pin/rsiperseuspromo-13-perseus-star-citizen-wiki--830210512560563260/' target="_blank">https://www.pinterest.com/pin/rsiperseuspromo-13-perseus-star-citizen-wiki--830210512560563260/</a></li>
                        <li><a href='https://starcitizen.tools/Kraken' target="_blank">https://starcitizen.tools/Kraken</a></li>
                        <li><a href='https://images.fineartamerica.com/images-medium-large-5/mercury-planet-bernard-michel.jpg' target="_blank">https://images.fineartamerica.com/images-medium-large-5/mercury-planet-bernard-michel.jpg</a></li>
                        <li><a href='https://storage.googleapis.com/pod_public/1300/120926.jpg' target="_blank">https://storage.googleapis.com/pod_public/1300/120926.jpg</a></li>
                        <li><a href='https://hdwallpaperim.com/wp-content/uploads/2017/08/22/447893-space-planet-digital_art-space_art.jpg' target="_blank">https://hdwallpaperim.com/wp-content/uploads/2017/08/22/447893-space-planet-digital_art-space_art.jpg</a></li>
                        <li><a href='https://cdn.shopify.com/s/files/1/1568/8443/products/main_Glowing_Planet_Mars_Wall_Art.jpg?crop=center&height=1024&v=1649201884&width=1024' target="_blank">https://cdn.shopify.com/s/files/1/1568/8443/products/main_Glowing_Planet_Mars_Wall_Art.jpg?crop=center&height=1024&v=1649201884&width=1024</a></li>
                        <li><a href='https://rare-gallery.com/uploads/posts/967166-space-Jupiter-sun-rays-red-Endless-Space-space-art.jpg' target="_blank">https://rare-gallery.com/uploads/posts/967166-space-Jupiter-sun-rays-red-Endless-Space-space-art.jpg</a></li>
                        <li><a href='https://cdn.shopify.com/s/files/1/1568/8443/products/main_View_Of_Planet_Saturn_Wall_Art.jpg?crop=center&height=1024&v=1650219964&width=1024' target="_blank">https://cdn.shopify.com/s/files/1/1568/8443/products/main_View_Of_Planet_Saturn_Wall_Art.jpg?crop=center&height=1024&v=1650219964&width=1024</a></li>
                        <li><a href='https://images.fineartamerica.com/images-medium-large/artwork-of-uranus-julian-baum.jpg' target="_blank">https://images.fineartamerica.com/images-medium-large/artwork-of-uranus-julian-baum.jpg</a></li>
                        <li><a href='https://cdn.shopify.com/s/files/1/0074/0497/8227/products/Neptune_THUMB.png?v=1558471776' target="_blank">https://cdn.shopify.com/s/files/1/0074/0497/8227/products/Neptune_THUMB.png?v=1558471776</a></li>
                        <li><a href='https://img5.goodfon.com/wallpaper/nbig/a/fe/science-fiction-visual-effects-galaxy-universe-fresh-viewp-7.jpg' target="_blank">https://img5.goodfon.com/wallpaper/nbig/a/fe/science-fiction-visual-effects-galaxy-universe-fresh-viewp-7.jpg</a></li>
                        </ul>
                    </Accordion.Panel>
                </Accordion.Item>
            </Accordion>
        </div>
      );
  };