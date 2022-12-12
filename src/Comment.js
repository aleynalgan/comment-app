import React, { useState } from 'react'
import User from './user.png'
import './comment.css';
import { AiFillLike } from 'react-icons/ai';
import { FaCommentAlt } from 'react-icons/fa';

function Comment() {
    const[screenBoolean, setScreenBoolean] = useState(false)
    const[comments, setComments]=useState({
        user: "",
        comment: "",
    });
    const[commentsArray, setCommentsArray]=useState([]);
    const[likeCount, setLikeCount] = useState(0);
    const[commentCount, setCommentCount] = useState(0);

    const handleCommentScreen = e =>{
        setScreenBoolean(!screenBoolean);
    }
    const commentFunct = (e) =>{
        setComments({...comments,  comment : e.target.value})

    }
    const userFunct = (e) =>{
        setComments({...comments,  user : e.target.value})

    }
    const pushComment = () => {
        var date = new Date()
        commentsArray.push({
            comment: comments.comment,
            user: comments.user,
            date: date,
            subComment : [],
        })
        var count = commentCount;
        count++;
        setCommentCount(count)
        setComments({...comments, comment:"" , user: "" })
    }

    const handleLike = e =>{
        var count = likeCount;
        count++;
        setLikeCount(count)
    }

  return (
    <div className='commentScreen'>
            <div className='commentUser'>
                <img src={User} />
                <p>Aleyna Algan</p>
            </div>
        <div className='commentContent'>
            <p> Web 3.0 refers to a new web technology where content production is handled by artificial intelligence (AI). In other words, thanks to software working with artificial intelligence technology, data is collected and reproduced by making it compatible with the user. It is also expected that this will enable us to reach more objective conclusions. </p>
        </div>
        <div className='commentTools'>
            <AiFillLike onClick={handleLike} className='icon' />
            <p>{likeCount}</p>
            <FaCommentAlt onClick={handleCommentScreen} id='commentIcon' className='icon' />
            <p>{commentCount}</p>
        </div>

        <div className='comments' style={ screenBoolean ? {display:"flex"}: {display:"none"}}>
            <input onChange={userFunct} placeholder='Name' type="text" />
            <textarea onChange={commentFunct}  placeholder='Comment' type="text" />
            <button onClick={pushComment}>Send</button>

            <div className='commentmap'>
            {
                commentsArray.map((val)=>{
                    return(
                        <div className='commentAdded'>
                            <a href='#'>{val.user}</a>
                            <p>{val.comment}</p>
                            <h4>{val.date[0]}</h4>
                            <FaCommentAlt id='subCommentIcon' className='icon' />
                        </div>
                    )
                })
            }

        </div>
        </div>


    </div>
  )
}

export default Comment