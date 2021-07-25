import { police_station } from "../../assets"
import { useHistory } from "react-router-dom";

export default function PoliceStation() {
    const history = useHistory();

    return (
        <div className="home" style={{
            backgroundImage: `url(${police_station})`,
            height: "100vh",
            backgroundSize: "cover"
        }}>
            <button
                style={{
                    position: "absolute",
                    left: "0vw",
                    top: "0vh",
                    height: "70vh",
                    width: "60vw",
                    background: "transparent",
                    borderColor: "transparent",
                }}
                onClick={() => {
                    history.push("/weapon");
                }}
            ></button>
        </div>
    );
}

