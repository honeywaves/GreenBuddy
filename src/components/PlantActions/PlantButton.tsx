import styles from "./PlantActions.module.scss";

interface PlantButtonProps {
  color: string;
  icon: string;
}

const PlantButton = ({ color, icon }: PlantButtonProps) => {
  return (
    <div className={styles.plantButton} style={{ backgroundColor: color }}>
      <p>{icon}</p>
    </div>
  );
};

export default PlantButton;
