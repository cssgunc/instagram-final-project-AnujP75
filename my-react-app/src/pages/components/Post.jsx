import "./Post.css";
import Modal from "./Modal.jsx"

function Post(props) {
    return (
    <div className="post" onClick={() => props.setIsModalOpen(!props.isModalOpen)}>
        <img src={props.src} width="300" height="300"></img>
    </div>

    )
}

export default Post