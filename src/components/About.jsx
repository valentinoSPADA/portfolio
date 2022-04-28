import React from 'react'
import {
    Stack,
    Button,
    Text,
    Image
} from '@chakra-ui/react'
import image from './Images/curriculum img.jpg'




function About() {
    return (
        <Stack bg='#222639' color='#F2F2F2' id='about' minHeight={{ base: '1600px', sm: '1500px', md: '1300px', lg: '100vh' }} fontFamily='"Red Hat Display", sans-serif' direction={{ base: 'column', sm: 'column', md: 'column', lg: 'row' }} alignItems={'center'} justifyContent={'space-evenly'}>
            <Stack pl={{ base: '0', sm: '0', md: '0', lg: '123px' }} alignItems={'center'} justifyContent={'center'}>
                <Stack mt={{ base: '40px', sm: '40px', md: '40px', lg: '0' }}>
                    <Text fontSize='6xl' pr={{ base: '0', sm: '0', md: '0', lg: '55px' }}>Sobre mi</Text>
                </Stack>
                <Stack spacing={10}>
                    <Stack pl={14}>
                        <Stack h='350px' position={'absolute'} display={{ base: 'none', sm: 'none', md: 'none', lg: 'flex' }} w='355px' border={'solid 5px'} borderColor='#5F527A' borderTopRightRadius={'5px'} borderLeft={'none'} borderBottom={'none'}>
                        </Stack>
                    </Stack>
                    <Stack alignItems={'center'} justifyContent={'center'}>
                        <Image src={image} h={{ base: '200px', sm: '270px', md: '300px', lg: '400px' }} borderRadius={5} border='solid 5px' borderColor={'#5F527A'}></Image>
                    </Stack>
                </Stack>
            </Stack>
            <Stack initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }} direction={'column'} w={{ base: '90%', sm: '85%', md: '70%', lg: '40%' }} bg='#5F527A' alignItems={'center'} borderRadius={'20px'} minHeight='540px' pt={'70px'} paddingLeft='70px' mb={'200px'} paddingRight={'70px'}>

                <Text fontSize='xl'>
                    Soy un desarrollador Full Stack con orientacion al Front-end
                    con la capacidad de desarrollar proyectos web teniendo siempre en
                    cuenta que sean escalables y modularizables para asi poder construir
                    en equipo.
                </Text>
                <Text fontSize='xl'>
                    Me forme en "Soy Henry", un bootcamp intensivo de 5 meses donde aprendi
                    casi todo lo que se de programacion, pero sobretodo aprendi a aprender.
                </Text>
                <Text fontSize='xl'>
                    Cuento con habilidades de trabajo en equipo y liderazgo.
                    Me concidero una persona creativa, productiva, adaptable y sociable.
                </Text>
                <Stack pt={'90px'} w='200px'>
                    <a href='https://drive.google.com/file/d/1QmJxa6gGmfuXGcbNPyi81irC1lkqAGej/view' target={'_blank'}><Button variant='outline' marginBottom={'30px'} _hover={{ color: '#262626', bg: 'white' }} fontSize='xl' size='md'>Descargar CV</Button></a>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default About