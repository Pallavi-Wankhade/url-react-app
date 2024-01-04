import styles from "./AppFooter.module.css";

const AppFooter = () => {
  return (
    <>
      <div className={styles.footer}>
        {/* "bg-primary position-fixed text-dark text-center p-3 text-lg-start"> */}
        <div className="text-center ">© Copyright : urlShortner</div>
      </div>
    </>
  );
};

export default AppFooter;
