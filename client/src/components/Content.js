import React from 'react'
import '../stylesheet/Content.css'
import Logo from '../assets/images/logo.svg'
import Skills from './Skills'
import About from "./About";
import Project from "./Project";
import Experience from "./Experience";

const Content = ({element}) => {
    return (
        <main>
            <section className='content'>
                <div ref={element}>
                    <img src={Logo} alt='logo' className='content--logo' />
                    <p>Even if you scroll, i will stick with you</p>
                    <button className='content__cta-primary'>
                        Contact us
                    </button>
                </div>
            </section>
            <section id="about"><About /></section>
            <section id="skills"><Skills /></section>
            <section id="project"><Project /></section>
            <section id="experience"><Experience /></section>

        </main>
    )
}

export default Content