import styles from "./PlantCard.module.scss";
import plantImage from "../../assets/plantsSvg/plant-happy.svg";

const PlantCard = () => {
  return (
    <div className={styles.plantCard}>
      <h2 className={styles.plantName}>Bergamotte</h2>
      <img src={plantImage} alt="Plant" />
      <div className={styles.plantInfo}>
        <p className={styles.plantDescription}>Plant Description</p>
      </div>
    </div>
  );
};

export default PlantCard;
