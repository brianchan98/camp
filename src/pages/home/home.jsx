import React, { useState } from 'react';
import { school } from "../../assets";
import Modal from 'react-modal';
import { useHistory } from "react-router-dom";
import {
    Link
} from "react-router-dom";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
Modal.setAppElement('#root');

export default function Home() {
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [pw, setPw] = useState('');

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    const history = useHistory();
    function handlePW(event) {
        setPw(event.target.value);
        if (event.target.value === "5423") {
            console.log("Hihi")
            history.push("/camp/safe");
        }
    }

    return (
        <div className="home" style={{
            backgroundImage: `url(${school})`,
            height: "100vh",
            backgroundSize: "cover"
        }}>
            <Link to="/shelf">Next Shelf</Link>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Food Detail"
            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>夾萬</h2>
                <label>請輸入密碼: </label>
                <input value={pw} onChange={handlePW} />
                <button style={{display: 'block', marginTop: '10px'}} onClick={closeModal}>close</button>
            </Modal>
            <button
                style={{
                    position: "absolute",
                    left: "5vw",
                    top: "35vh",
                    height: "40vh",
                    width: "30vw",
                    background: "transparent",
                    borderColor: "transparent",
                }}
                onClick={() => {
                    openModal()
                }}
            ></button>
        </div >
    );
}