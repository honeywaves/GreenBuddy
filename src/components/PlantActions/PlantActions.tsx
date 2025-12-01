import styles from "./PlantActions.module.scss";
import PlantButton from "./PlantButton";

const PlantActions = () => {
  return (
    <div className={styles.plantActionsContainer}>
      <div className={styles.plantActions}>
        <PlantButton color="#56674d" icon="💧" />
        <PlantButton color="#56674d" icon="💡" />
        <PlantButton color="#56674d" icon="🌱" />
      </div>
    </div>
  );
};

export default PlantActions;
