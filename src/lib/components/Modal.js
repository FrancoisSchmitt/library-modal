import './index.css'
import 'font-awesome/css/font-awesome.min.css';
export default function Modal({ openModal, closeModal, message, title, btnMessage }) {
    // Template
openModal = true
    return (
        <>
            {
    openModal === true &&
        <div className='Modal'>
            <div className="modal-section"></div>
                <div className="modal-content">
                    <div className='modal-title-content'>
                        <div className='modal-title'>
                            <h3>{title}</h3>
                            <button onClick={closeModal} className="btn-close-icon"><i className="fa fa-times"></i></button>
                        </div>
                        <p className='modal-paragraphe'>{message}</p>
                                <button onClick={closeModal} className="btn-close">{btnMessage}</button>
                </div>
            </div>
        </div> 
            }
        </>
    );
}

