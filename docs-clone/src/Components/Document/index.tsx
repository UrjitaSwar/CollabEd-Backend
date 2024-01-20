import { useState } from "react";
import Topbar from "../Topbar";
import CreateDoc from "../CreateDoc";
import DocsList from "../DocsList";
import "./index.scss";



export default function Document({ photoURL }: TopbarProps) {
  const[isEdit,setIsEdit]=useState(false);
  const [id,setId]=useState('')
  const openDoc=(id:string)=>{
    setIsEdit(!isEdit)
    setId(id)


  }

  // const getCurrentDocument=()=>{
  //   getCurrentDoc(id)
  // }

  const handleEdit=()=>{
    setIsEdit(!isEdit)
  }
  return(
    <div style={{width : "100%", height : "100%", display : "flex", justifyContent :"start", padding :"24px",paddingTop :"100px"}}>
      <Topbar photoURL={photoURL}/>
      <CreateDoc  id={id} handleEdit={handleEdit}  isEdit={isEdit}/>
      {isEdit? <></>:<DocsList openDoc={openDoc}/>}
    </div>
  );
}