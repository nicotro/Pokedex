import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Display } from '../components/display';
import { Moves } from '../components/moves';
import { Specs } from '../components/specs';
import { getDetail } from '../services/PokeService';
import loadingBall from './../assets/icon_pokeball_loading.svg'
import './../style/detail.css'

export function Detail() {
    const [loaded, setLoaded] = useState(false);

    const id = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
            getDetail(id.id)
                .then((res) => {
                    setLoaded(true)
                    res.data.image=[
                        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${parseInt(id.id) + 1
                        }.png`,
                        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${parseInt(id.id) + 1
                        }.png`,
                        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${parseInt(id.id) + 1
                        }.png`,
                        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/${parseInt(id.id) + 1
                        }.png`,
                      ];
                    dispatch({
                        type: "DETAILS",
                        payload: res.data,
                    });
                })
                .catch((err) => {
                    dispatch({
                        type: "DETAILS",
                        payload: {},
                    });
                });
    }, [loaded])


    return (
        <div className="container detail-bg">
            {!loaded
                ?
                (
                    <div className="loading-ball">
                        <img src={loadingBall} alt="loading..." className="loading-anim" />
                    </div>
                )
                :
                (
                    <>
                        <div className='row card-deck'>
                            <div className='col-6 card'>
                                <Display/>
                            </div>
                            <div className='col-6 card'>
                                <Specs/>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12'>
                                <Moves/>
                            </div>
                        </div>
                    </>
                )}
        </div>
    );
}

