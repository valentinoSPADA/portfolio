import React from 'react'
import {
    Stack,
    Button,
    Text,
    Image,
    Box
} from '@chakra-ui/react'
import img from './Images/emojii.png'
import { motion } from 'framer-motion'
import { SiLinkedin, SiGithub } from 'react-icons/si'
import { Link } from 'react-scroll'



const MoImage = motion(Image)
const MoText = motion(Text)
const MoBox = motion(Box)



function Intro() {
    return (
        <Stack bg='#1B1E2E' h='100vh' id='/' direction='row' justifyContent={'space-evenly'} alignItems='center' fontFamily='"Red Hat Display", sans-serif'>
            <Stack justifyContent={'center'} marginLeft={'30px'} color='#F2F2F2' spacing={-2}>
                <Stack >
                    <Text fontSize='2xl'>Hola! 👋🏻 Mi nombre es</Text>
                    <MoText fontSize='6xl' whileHover={{ scale: 1.1 }}>Valentino Spada</MoText>
                    <Text fontSize='2xl'>Soy Front End Developer</Text>
                    <Stack direction='row' spacing={'5'}>
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}><a  href='https://www.linkedin.com/in/valentinospada/' target={'_blank'}><SiLinkedin size={'30px'} /></a></motion.div>
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}><a  href='https://github.com/valentinoSPADA' target={'_blank'}><SiGithub size={'30px'} /></a></motion.div>
                    </Stack>
                </Stack>
                <Stack pt={7} w='50%' >
                <Link to='contact' spy={true} smooth={true} offset={0} duration={700}><Button _hover={{ color: '#262626', bg: 'white' }} variant='outline' fontSize='xl' display={'flex'} size='md' >Contactame</Button></Link>
                </Stack>
            </Stack>
            <Stack justifyContent={'center'} borderRadius='20px' h='50%' display={{base:'none' ,sm:'none' , md:'none' , lg:'flex'}}>

                <MoBox position={'absolute'} mb={'350px'} whileHover={{ scale: 1.1 }} ml={'45px'} bg={'#5F527A'} paddingInline={'6px'} borderRadius={'5px'}>
                    <Text fontSize='2xl' color='#F2F2F2' >Podes moverme con el mouse!</Text>
                </MoBox>
                <MoImage src={img} h='433px' drag
                    dragConstraints={{
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                    }}></MoImage>
            </Stack>
        </Stack>
    )
}

export default Intro
