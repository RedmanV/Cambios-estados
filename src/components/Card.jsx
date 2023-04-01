import React from 'react'
import '../css/card.css';
import { useState } from "react";

function Card(props) {

    const [title, setTilte] = useState("");
    const [software, setSoft] = useState("");
    const [curso, setCurso] = useState("");

    const newtitle = () => {
        const alterTitle = document.getElementById("text1").value;
        setTilte(alterTitle);
    }
    const newSoft = () => {
        const alterSoft = document.getElementById("text2").value;
        setSoft(alterSoft);
    }
    const newCurso = () => {
        const alterCurso = document.getElementById("text3").value;
        setCurso(alterCurso);
    }
    const newImg = () => {
        const divConFondo = document.querySelector('.imgs');
        divConFondo.style.backgroundImage = "url('src/assets/car.jpg')";
    }
    const newImg2 = () => {
        const divConFondo = document.querySelector('.imgs');
        divConFondo.style.backgroundImage = "url('src/assets/K6Rz.gif')";
    }
    const newImg3 = () => {
        const divConFondo = document.querySelector('.imgs');
        divConFondo.style.backgroundImage = "url('src/assets/film.jpg')";
    }
    const newImg4 = () => {
        const divConFondo = document.querySelector('.imgs');
        divConFondo.style.backgroundImage = "url('src/assets/3d.jpg')";
    }
    return (
        <div className="App">
            <div className="row">
                <div className="col-12 col-lg-7 imgs d-flex flex-column justify-content-center align-items-start ps-5">
                    <h1>{title}</h1>
                    <h3>{software}</h3>
                    <p>{curso}</p>
                    <button type='button' className='mt-1 d-flex justify-content-start go'>¡Inscribete!</button>
                </div>
                <div className="col-12 col-lg-3 d-flex justify-content-center align-items-center right">
                    <div className="d-flex flex-column">
                        <input type="text" className="form" placeholder='Nombre del Curso' id="text1" />
                        <button type='button' className='mt-2 d-flex justify-content-start' onClick={newtitle}>Actualizar</button>
                        <input type="text" className="form" placeholder='Software' id="text2" />
                        <button type='button' className='mt-2  d-flex justify-content-start' onClick={newSoft}>Actualizar</button>
                        <textarea className='form-control' name="descripcion" placeholder='Descripción' id="text3" cols="40" rows="2"></textarea>
                        <button type='button' className='mt-2  d-flex justify-content-start' onClick={newCurso}>Actualizar</button>
                        <br />
                        <div className="">
                            <h6><b>Nueva imagen:</b></h6>
                            <button onClick={newImg} type='button' className='btnimage'>
                                <img className='images' src="src/Imagenes/car.jpg" alt=""/>
                            </button>
                            <button onClick={newImg2} type='button' className='btnimage'>
                                <img className='images' src="src/Imagenes/K6Rz.gif" alt=""/>
                            </button>
                            <button onClick={newImg3} type='button' className='btnimage'>
                                <img className='images' src="src/Imagenes/film.jpg" alt=""/>
                            </button>
                            <button onClick={newImg4} type='button' className='btnimage'>
                                <img className='images' src="src/Imagenes/3d.jpg" alt=""/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card