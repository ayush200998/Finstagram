import React, {useState} from 'react'
import {Button} from '@material-ui/core'
import './App.css'
import {storage, db} from './firebase'
import firebase from 'firebase'


function ImageUpload({ username }) {
    const [image, setImage] = useState(null)
    const [progress, setProgress] = useState(0)
    const [caption, setCaption] = useState('')

    function handleChange(e){
        if(e.target.files[0]){
            setImage(e.target.files[0])
        }
    }

    function handleUpload(){
        const uploadTask = storage.ref(`images/${image.name}`).put(image)

        uploadTask.on(
        // 1st Part only for the visuals.
            'state_changed',
            (snapshot) => {
                // Progress function
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                )
                setProgress(progress)
            },
        // 2nd When there is some error
            (error) => {
                console.log(error)
                alert(error.message)
            },
        // 3rd When uploads completes.
            () => {
                storage
                    .ref('images')
                    .child(image.name)
                    .getDownloadURL()
                    .then((url) =>{
                        db.collection('posts').add({
                            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                            captions: caption,
                            imageUrl: url,
                            username: username 
                        });
                        setProgress(0)
                        console.log('progress is changed')
                        setImage(null)
                        console.log('image is changed')
                        setCaption('')
                        console.log('caption is changed')
                    })
            }
        )
    }    

    return (
        <div className='imageUpload'>
            <progress value={progress} max='100' />
            <input value={caption} onChange={(e) => setCaption(e.target.value)} className='caption' type='text' placeholder='Enter a caption....'/>
            <input className='uploader' type='file' onChange={handleChange} />
            <Button variant='contained' color='secondary' onClick={handleUpload}>
                Upload
            </Button>
        </div>
    )
}

export default ImageUpload
