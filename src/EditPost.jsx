import React from 'react'
import {useEffect} from 'react';
import { useParams,Link, useNavigate} from 'react-router-dom';
const EditPost = ({posts, handleEdit,editBody, setEditBody, editTitle, setEditTitle}) => {
    const navigate= useNavigate();
    const {id} = useParams();
    const post= posts.find( (post)=>(post.id).toString() === id);
    useEffect(()=>{
        if(post){
            setEditBody(post.body);
            setEditTitle(post.title);

        }
        else{
            navigate('/');
        }

    },[post,setEditBody,setEditTitle]);
    
  return (
    <>
    
    { post && (
       
       
       <main className='NewPost'> 
       <h2>Edit post</h2>
       <form className='newPostForm' onSubmit={(e)=>e.preventDefault()}>
       <label htmlFor="editTitle">Title:</label>
       <input type="text" 
       id='postTitle'
       
       value={editTitle}
       onChange={(e)=> setEditTitle(e.target.value)}
       />
       <label htmlFor="editBody">Post:</label>
       <textarea  
       id="postBody"
       required
       value={editBody}
       onChange={(e)=> setEditBody(e.target.value)}
       />
       <button type='submit' onClick={()=>handleEdit(post.id)}>Submit</button>
       </form>
       </main>
    )
} 
{
    !post && (
        <>
        <p>Not accessible</p>
        <Link to='/'> </Link>
        </>
    )
}
</>
  )
}

export default EditPost