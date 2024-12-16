import Feed1 from "./assets/Feed1.png"
import Feed2 from "./assets/Feed2.png"
import Feed3 from "./assets/Feed3.png"
import Feed4 from "./assets/Feed4.png"
import Feed5 from "./assets/Feed5.png"
import Feed6 from "./assets/Feed6.png"
import Feed7 from "./assets/Feed7.png"
import Feed8 from "./assets/Feed8.png"
import Feed9 from "./assets/Feed9.png"

export const Feed = () => {
    return (
        <>
            <h1 id="title">Instagram</h1>
            <div id="image">
                <img src={Feed1} width="450" height="450"/>
                <img src={Feed2} width="450" height="450"/>
                <img src={Feed3} width="450" height="450"/>
                <img src={Feed4} width="450" height="450"/>
                <img src={Feed5} width="450" height="450"/>
                <img src={Feed6} width="450" height="450"/>
                <img src={Feed7} width="450" height="450"/>
                <img src={Feed8} width="450" height="450"/>
                <img src={Feed9} width="450" height="450"/>
            </div>
        </>
    )
}