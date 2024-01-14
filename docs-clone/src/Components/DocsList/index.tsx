import "./index.scss"
import {getDocuments} from "../../API/Firestore"
import {useEffect,useState} from "react"
import LastSeen from "../../LastScene";


type OpenDocType={
  openDoc:(id:string,value:string,title:string)=>void;
}

export default function DocsList({openDoc}:OpenDocType){

  const [docs,setDocs]=useState([{title:'',userName:"",value:"", id:""}])

  const getDocs=async()=>{

    await getDocuments(setDocs)
    console.log(docs)
  }

  useEffect(()=>{
    getDocs();
  },[])
  return(
    <div className="docs-main">
      {docs.map((doc)=>{
        return(
          <div className="doc-card" onClick={()=>openDoc(doc.id,doc.value,doc.title)}>
            <p className="doc-content" dangerouslySetInnerHTML={{__html:doc.value.substring(0,200)}}></p>
            <p className="doc-title">{doc.title}</p>
            {/* <LastSeen/> */}
          </div>
        )
      })}
    </div>
  )
}