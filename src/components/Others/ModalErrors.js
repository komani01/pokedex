import { Button, Modal } from 'react-bootstrap';

const ModalError = ({ history, show_modal_error, msg }) => {
	return (
		<div>
			<Modal show={show_modal_error} centered>
				<Modal.Body>{msg}</Modal.Body>
				<Modal.Footer>
					<Button variant='primary' onClick={() => history.push('/')}>
						Okay!!!
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default ModalError;
