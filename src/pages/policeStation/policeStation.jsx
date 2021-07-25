import { police_station } from "../../assets"

export default function PoliceStation() {
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
                    window.location.replace("/weapon");
                }}
            ></button>
        </div>
    );
}

