import React, {useState, useEffect} from 'react'
import './Post.css'
import { Avatar, IconButton } from '@material-ui/core'
import { db } from './firebase'
import SendIcon from '@material-ui/icons/Send';
import firebase from 'firebase'

function Post({ username, avatar, imageUrl, caption, postId, user }) {
    const [comments, setComments] = useState([])
    const [comment, setComment] = useState('')

    useEffect(() => {
        let unsubscribe
        if(postId){
            unsubscribe = db
                        .collection('posts')
                        .doc(postId)
                        .collection('comments')
                        .orderBy('timestamp' , 'desc')
                        .onSnapshot(snapshot => {
                            setComments(snapshot.docs.map(doc => doc.data()))
                        })
        }
       
        return () => {
            unsubscribe()
        }
    }, [postId])

    const postComment = (event) => {
        event.preventDefault()
        console.log(comment)

        db.collection('posts').doc(postId).collection('comments').add({
            text: comment,
            username: user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setComment('')
    }

    return (
        <div className='posts'>
            {/* 
            Post contains 3 things-:
             1. Header(Avatar, username, place).
             2. Body(Image).
             3. Footer(Captions, comments section).
         */}
            <div className='posts_header'>
                <Avatar
                    src={avatar}
                    alt='goku'
                    className='posts_header_avatar'
                />
                <h3 className='posts_header_username'> {username} </h3>
            </div>
            
            <img
                className='posts_image'
                src={imageUrl}
                alt='React logo'
            />
            <h4 className='posts_captions'><strong> {username}: </strong> {caption} </h4>

            <div className='comments_body'>
                {comments.map((comment) => (
                    <p>
                        <strong>{comment.username}</strong> {comment.text}
                    </p>
                ))}
            </div>

            {user ? (
                <form className='post_comment'>
                <input
                 className='post_comment_input'
                 type='text'
                 placeholder='add a comment....'
                 value={comment}
                 onChange={(e) => setComment(e.target.value)}
                />

                <IconButton
                    className='app_iconButton'
                    disabled={!comment}
                    variant="contained"
                    color="secondary"
                    type='submit'
                    onClick={postComment}
                >
                    <SendIcon/>
                </IconButton>
            </form>
            ): (
                <h3> Please Sign in to post a Comment..</h3>
            )}
        </div>
    )
}

export default Post
