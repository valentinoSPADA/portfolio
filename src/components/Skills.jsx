import React from 'react'
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

const tecnologies = [{
    icon: <SiJavascript size={'50px'} />,
    name: "JavaScript"
}, {
    icon: <SiTypescript size={'50px'} />,
    name: "TypeScript"
}, {
    icon: <SiAngular size={'50px'} />,
    name: "Angular"
}, {
    icon: <FaReact size={'50px'} />,
    name: "React"
}, {
    icon: <SiRedux size={'50px'} />,
    name: "Redux"
}, {
    icon: <FaCss3Alt size={'50px'} />,
    name: "CSS"
}, {
    icon: <SiChakraui size={'50px'} />,
    name: "Chakra UI"
}, {
    icon: <SiFramer size={'50px'} />,
    name: "Framer Motion"
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
    icon: <SiHtml5 size={'50px'} />,
    name: "HTML5"
}, {
    icon: <SiGithub size={'50px'} />,
    name: "GitHub"
}, {
    icon: <SiGit size={'50px'} />,
    name: "Git"
},]

function Skills() {





    return (
        <Stack bg='#1B1E2E' color='#F2F2F2' id='skills' h={{base:'160vh' ,sm:'140vh' , md:'100vh' , lg:'100vh'}} fontFamily='"Red Hat Display", sans-serif' direction={'column'} alignItems={'center'} justifyContent={'space-around'}>
            <Stack alignItems={'center'}>
                <Text fontSize='6xl'>Skills</Text>
            </Stack>
            <Grid  align="center"
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
                    tecnologies?.map((t) => {
                        return (
                            <Stack alignItems={'center'}>
                                {t.icon}
                                <Text>
                                    {t.name}
                                </Text>
                            </Stack>
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