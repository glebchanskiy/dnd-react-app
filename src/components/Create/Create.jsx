import CreateFormContainer from "./CreateForm/CreateFormContainer";
import styles from './Create.module.css'

const Create = (props) => {
  return (
    <div className={`container ${styles.formContainer} mt-5 `}>
      <CreateFormContainer />
    </div>
  );
};

export default Create;
