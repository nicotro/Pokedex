import { Modal, Button, Alert, Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import "./../style/DeckListModal.css"
import { PokeRemoveButton } from './poke-remove-button';

export function DeckList(props) {

    const { pokedeck } = useSelector((state) => ({ ...state.pokeReducer }));

    return (
        <Modal show={props.show} onHide={props.handleClose} backdrop="static" centered keyboard={false} >
            <Modal.Header closeButton className='border-0 pb-0 pokelist-modal'>
                <Modal.Title className='ml-2'>My Pokemon selection</Modal.Title>
            </Modal.Header>
            <Modal.Body className='pokelist-modal'>
                {pokedeck.length == 0
                    ?
                    <Alert variant="info" className='border-dark border-opacity-10 shadow'>No Pokemon selected !</Alert>
                    :
                    (<>
                        {pokedeck.map((p, i) =>
                        (
                            <div key={i}>
                                <Alert variant="primary" className='mb-2 p-0 shadow border-dark border-opacity-10'>
                                    <Row className='p-0 m-0'>
                                        <Col className='col-3'>
                                            <img src={p.image} className="deck-img" />
                                        </Col>
                                        <Col className='col-9 pl-4'>
                                            <table className="text-left mt-4 w-100">
                                                <thead>
                                                    <tr className="row">
                                                        <th className='col-5'>name</th>
                                                        <th className='col-4'>height</th>
                                                        <th className='col-3'>weight</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className='row'>
                                                        <td className='col-5'>{p.name}</td>
                                                        <td className='col-4'>{p.height}</td>
                                                        <td className='col-3'>{p.weight}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </Col>
                                        <div className="col-12 decklist-item">
                                            <PokeRemoveButton index={i}/>
                                        </div>
                                    </Row>
                                </Alert>
                            </div>
                        ))}
                    </>)
                }
            </Modal.Body>
            <Modal.Footer className='border-0 pokelist-modal'>
                <Button variant="outline-dark" onClick={props.handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

