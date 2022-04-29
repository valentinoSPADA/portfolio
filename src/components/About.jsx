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
        <Stack bg='#222639' color='#F2F2F2' id='about' minHeight={{ base: '1300px', sm: '1250px', md: '1300px', lg: '100vh' }} fontFamily='"Red Hat Display", sans-serif' direction={{ base: 'column', sm: 'column', md: 'column', lg: 'row' }} alignItems={'center'} justifyContent={{ md: 'space-evenly', lg: 'space-evenly' }}>
            <Stack pl={{ base: '0', sm: '0', md: '0', lg: '123px' }} alignItems={'center'} justifyContent={'center'}>
                <Stack mt={{ base: '110px', sm: '110px', md: '40px', lg: '0' }}>
                    <Text fontSize='6xl' pr={{ base: '0', sm: '0', md: '0', lg: '55px' }}>About me</Text>
                </Stack>
                <Stack spacing={10} >
                    <Stack pl={14} >
                        <Stack h='350px' position={'absolute'} display={{ base: 'none', sm: 'none', md: 'none', lg: 'flex' }} w='355px' border={'solid 5px'} borderColor='#5F527A' borderTopRightRadius={'5px'} borderLeft={'none'} borderBottom={'none'}>
                        </Stack>
                    </Stack>
                    <Stack alignItems={'center'} justifyContent={'center'} >
                        <Image src={image} h={{ base: '200px', sm: '270px', md: '300px', lg: '400px' }} borderRadius={5} border='solid 5px' borderColor={'#5F527A'}></Image>
                    </Stack>
                </Stack>
            </Stack>
            <Stack direction={'column'} textAlign={{ base: 'center', sm: 'center', md: 'center', lg: 'initial' }} w={{ base: '90%', sm: '85%', md: '70%', lg: '40%' }} bg='#5F527A' alignItems={'center'} borderRadius={'20px'} minHeight='540px' pt={{ base: '10px', sm: '10px', md: '20px', lg: '70px' }} paddingLeft={{ base: '10px', sm: '30px', md: '50px', lg: '70px' }} mb={'200px'} paddingRight={{ base: '10px', sm: '30px', md: '50px', lg: '70px' }}>

                <Text fontSize='xl'>
                    I am a Full Stack developer with a Front End orientation. I have the ability to develop web projects always keeping in mind that they are scalable and modularizable in order to build as a team.
                </Text>
                <Text fontSize='xl'>

                    I did the bootcamp at "Soy Henry", an intense 5-months-bootcamp where I learned
                    almost everything I know about programming,
                    but above all I learned to learn.
                </Text>
                <Text fontSize='xl'>
                    I have teamwork and leadership skills.
                    I consider myself a creative, productive, adaptable and sociable person.
                </Text>
                <Stack pt={'90px'} w='200px' margin={'auto'}>
                    <a href='https://drive.google.com/file/d/1QmJxa6gGmfuXGcbNPyi81irC1lkqAGej/view' target={'_blank'}><Button variant='outline' marginBottom={'30px'} _hover={{ color: '#262626', bg: 'white' }} fontSize='xl' size='md'>Download CV</Button></a>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default About