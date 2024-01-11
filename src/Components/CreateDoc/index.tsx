 import "./index.scss";

import EditDoc from "../EditDoc";
import { createDoc } from "../../API/Firestore";




 

type isEditType = {
  isEdit: boolean;
  handleEdit: () => void;
  id: string;

};

export default function CreateDoc({isEdit,handleEdit,id}:isEditType) {

 

  const createDocument = () => {
    const payload = {
      title: "",
      value: "",
    };
    createDoc(payload);
  };

  if (isEdit) return <EditDoc  handleEdit={handleEdit} id={id} />;
  return (
    <div className="new-doc-container">
      <div className="new-doc-inner">
        <p>Start a new document</p>
        <img
          className="start-doc"
          src="https://t4.ftcdn.net/jpg/01/05/43/11/360_F_105431104_RuBWhKxczj766ouWpgAlFMID4FMxRz0j.webp" 
          onClick={() => {
            handleEdit();
            createDocument()
            // window.location.reload()
          }}
        />
        <p className="title">Blank</p>
      </div>

    </div>
  );
}
