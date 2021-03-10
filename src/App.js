import React, {useState , useEffect} from 'react'
import {db , auth} from './firebase'
import {Modal, Button , Input , Box} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import './App.css';
import Posts from './Post'
import './Post.css'
import ImageUpload from './ImageUpload'

function getModalStyle() {
  const top = 50 
  const left = 50 

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function App() {
  const classes = useStyles()
  const [modalStyle] = useState(getModalStyle)

  const [posts, setPosts] = useState([])
  const [open, setOpen] = useState(false)
  const [username, setUsername] = useState('')
  const [email , setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [openSignIn, setOpenSignIn] = useState(false)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if(authUser){
              setUser(authUser)
            }else{
              setUser(null)
            }
          })

          return () => {
            unsubscribe()
          }

  }, [user, username])

  useEffect(() => {
    db.collection('posts').orderBy('timestamp' , 'desc').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => ({
      id: doc.id,  
      post:doc.data()
      })))
    })
  }, [])

  function handleSignUp(event){
    event.preventDefault()
    auth.createUserWithEmailAndPassword(email , password)
    .then((authUser) => {
      return authUser.user.updateProfile({
        displayName: username
      })
    })
    .catch((error) => alert(error.message))
    
    setUsername('')
    setEmail('')
    setPassword('')
    setOpen(false)
  }

  function handleSignIn(event){
    event.preventDefault()
    auth.signInWithEmailAndPassword(email , password)
    .catch((error) => alert(error.message))
    setUsername('')
    setEmail('')
    setPassword('')
    setOpenSignIn(false)
  }
  

  return (
    <div className='app'>
      
      <Modal
        open={open}
        onClose={() => setOpen(false)}
      >
        <div style={modalStyle} className={classes.paper}>
        <form className='app_modal'>
        <center>
            <img
              className='app_headerImage'
              src='http://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png'
              alt="finstagram"
            />

            <Input
              placeholder='username'
              type='text'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <Input
              placeholder='email'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              placeholder='password'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type='submit'
              className='app_modal_button'
              variant='contained'
              color='secondary' 
              onClick={handleSignUp}
            >
              Sign Up
            </Button>
          </center>
        </form>
        </div>
      </Modal>

      <Modal
        open={openSignIn}
        onClose={() => setOpenSignIn(false)}
      >
        <div style={modalStyle} className={classes.paper}>
        <form className='app_modal'>
        <center>
            <img
              className='app_headerImage'
              src='http://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png'
              alt="finstagram"
            />

            <Input
              placeholder='email'
              type='text'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              placeholder='password'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type='submit'
              className='app_modal_button'
              variant='contained'
              color='secondary' 
              onClick={handleSignIn}
            >
              Sign Up
            </Button>
          </center>
        </form>
        </div>
      </Modal>

      <div className='app_header'>
        <img
         className='app_headerImage'
         src='http://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png'
         alt="finstagram"
        />
        {user ? (
          <div className='app_header_buttonContainer' >
          <Button
            variant='contained'
            color='secondary' 
            onClick={() => auth.signOut()}
          > 
            Logout 
         </Button>
         </div>
        ) : (
          <div className='app_header_buttonContainer' >
            <Button
              variant='contained'
              color='secondary' 
              onClick={() => setOpen(true)}
            > 
              Register 
            </Button>
            <Box m={1} />

            <Button
              
              variant='contained'
              color='secondary' 
              onClick={() => setOpenSignIn(true)}
            > 
              Sign In 
            </Button>
          </div>
        )}
        
      </div>

      

      {posts.map((post) =>{
        return <center>
                <Posts
                 key={post.id}
                 postId={post.id}
                 user={user}
                 username={post.post.username}
                 imageUrl={post.post.imageUrl}
                 caption={post.post.captions} 
                />
              </center>
      })}
      <center>
        {user?.displayName ? (
          <ImageUpload username={user.displayName}/>
        ) : (
          <h3 className='footer'> Please Login to Upload Posts..</h3>
        )}
        
      </center>
      
    </div>
    
  );
}

export default App;
