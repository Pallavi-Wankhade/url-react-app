import AppFooter from "../component/AppFooter/AppFooter";
import AppHeader from "../component/AppHeader/AppHeader";
import UrlBoxes from "../component/UrlBoxes/UrlBoxes";
// import UrlTable from "../component/UrlTable/UrlTable";

const Home = () => {
  return (
    <>
      <AppHeader />{" "}
      <div className="text-center">
        <h3 className="mt-3">URL Shortner </h3>
        <UrlBoxes />
      </div>
      <AppFooter />
    </>
  );
};

export default Home;
