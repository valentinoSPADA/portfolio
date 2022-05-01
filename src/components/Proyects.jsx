import React, { useEffect, useState } from 'react'
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
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'



const projects = [{
    name: "VIDEOGAME APP",
    img: videogameApp,
    date: "02 / 2022 - 03 / 2022",
    repositorio: ["https://github.com/valentinoSPADA/videogames-PI"],
    deploy: "no realizado",
    video: "https://www.linkedin.com/feed/update/urn:li:activity:6907094150408458242/",
    description: "I developed a SPA (Single Page Application) using React with Redux for the Front End. All components were styled with CSS and CSS modules without using external libraries. It consumes data from an API (rawg.io) through a Back End API developed in NodeJS using Express, adding new features to the original API."
}, {
    name: "BEEF SHOP",
    img: beefshop,
    date: "03 / 2022 - 04 / 2022",
    repositorio: ["https://github.com/valentinoSPADA/Henry-PF-Client", "https://github.com/valentinoSPADA/Henry-PF"],
    deploy: "https://beefshop.vercel.app/",
    video: "no realizado",
    description: "I developed a SPA (Single Page Application) using React with Redux for the Front End. It is an e-commerce page that allows you to buy meat. Also, it has an admin dashboard that you can use only if you are an admin where you can modify and create products, promotions, users, orders, and categories. It has implemented a local payment platform (Mercadopago) as the payment method."
}]



function Proyects() {

    const { ref, inView } = useInView({
        threshold: 0.05
    })
    //  animate={inView ? {   } : null}
    const animation = useAnimation()
    const MoStack = motion(Stack)

    useEffect(() => {
        if (inView) {
            animation.start({
                y: 0,
                opacity: 1,
                transition: {
                    type: 'tween', duration: 0.5
                }
            })
        }
    }, [inView])




    return (
        <Stack ref={ref} bg='#222639' id='projects' color='#F2F2F2' h={{ base: '1800px', sm: '200vh', md: '1700px', lg: '1000px' }} fontFamily='"Red Hat Display", sans-serif' direction={'column'} alignItems={'center'}>
            <MoStack animate={animation} initial={{ y: 100, opacity: -1, }} alignItems={'center'} mt="110px" mb={'40px'}>
                <Text fontSize='6xl'>Projects</Text>
            </MoStack>
            <MoStack animate={animation} initial={{ y: 100, opacity: -1, }} alignSelf={'center'} width={'80%'} justifyContent={'center'}>

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
                    {projects.map((p, i) => {
                        return (
                            <Stack key={i} justifyContent={'space-between'} margin={'10px 10px 10px 10px'} alignItems={'center'}>
                                <GridItem>
                                    <MoStack whileHover={{ scale: 1.1 }} bg={'#5F527A'} borderRadius={'10px'} alignItems={'center'} justifyContent={'center'} width={{ base: '330px', sm: '450px', md: "450px", lg: '450px' }} height={{ base: '750', sm: '660px', md: "660px", lg: '660px' }}>
                                        <Text fontSize={'2xl'} spacing={0}>{p.name}</Text>
                                        <Text fontSize={'md'} spacing={0}>{p.date}</Text>
                                        <Image src={p.img} height={'200px'}></Image>
                                        <Stack width={{ base: '310px', sm: '400px', md: "400px", lg: '400px' }} height={{ base: '380px', sm: '310px', md: "310px", lg: '310px' }} justifyContent={'center'}>
                                            <Text textAlign={'center'} fontSize={'xl'}>{p.description}</Text>
                                        </Stack>
                                        <Stack direction={'row'}>
                                            <a href={p.repositorio[0]} target={'_blank'}><Button _hover={{ color: '#262626', bg: 'white' }} variant='outline'>Repository</Button></a>
                                            {p.video === "no realizado" ?
                                                <a href={p.deploy} target={'_blank'}><Button _hover={{ color: '#262626', bg: 'white' }} variant='outline'>Deploy</Button></a>
                                                :
                                                <a href={p.video} target={'_blank'}><Button _hover={{ color: '#262626', bg: 'white' }} variant='outline'>Video</Button></a>
                                            }
                                        </Stack>
                                    </MoStack>
                                </GridItem>
                            </Stack>

                        )
                    })}
                </Grid>
            </MoStack>
        </Stack>
    )
}



export default Proyects