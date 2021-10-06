import { InsertComment } from "../../../../graphql/mutation";
import { DeleteComment } from "../../../../graphql/mutation";
import { GetComment } from "../../../../graphql/mutation";
import { UpdateComment } from "../../../../graphql/mutation";
import { useQuery,useMutation } from "@apollo/client";
import {useState} from 'react';
import LoadingSvg from '../LoadingSvg'

export default function UseComment(){

    
    const [titleStatus, setTitleStatus] = useState(false)
    const [newTitle, setNewTitle] = useState('')

    const clickTitle = () => {
        return setTitleStatus(!titleStatus)
    }

    const SubmitTitle = (id) => {
        console.log("new Title=", newTitle)
        UpdateComment({variables : {
        comment : newTitle,
        id : id
         }
        })
            }
      
      const onEditTitle = (e) => {
        setNewTitle(e.target.value)
        console.log("newTitle =", newTitle)
      }

      const initialData = {    
        fullname: "",
        comment: ""  
    }

    const { data: dataComment, loading: loadingComment, error: errorComment } = useQuery(GetComment);

    const [user, setUser] = useState(initialData);

    const [updateComment, { loading: loadingUpdate}] = useMutation(UpdateComment, {
        refetchQueries: [GetComment]
      });
    const [deleteComment, {loading : loadingDelete}] = useMutation(DeleteComment,{
    refetchQueries: [GetComment]
    });
    const [insertComment, {loading:loadingInsert}] = useMutation(InsertComment, {
        refetchQueries: [GetComment]
      })

    if (loadingDelete || loadingUpdate || loadingInsert ){
        return <LoadingSvg/>
       }
       const onSubmitList = (e) => {
        console.log("masuk submit")
            e.preventDefault();
            insertComment({variables : {
            object : {
            fullname: user.fullname,
            comment: user.comment
                }
        }});
        
        setUser(initialData)
            };
            const handleInput = (e) => {
                console.log("masuk handle input")
              const name = e.target.name
                console.log("ini nama=", name)
              const value = e.target.value;
                console.log("ini value=", value)
                setUser({
                ...user,
                [name]: value
                  });
              };
        const onDeleteItem =  (idx) => {
                console.log("idx= detele item", idx.target.value )
                  deleteComment({variables: {
                    id: idx.target.value
                  }})
                };
        return(
            <>
            <div className="review">
                <form className="formmessage" onSubmit={onSubmitList}>
                <div class="mb-3" className="form-group">
                <label 
                for="fullname" 
                className="form-label">Full name</label>
                <input 
                type="text" 
                className="form-control" 
                onChange={handleInput} 
                id="nama" 
                name="fullname" 
                value={user.fullname}
                placeholder="Your name.."
                ></input>   
                </div>
                <div className="mb-3">
                <div className="form-group">
                <label 
                for="floatingTextarea2"
                className="form-label">Comment</label>
                <textarea 
                className="form-control" 
                onChange={handleInput} 
                name="comment" 
                value={user.comment} 
                rows="12"
                id="floatingTextarea2" 
                placeholder="Your Comment.."
                style={{height: "100px"}}></textarea>
                </div>
                </div>
                <button type="submit" style={{background: "#DCAB92"}} className="btn btn-primary">Submit</button>
                </form>
                </div>
                {dataComment?.comments.map((v) => (
                    <li className='komen-list card-kontent mb-4'>
                    <div className="">
                    <h5 style={{paddingLeft: "20px"}} className="card-titles ml-4 mt-3">{v.fullname}</h5>
                    <p 
                    style={{paddingRight: "100px", paddingLeft: "55px"}}
                    className="card-text ml-4 mt-3">
                    {v.comment}
                    </p>
                    <button 
                    type="submit" style={{background: "#FFDAC1"}} className="btn"
                    onClick={onDeleteItem} 
                    value={v.id} className="del">Delete
                    </button>
                    <button 
                    type="submit" 
                    style={{background: "#FFDAC1"}} 
                    className="btn"
                    onClick={clickTitle}
                    value={v.id} 
                    className="edit">Edit</button>
                    {titleStatus ? <form
                    onSubmit={SubmitTitle}>
                    <input onChange={onEditTitle}
                    placeholder={newTitle}
                    /> 
                    </form> : ""}
                        </div>
                    </li>
                    ))}
            </>
        )
}
