import "./index.scss";

import EditDoc from "../EditDoc";
import { createDoc } from "../../API/Firestore";
import { FaPlus } from "react-icons/fa";

type isEditType = {
  isEdit: boolean;
  handleEdit: () => void;
  id: string;
};

export default function CreateDoc({ isEdit, handleEdit, id }: isEditType) {
  const createDocument = () => {
    const payload = {
      title: "",
      value: "",
    };
    createDoc(payload);
  };

  if (isEdit) {
    return <EditDoc handleEdit={handleEdit} id={id} />;
  }
  return (
    <div className="new-doc-container">
      <div className="new-doc-inner">
        <button
          className="start-doc"
          onClick={() => {
            handleEdit();
            createDocument();
            // window.location.reload()
          }}
        >
          {" "}
          <p className={"start-doc-icon"}>+</p>
          <p className="new-doc-title">Create New</p>
        </button>
      </div>
    </div>
  );
}
