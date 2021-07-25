import React, { useState } from 'react';
import { supermarket_bg, smarties_detail, triangle_choco_detail, her_choco_detail } from "../../assets";
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

export default function Shelf() {
    const [imageToBeShown, setImageToBeShown] = useState();
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

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
            backgroundImage: `url(${supermarket_bg})`,
            height: "100vh",
            backgroundSize: "cover"
        }}>
            <Link to="/shelf2">Next Shelf</Link>
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
                    right: "11vw",
                    top: "45vh",
                    height: "25vh",
                    width: "15vw",
                    background: "transparent",
                    borderColor: "transparent",
                }}
                onClick={() => {
                    setImageToBeShown(smarties_detail)
                    openModal()
                }}
            ></button>
            <button
                style={{
                    position: "absolute",
                    left: "18vw",
                    top: "65vh",
                    height: "18vh",
                    width: "60vw",
                    background: "transparent",
                    borderColor: "transparent",
                }}
                onClick={() => {
                    setImageToBeShown(triangle_choco_detail)
                    openModal()
                }}
            ></button>
            <button
                style={{
                    position: "absolute",
                    right: "11vw",
                    top: "10vh",
                    height: "15vh",
                    width: "8vw",
                    background: "transparent",
                    borderColor: "transparent",
                }}
                onClick={() => {
                    setImageToBeShown(her_choco_detail)
                    openModal()
                }}
            ></button>
        </div >
    );
}