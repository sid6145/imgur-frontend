import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './style.css'

function ShowImage(){
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('https://sidd-imgur.herokuapp.com/posts')
        .then(res => {
            console.log(res)
            setPosts(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[])
    return (
    <div className="image-component">
    {
        posts.map(post => <img src={post.imageurl}/>)
    }
        
    </div>
    )
}

export default ShowImage