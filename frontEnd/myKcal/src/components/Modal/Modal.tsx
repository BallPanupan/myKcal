import React, { FC } from 'react';
import styles from './styles.module.css';

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode;
	specificClose: boolean;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, specificClose = true, children }) => {

	const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		if ((event.target === event.currentTarget) && !specificClose) {
			onClose();
			console.log("modalOverlay is clicked");
		}
	};

	if (!isOpen) return null;
	return (
		<div className={styles.modalOverlay} onClick={handleOverlayClick}>
			<div className={styles.modal}>
				<button className={styles.closeButton} onClick={onClose}>
					&times;
				</button>
				{children}
			</div>
		</div>
	);
};

export default Modal;
