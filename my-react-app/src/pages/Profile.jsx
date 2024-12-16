import Sidebar from "./components/Sidebar";
import Post from "./components/Post";
import Modal from "./components/Modal";
import "./Profile.css";

import { useState } from "react";
import { userHandle, firstName, lastName } from "./Register";

import ProfilePicture from "./assets/profile.jpg"
import Posts from "./assets/posts.jpg"
import Reels from "./assets/reels.png"
import Tagged from "./assets/tagged.png"

export const Profile = () => {

    const [Follow, setFollow] = useState(0)
    const [color, setColor] = useState(false)
    const [Text, setText] = useState('Follow')
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [url, setURL] = useState('')


    const changeFollow = () => {
      if (Follow == 0) {
        setFollow(Follow + 1)
        setText('Unfollow')
      }
      else if (Follow == 1) {
        setFollow(Follow - 1)
        setText('Follow')
      }
    }

    const changeColor = {
      backgroundColor: color ? 'red' : 'blue'
    }

    function renderModal() {
        if (isModalOpen) {
            return (
                <><Modal /></>
            )
        }
    }

    const changeUrl = () => {
        const link = document.getElementById("img")
        setURL(link)
    }

    function renderPosts(img) {
        return <>
        <Post src={img} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}></Post>
        </>
    }

    return(
        <>

        {renderModal()}
        <Sidebar src="https://www.pngkey.com/png/full/1-13459_instagram-font-logo-white-png-instagram-white-text.png" />

        <div id="screen">
          <div id="bio">
          <img src={ProfilePicture} width="200" id="profile" />
              <div>
                  <div id="header">
                      <h3>{userHandle}</h3>
                      <h3 
                        class="box" 
                        style={changeColor}
                        onClick={() => {
                          changeFollow()
                          setColor(!color)
                        }}>
                        {Text}
                      </h3>
                      <h3 class="box">Message</h3>
                  </div>
                  <div class="statistics">
                      <h5>3 posts</h5>
                      <h5> {Follow} followers</h5>
                      <h5>0 following</h5>
                  </div>
                  <h3>{firstName} {lastName}</h3>
                  <p>SIUUUbscribe to my Youtube Channel!</p>
                  <a href="https://www.youtube.com/@cristiano">youtube.com/@cristiano?sub_confirmation=1</a>
              </div>
          </div>
          <div class="media">
            <img src={Posts} width="40" height="40" />
            <img src={Reels} width="40" height="40" />
            <img src={Tagged} width="40" height="40" />
          </div>
          <div id="input">
            Input Post URL:
            <input id="img"></input>
          </div>
          <div id="title">
            <button onClick={() => changeUrl()}>Make Post</button>
            </div>
          <div className="posts">
            {renderPosts({url})}
            <Post isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg"></Post>
            <Post isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQOxnVNyCVhy4JYcTkIvVl_33yDNTIcBUoaQ&s"></Post>
            <Post isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx4yGdWbub5X8rTbQBU_3jFNYtwPnSbgLKPQ&s"></Post>
          </div>
          
        </div>
        </>
    );
}