import React, { useEffect, useState } from 'react'
import {
    Stack,
    Image,
    Button
} from '@chakra-ui/react'
import logo from './Images/Sin titulo.png'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'



function Nav() {


    const MoImage = motion(Stack)
    const [show, handleShow] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true)
            } else {
                handleShow(false)
            }
        })
        return () => {
            window.removeEventListener("scroll")
        }
    }, [])


    return (
        <Stack w='100%' zIndex={100} as="header" position="fixed" backdropFilter="saturate(180%) blur(5px)" h='70px' bg={!show ? '#1B1E2E' : '#262626'} transition={'0.5s'} color={'#F2F2F2'} fontFamily='"Red Hat Display", sans-serif' alignItems={'center'}>
            <Stack direction='row' justifyContent='space-between' w='80%' alignItems={'center'}>
                <MoImage whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Link to="/" spy={true} style={{ cursor: 'pointer' }} smooth={true} offset={0} duration={700}><Image src={logo} h='60px' pl='10' pt={3} ></Image></Link>
                </MoImage>
                <Stack direction='row' justifyContent='space-between' alignItems={'center'} w='50%' pt={4}>
                    <Link to="about" style={{ cursor: 'pointer' }} spy={true} smooth={true} offset={0} duration={700}><Button color='#F2F2F2' variant='link' fontWeight={1} fontSize={'xl'} padding={2}>Sobre mi</Button></Link>
                    <Link to="skills" style={{ cursor: 'pointer' }} spy={true} smooth={true} offset={0} duration={700}><Button color='#F2F2F2' variant='link' fontWeight={1} fontSize={'xl'} padding={2}>Skills</Button></Link>
                    <Link to="projects" style={{ cursor: 'pointer' }} spy={true} smooth={true} offset={0} duration={700}><Button color='#F2F2F2' variant='link' fontWeight={1} fontSize={'xl'} padding={2}>Proyectos</Button></Link>
                    <Link to="contact" style={{ cursor: 'pointer' }} spy={true} smooth={true} offset={0} duration={700}><Button color='#F2F2F2' variant='link' fontWeight={1} fontSize={'xl'} padding={2}>Contacto</Button></Link>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Nav
