import React from "react";
import { useCroct, Slot } from '@croct/plug-react';
import { Suspense } from "react"
import Logo from './logo_image.jpg'
function Inicio() {

    type Home = {
        title: string,
        subtitle: string,
        link_croct: {
            label: string,
            link: string,
        },
    };

    const croct = useCroct();
    //seta inicialmente como um usuario anonimo.
    croct.user.edit().clear('custom.persona').save();

    //foi necessário o "window.location.reload", pois a página não atualizava após setar a persona.

    //button marketing
    function marketing() {
        croct.user.edit().set('custom.persona', 'marketer').save();
        window.alert('Seja bem-vindo(a) marketer!');
        window.location.reload();
        
    }

    //button developer
    function developer() {
        croct.user.edit().set('custom.persona', 'developer').save();
        window.alert('Seja bem-vindo(a) desenvolvedor(a)!');
        window.location.reload();
        
    }

    //button growth-hacker
    function hacker() {
        croct.user.edit().set('custom.persona', 'growth-hacker').save();
       window.alert('Seja bem-vindo(a) growth-marketer!'); window.location.reload(); 
    }
    return (
        <div id="page">
            <header>
                <div id="logo">
                  <a href="https://croct.com" target="_blank">
                    <img src={Logo} className="logo" />
                  </a>
                  <a href="https://github.com/croct-tech/challenges/tree/main/customer-success-engineer" target="_blank">
                  <h1 id="logo">Croct
                  Challenge-CSE</h1></a>
            </div>
                <h1 id='question'> Dentre as personas abaixo, qual voce mais se identifica?</h1>
                <nav>
                   <button onClick={marketing}>Marketing</button>
                   <button onClick={developer}>Developer</button>
                   <button onClick={hacker}>Growth-Hacker</button>
                </nav>
            </header>
            <main>
                <Suspense fallback="Personalizando o conteúdo..."> 
                    <Slot id="home-banner">
                        {({ title, subtitle, link_croct }: Home) => (
                            <div>
                                <h1 id="title">{title}</h1>
                                <p>{subtitle}</p>
                                <a href={link_croct.link}>{link_croct.label}</a>
                            </div>
                        )}
                    </Slot>
                </Suspense>
            </main> 
        </div>
    )
}
export default Inicio;