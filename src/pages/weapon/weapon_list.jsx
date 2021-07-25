import { weapon_list } from "../../assets"

export default function WeaponList() {
    return (
        <div style={{
            width: "100%",
            display: "flex"
        }}>
            <img
                src={weapon_list}
                alt="weapon_list"
                style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    height: "80vh"
                }}
            />
        </div>
    );
}

