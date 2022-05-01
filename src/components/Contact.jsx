import React, { useEffect, useState } from 'react'
import {
    Stack,
    Button,
    Text,
    FormControl,
    FormLabel,
    Input,
    InputLeftAddon,
    FormHelperText,
    Textarea,
    FormErrorMessage,
    InputGroup
} from '@chakra-ui/react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'



function Contact() {

    const [input, setInput] = useState({ email: "", nombre: "", texto: "" })

    const handleInputChange = (e) => setInput(
        {
            ...input,
            [e.target.name]: e.target.value
        })

    const isError = () => {
        if (/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(input.email)) {
            return false
        } else {
            return true
        }
    }

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
        <Stack ref={ref} bg='#1B1E2E' id='contact' color='#F2F2F2' h='100vh' fontFamily='"Red Hat Display", sans-serif' direction={'column'} alignItems={'center'} justifyContent={'space-around'}>
            <MoStack initial={{ y: 100, opacity: -1, }} animate={animation} alignItems={'center'} mt={{ base: '110px', sm: '110px', md: '40px', lg: '0' }}>
                <Text fontSize='6xl'>Contact</Text>
            </MoStack>
            <MoStack initial={{ y: 100, opacity: -1, }} animate={animation} direction={'row'} width={{base: '80%', sm: '60%', md: '500px'}}>
                <FormControl isRequired display={'flex'} flexDirection={'column'} alignContent={'center'}>
                    <Stack direction={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }} spacing={20}>
                        <Stack>
                            <FormLabel htmlFor='email'>Email</FormLabel>
                            <Input
                                id='email'
                                type='email'
                                value={input.email}
                                name='email'
                                placeholder='something@something.com'
                                onChange={handleInputChange}
                            />
                        </Stack>
                        <Stack>
                            <FormLabel htmlFor='nombre'>Name and Surname</FormLabel>
                            <Input
                                id='nombre'
                                type='nombre'
                                name='nombre'
                                placeholder='Valentino Spada'
                                value={input.nombre}
                                onChange={handleInputChange}
                            />
                        </Stack>
                    </Stack>
                    <Stack mt={'20px'}>
                        <FormLabel htmlFor='text'>Message</FormLabel>
                        <Textarea
                            rows="5" cols="50"
                            id='text'
                            type='text'
                            name='text'
                            placeholder='Write what you want to tell me...'
                            value={input.text}
                            onChange={handleInputChange}
                        />
                    </Stack>
                    <Button _hover={{ color: '#262626', bg: 'white' }} type={'submit'} bg={'#404040'} width={'100px'} margin={'auto'} mt={'20px'}>
                        Send
                    </Button>
                </FormControl>
            </MoStack>
            <Stack>
            </Stack>
        </Stack>
    )
}

export default Contact