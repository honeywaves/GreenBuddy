import styles from "./MainContainer.module.scss";
import PlantCard from "../PlantCard/PlantCard";

const MainContainer = () => {
  return (
    <div className={styles.mainContainer}>
      <PlantCard />
    </div>
  );
};

export default MainContainer;
