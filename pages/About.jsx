import styles from '../styles/SpaceMovement.module.scss'
export default function About() {
    return (
        <div>
            <SpaceBackground/>
        </div>
    );
}

function SpaceBackground(){
    return (
        <div className={styles.spaceBackground}>
          <div className={styles.starsWrapper}>
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
          </div>
        </div>
      );
  };