import React, { useEffect } from 'react'
import {
    Stack,
    Button,
    Text,
    Image,
    Box
} from '@chakra-ui/react'
import img from './Images/emojii.png'
import { motion, useAnimation } from 'framer-motion'
import { SiLinkedin, SiGithub } from 'react-icons/si'
import { Link } from 'react-scroll'
import { useInView } from 'react-intersection-observer'



const MoImage = motion(Image)
const MoText = motion(Text)
const MoBox = motion(Box)
const MoStack = motion(Stack)




function Intro() {


    const { ref, inView } = useInView({
        threshold: 0.2
    })
    const animation = useAnimation()

    useEffect(() => {
        if (inView) {
            animation.start({
                x: 0,
                opacity: 1,
                transition: {
                    type: 'tween', duration: 1
                }
            })
        }
    }, [inView])


    return (
        <Stack ref={ref} bg='#1B1E2E' h='100vh' id='/' direction='row' justifyContent={'space-evenly'} alignItems='center' fontFamily='"Red Hat Display", sans-serif'>
            <Stack justifyContent={'center'} marginLeft={'30px'} color='#F2F2F2' spacing={-2}>
                <MoStack initial={{ x: -500, opacity: -1 }} animate={animation}>
                    <Text fontSize='2xl'>Hello! 👋🏻 My name is</Text>
                    <MoText fontSize='6xl' whileHover={{ scale: 1.1 }} >Valentino Spada</MoText>
                    <Text fontSize='2xl'>I am Front End Developer</Text>
                    <Stack direction='row' spacing={'5'}>
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}><a href='https://www.linkedin.com/in/valentinospada/' target={'_blank'}><SiLinkedin size={'30px'} /></a></motion.div>
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}><a href='https://github.com/valentinoSPADA' target={'_blank'}><SiGithub size={'30px'} /></a></motion.div>
                    </Stack>
                </MoStack>
                <MoStack initial={{ x: -500, opacity: -1 }} animate={animation} pt={7} w='50%' >
                    <Link to='contact' spy={true} smooth={true} offset={0} duration={700}><Button _hover={{ color: '#262626', bg: 'white' }} variant='outline' fontSize='xl' display={'flex'} size='md' >Contact me</Button></Link>
                </MoStack>
            </Stack>
            <MoStack initial={{ x: 500, opacity: -1 }} animate={animation} justifyContent={'center'} borderRadius='20px' h='50%' display={{ base: 'none', sm: 'none', md: 'none', lg: 'flex' }}>

                <MoBox position={'absolute'} mb={'350px'} whileHover={{ scale: 1.1 }} ml={'45px'} bg={'#5F527A'} paddingInline={'6px'} borderRadius={'5px'}>
                    <Text fontSize='2xl' color='#F2F2F2' >You can move me with the mouse!</Text>
                </MoBox>
                <MoImage src={img} h='433px' drag
                    dragConstraints={{
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                    }}></MoImage>
            </MoStack>
        </Stack>
    )
}

export default Intro
