import { Dna } from "react-loader-spinner";
import css from "components/Loader/Loader.module.css";

const Loader = () => {
  return (
    <div className={css.container}>
        <Dna
                visible={true}
                height="80"
                width="80"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
        />
    </div>
  );
};

export default Loader;