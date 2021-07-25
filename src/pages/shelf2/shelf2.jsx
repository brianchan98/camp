import React, { useState } from 'react';
import { shelf_2, green_cal_detail, egg_ko_detail, thai_lay_detail } from "../../assets";
import Modal from 'react-modal';
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

export default function Shelf2() {
    const [imageToBeShown, setImageToBeShown] = useState();
    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className="home" style={{
            backgroundImage: `url(${shelf_2})`,
            height: "100vh",
            backgroundSize: "cover"
        }}>
            <Link to="/PoliceStation">Police Station</Link>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Food Detail"
            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Nutrition Label</h2>
                <button onClick={closeModal}>close</button>
                <img
                    src={imageToBeShown}
                    style={{
                        height: "70vh",
                        display: "block",
                    }}
                    alt="food_detail"
                />
            </Modal>
            <button
                style={{
                    position: "absolute",
                    right: "15vw",
                    top: "22vh",
                    height: "15vh",
                    width: "15vw",
                    background: "transparent",
                    borderColor: "transparent",
                }}
                onClick={() => {
                    setImageToBeShown(green_cal_detail)
                    openModal()
                }}
            ></button>
            <button
                style={{
                    position: "absolute",
                    left: "40vw",
                    bottom: "13vh",
                    height: "15vh",
                    width: "7vw",
                    background: "transparent",
                    borderColor: "transparent",
                }}
                onClick={() => {
                    setImageToBeShown(egg_ko_detail)
                    openModal()
                }}
            ></button>
            <button
                style={{
                    position: "absolute",
                    left: "2vw",
                    top: "18vh",
                    height: "18vh",
                    width: "7vw",
                    background: "transparent",
                    borderColor: "transparent",
                }}
                onClick={() => {
                    setImageToBeShown(thai_lay_detail)
                    openModal()
                }}
            ></button>
        </div>
    )
}