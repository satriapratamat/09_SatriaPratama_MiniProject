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
        updateComment({variables : {
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
                    <div class="mb-3" className="form-group form-fullname">
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
                    <div className="form-group form-comment">
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
                <button type="submit" className="btn btn-comment">Submit</button>
                        </form>
                        </div>
                        {dataComment?.comments.map((v) => (
                            <div className="row comment-card">
                                <div className="col-9">
                                    <h5 className="card-titles">{v.fullname}</h5>
                                    <p className="card-text">
                                    {v.comment}
                                    </p>
                                </div>
                                <div className="col-3">
                                    <button 
                                    type="submit" className="btn-del"
                                    onClick={onDeleteItem} 
                                    value={v.id}>Delete
                                    </button>
                                    <button 
                                    type="submit"  
                                    className="btn-edit"
                                    onClick={clickTitle}
                                    value={v.id}>Edit</button>
                                    {titleStatus ? <form
                                    onSubmit={SubmitTitle}>
                                    <input className="form-edit-input" onChange={onEditTitle}
                                    placeholder={newTitle}
                                    /> 
                                    </form> : ""}
                                </div>
                        </div>
                    ))}
            </>
        )
}
