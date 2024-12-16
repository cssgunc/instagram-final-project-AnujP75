import "./Sidebar.css";

function Sidebar(props) {
    return(
        <>
            <img src={props.src} width="175" height="60" margin-left="2%" margin-top="2%"></img>
            <div className="sidebar">
                <h2>Home</h2>
                <h2>Search</h2>
                <h2>Explore</h2>
                <h2>Reels</h2>
                <h2>Messages</h2>
                <h2>Notifications</h2>
                <h2>Create</h2>
                <h2>Profile</h2>
            </div>
            <div className="footer">
                <h2> AI Studio </h2>
                <h2> Threads</h2>
                <h2>More</h2>
            </div>
        </>
    );
}

export default Sidebar;