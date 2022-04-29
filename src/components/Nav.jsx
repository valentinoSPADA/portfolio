import React, { useEffect, useState } from 'react'
import {
    Stack,
    Image,
    Button,
    Text,
    useDisclosure,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    DrawerCloseButton
} from '@chakra-ui/react'
import logo from './Images/Sin titulo.png'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import { CgMenu, CgClose } from 'react-icons/cg'



function Nav() {


    const MoImage = motion(Stack)
    const [show, handleShow] = useState(false)

    const { isOpen, onOpen, onClose } = useDisclosure()

    const [open, setOpen] = useState(false)


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
            <Stack direction='row' justifyContent='space-between' w={{ base: '95%', sm: '95%', md: '90%', lg: '80%' }} alignItems={'center'}>
                <MoImage whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Link to="/" spy={true} style={{ cursor: 'pointer' }} smooth={true} offset={0} duration={700}><Image src={logo} h='60px' ml={{ sm: '0', lg: '10' }} pt={3} ></Image></Link>
                </MoImage>
                <Stack direction='row' justifyContent='space-between' alignItems={'center'} w='50%' pt={4} display={{ base: 'none', sm: 'none', md: 'flex', lg: 'flex' }}>
                    <Link to="about" style={{ cursor: 'pointer' }} spy={true} smooth={true} offset={0} duration={700}><Button color='#F2F2F2' variant='link' fontWeight={1} fontSize={'xl'} padding={2}>About me</Button></Link>
                    <Link to="skills" style={{ cursor: 'pointer' }} spy={true} smooth={true} offset={0} duration={700}><Button color='#F2F2F2' variant='link' fontWeight={1} fontSize={'xl'} padding={2}>Skills</Button></Link>
                    <Link to="projects" style={{ cursor: 'pointer' }} spy={true} smooth={true} offset={0} duration={700}><Button color='#F2F2F2' variant='link' fontWeight={1} fontSize={'xl'} padding={2}>Projects</Button></Link>
                    <Link to="contact" style={{ cursor: 'pointer' }} spy={true} smooth={true} offset={0} duration={700}><Button color='#F2F2F2' variant='link' fontWeight={1} fontSize={'xl'} padding={2}>Contact</Button></Link>
                </Stack>
                <Stack display={{ base: 'flex', sm: 'flex', md: 'none', lg: 'none' }}>
                    <Button bg={'none'} _active={{ bg: 'none' }} _hover={{bg: 'none'}} _focus={{ bg: 'none' }} onClick={() => onOpen()}>
                        <CgMenu size={'40px'} />
                    </Button>
                    <Drawer onClose={onClose} isOpen={isOpen} size={'full'}>
                        <DrawerOverlay />
                        <DrawerContent bg={'#262626'}>
                            <Stack direction={'row-reverse'} mt={'10px'}>
                                <Button bg={'none'} _hover={{bg: 'none'}} _active={{ bg: 'none' }} _focus={{ bg: 'none' }} onClick={() => onClose()} width={'70px'}><CgClose size={'40px'} color='#f2f2f2' /></Button>
                            </Stack>
                            <Link to="/" spy={true} style={{ cursor: 'pointer' }} smooth={true} offset={0} onClick={() => onClose()} duration={700}><DrawerHeader color={'#F2F2F2'} fontSize={'6xl'}>Landing</DrawerHeader></Link>
                            <DrawerBody>
                                <Stack direction={'column'} h={'100%'} justifyContent={'space-around'}>
                                    <Link to="about" style={{ cursor: 'pointer' }} spy={true} smooth={true} offset={0} duration={700}><Button color='#F2F2F2' bg={'none'} _hover={{ bg: 'none' }} _active={{ bg: 'none' }} _focus={{ bg: 'none' }} onClick={() => onClose()} fontWeight={1} fontSize={'6xl'} padding={2}>About me</Button></Link>
                                    <Link to="skills" style={{ cursor: 'pointer' }} spy={true} smooth={true} offset={0} duration={700}><Button color='#F2F2F2' bg={'none'} _hover={{ bg: 'none' }} _active={{ bg: 'none' }} _focus={{ bg: 'none' }} onClick={() => onClose()} fontWeight={1} fontSize={'6xl'} padding={2}>Skills</Button></Link>
                                    <Link to="projects" style={{ cursor: 'pointer' }} spy={true} smooth={true} offset={0} duration={700}><Button color='#F2F2F2' bg={'none'} _hover={{ bg: 'none' }} _active={{ bg: 'none' }} _focus={{ bg: 'none' }} onClick={() => onClose()} fontWeight={1} fontSize={'6xl'} padding={2}>Projects</Button></Link>
                                    <Link to="contact" style={{ cursor: 'pointer' }} spy={true} smooth={true} offset={0} duration={700}><Button color='#F2F2F2' bg={'none'} _hover={{ bg: 'none' }} _active={{ bg: 'none' }} _focus={{ bg: 'none' }} onClick={() => onClose()} fontWeight={1} fontSize={'6xl'} padding={2}>Contact</Button></Link>
                                </Stack>
                            </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Nav
