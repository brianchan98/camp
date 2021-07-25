import { police_station } from "../../assets"
import { useHistory } from "react-router-dom";

export default function PoliceStation() {
    const history = useHistory();

    return (
        <div style={{
            width: "100%",
            display: "flex"
        }}>
            <img
                src={police_station}
                alt="weapon_list"
            />
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

