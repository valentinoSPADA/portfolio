import React, { useEffect } from 'react'
import {
    Stack,
    Button,
    Text,
    Image,
    Grid
} from '@chakra-ui/react'
import { FaCss3Alt, FaReact } from 'react-icons/fa'
import {
    SiJavascript,
    SiChakraui,
    SiFramer,
    SiTypescript,
    SiAngular,
    SiRedux,
    SiBootstrap,
    SiNodedotjs,
    SiPostgresql,
    SiSequelize,
    SiExpress,
    SiHtml5,
    SiGithub,
    SiGit
} from 'react-icons/si'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

const tecnologies = [{
    icon: <SiHtml5 size={'50px'} />,
    name: "HTML5"
}, {
    icon: <FaCss3Alt size={'50px'} />,
    name: "CSS"
}, {
    icon: <SiJavascript size={'50px'} />,
    name: "JavaScript"
}, {
    icon: <FaReact size={'50px'} />,
    name: "React"
}, {
    icon: <SiRedux size={'50px'} />,
    name: "Redux"
}, {
    icon: <SiBootstrap size={'50px'} />,
    name: "Bootstrap"
}, {
    icon: <SiNodedotjs size={'50px'} />,
    name: "NodeJS"
}, {
    icon: <SiPostgresql size={'50px'} />,
    name: "PostgreSQL"
}, {
    icon: <SiSequelize size={'50px'} />,
    name: "Sequelize"
}, {
    icon: <SiExpress size={'50px'} />,
    name: "Express"
}, {
    icon: <SiChakraui size={'50px'} />,
    name: "Chakra UI"
}, {
    icon: <SiFramer size={'50px'} />,
    name: "Framer Motion"
}, {
    icon: <SiGithub size={'50px'} />,
    name: "GitHub"
}, {
    icon: <SiGit size={'50px'} />,
    name: "Git"
}, {
    icon: <SiTypescript size={'50px'} />,
    name: "TypeScript"
}, {
    icon: <SiAngular size={'50px'} />,
    name: "Angular"
},]

function Skills() {


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
        <Stack ref={ref} bg='#1B1E2E' color='#F2F2F2' id='skills' h={{ base: '160vh', sm: '140vh', md: '100vh', lg: '100vh' }} fontFamily='"Red Hat Display", sans-serif' direction={'column'} alignItems={'center'} justifyContent={'space-around'}>
            <MoStack animate={animation} initial={{ y: 100, opacity: -1, }} alignItems={'center'} mt={{ base: '110px', sm: '110px', md: '40px', lg: '0' }}>
                <Text fontSize='6xl'>Skills</Text>
            </MoStack>
            <Grid align="center"
                w={{ base: "100%", sm: "100%", md: "100%", lg: "90%" }}
                gap={{ base: 6, sm: 6, md: 4, lg: 8 }}
                templateColumns={
                    {
                        base: "repeat(2, 1fr)",
                        sm: "repeat(3, 1fr)",
                        md: "repeat(4, 1fr)",
                        lg: "repeat(8, 1fr)"
                    }
                }
            >
                {
                    tecnologies?.map((t, i) => {
                        return (
                            <MoStack whileHover={{ scale: 1.1 }} animate={animation} initial={{ y: 100, opacity: -1, }} key={i} alignItems={'center'}>
                                {t.icon}
                                <Text>
                                    {t.name}
                                </Text>
                            </MoStack>
                        )
                    })
                }

            </Grid>
            <Stack>
            </Stack>
        </Stack>
    )
}

export default Skills