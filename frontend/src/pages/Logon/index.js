import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import './styles.css';

import heroesImg from '../../assests/heroes.png';
import logoImg from '../../assests/logo.svg';

export default function Logon() {
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt= "Be the hero"/>

                <form>
                    <h1>
                        Faça seu Logon
                    </h1>

                    <input placeholder= "Sua Id"/>
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#e02041"/>
                        Não tenho cadastro
                    </Link>
                </form>


            </section>
            <img src={heroesImg} alt= "Heroes"/>
            
        </div>
    );
}