import React, { useEffect, useRef, useState } from 'react'
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
import emailjs from '@emailjs/browser';



function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_83x2d97', 'template_zplm2st', form.current, 'fGbdLdkS6TfamLTAR')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        setInput({ email: "", fullName: "", message: "" })
    };

    const [input, setInput] = useState({ email: "", fullName: "", message: "" })
    const [error, setError] = useState({})


    const handleInputChange = function (e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
        setError(isError({
            ...input,
            [e.target.name]: e.target.value
          }));
    }

    const isError = (input) => {
        if(!input.email){
            return true
        }
        if (/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(input.email)) {
            return false
        }
        if(!input.fullName){
            return true
        }
        if(!input.message){
            return true
        }
         else {
            return true
        }
    }

    const { ref, inView } = useInView({
        threshold: 0.05
    })
    //  animate={inView ? {   } : null}
    const animation = useAnimation()
    const MoStack = motion(Stack)

    // useEffect(() => {
    //     if (inView) {
    //         animation.start({
    //             y: 0,
    //             opacity: 1,
    //             transition: {
    //                 type: 'tween', duration: 0.5
    //             }
    //         })
    //     }
    // }, [inView])

    return (
        <Stack bg='#1B1E2E' id='contact' color='#F2F2F2' h='100vh' fontFamily='"Red Hat Display", sans-serif' direction={'column'} alignItems={'center'} justifyContent={'space-around'}>
            <MoStack alignItems={'center'} mt={{ base: '110px', sm: '110px', md: '40px', lg: '0' }}>
                <Text fontSize='6xl'>Contact</Text>
            </MoStack>
            <Stack direction={'row'} width={{ base: '80%', sm: '60%', md: '500px' }}>
                <FormControl isRequired display={'flex'} flexDirection={'column'} alignContent={'center'} >
                    <form ref={form} onSubmit={sendEmail}>
                        <Stack direction={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }} margin={'auto'} spacing={{ base: '5', sm: '5', md: '20', lg: '20' }}>
                            <Stack>
                                <FormLabel>Email</FormLabel>
                                <Input
                                    type={'text'}
                                    value={input.email}
                                    name='email'
                                    placeholder='something@something.com'
                                    onChange={handleInputChange}
                                />
                            </Stack>
                            <Stack >
                                <FormLabel>Name and Surname</FormLabel>
                                <Input
                                    type={'text'}
                                    name='fullName'
                                    placeholder='Valentino Spada'
                                    value={input.fullName}
                                    onChange={handleInputChange}
                                />
                            </Stack>
                        </Stack>
                        <Stack  margin={'auto'} mt={'20px'}>
                            <FormLabel>Message</FormLabel>
                            <Textarea
                                rows="5" cols="50"
                                type={'text'}
                                name='message'
                                placeholder='Write what you want to tell me...'
                                value={input.message}
                                onChange={handleInputChange}
                            />
                        </Stack>
                        {error ?

                            <Button margin={'auto'} disabled mt={'20px'} type="submit" fontWeight={'1'} value="Send" _hover={{ color: '#262626', bg: 'white' }} variant='outline' fontSize='lg' display={'flex'} size='md' >
                                Send
                            </Button>
                            :

                            <Button margin={'auto'} mt={'20px'} type="submit" fontWeight={'1'} value="Send" _hover={{ color: '#262626', bg: 'white' }} variant='outline' fontSize='lg' display={'flex'} size='md' >
                                Send
                            </Button>
                        }
                    </form>
                </FormControl>
            </Stack>
            <Stack>
            </Stack>
        </Stack>
    )
}

export default Contact