import React, { useState } from 'react'
import {
    Stack,
    Button,
    Text,
    Image,
    Grid,
    GridItem
} from '@chakra-ui/react'
import beefshop from "./Images/BeefShop.PNG"
import videogameApp from "./Images/videogameApp.PNG"



const projects = [{
    name: "VIDEOGAME APP",
    img: videogameApp,
    date: "02 / 2022 - 03 / 2022",
    repositorio: ["https://github.com/valentinoSPADA/videogames-PI"],
    deploy: "no realizado",
    video: "https://www.linkedin.com/feed/update/urn:li:activity:6907094150408458242/",
    description: "Desarrollo de una SPA (Single Page Application) utilizando react para el Front End y Redux como State Management.Todos los componentes fueron desarrollados con CSS y CSS modules sin uso de librerias externas. La SPA consume datos de una API (rawg.io) a traves de un Back End desarrollado en NodeJS utilizando Express, agregando nuevas funcionalidades a la API original."
}, {
    name: "BEEF SHOP",
    img: beefshop,
    date: "03 / 2022 - 04 / 2022",
    repositorio: ["https://github.com/valentinoSPADA/Henry-PF-Client", "https://github.com/valentinoSPADA/Henry-PF"],
    deploy: "https://beefshop.vercel.app/",
    video: "no realizado",
    description: "Beef shop es un e-commerce que facilita la compra de productos de carniceria. Nuestro objetivo es lograr que cualquier persona pueda realizar una compra de manera rapida y sencilla. Esto es parte del proyecto final del Bootcamp Soy Henry, por lo cual todo lo que este relacionado con el stock, los pagos, etc. es ficticio."
}]



function Proyects() {
    return (
        <Stack bg='#222639' id='projects' color='#F2F2F2' h={{ base: '1800px', sm: '200vh', md: '1700px', lg: '1000px' }} fontFamily='"Red Hat Display", sans-serif' direction={'column'} alignItems={'center'}>
            <Stack alignItems={'center'} mt="110px" mb={'40px'}>
                <Text fontSize='6xl'>Proyectos</Text>
            </Stack>
            <Stack alignSelf={'center'} width={'80%'} justifyContent={'center'}>

                <Grid justifyContent={'center'} alignItems={'center'}
                    w={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
                    templateColumns={
                        {
                            base: "repeat(1, 1fr)",
                            sm: "repeat(1, 1fr)",
                            md: "repeat(1, 1fr)",
                            lg: "repeat(2, 1fr)"
                        }
                    }
                >
                    {projects.map(p => {
                        return (
                            <Stack justifyContent={'space-between'} margin={'10px 10px 10px 10px'} alignItems={'center'}>
                                <GridItem>
                                    <Stack bg={'#5F527A'} borderRadius={'10px'} alignItems={'center'} justifyContent={'center'} width={{ base: '330px', sm: '450px', md: "450px", lg: '450px' }} height={{ base: '750', sm: '660px', md: "660px", lg: '660px' }}>
                                        <Text fontSize={'2xl'} spacing={0}>{p.name}</Text>
                                        <Text fontSize={'md'} spacing={0}>{p.date}</Text>
                                        <Image src={p.img} height={'200px'}></Image>
                                        <Stack width={{ base: '310px', sm: '400px', md: "400px", lg: '400px' }} height={{ base: '380px', sm: '310px', md: "310px", lg: '310px' }} justifyContent={'center'}>
                                            <Text textAlign={'center'} fontSize={'xl'}>{p.description}</Text>
                                        </Stack>
                                        <Stack direction={'row'}>
                                            <a href={p.repositorio[0]} target={'_blank'}><Button _hover={{ color: '#262626', bg: 'white' }} variant='outline'>Repositorio</Button></a>
                                            {p.video === "no realizado" ?
                                                <a href={p.deploy} target={'_blank'}><Button _hover={{ color: '#262626', bg: 'white' }} variant='outline'>Deploy</Button></a>
                                                :
                                                <a href={p.video} target={'_blank'}><Button _hover={{ color: '#262626', bg: 'white' }} variant='outline'>Video</Button></a>
                                            }
                                        </Stack>
                                    </Stack>
                                </GridItem>
                            </Stack>

                        )
                    })}
                </Grid>
            </Stack>
        </Stack>
    )
}



export default Proyects