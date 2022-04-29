import React, { useState } from 'react'
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



    return (
        <Stack bg='#1B1E2E' id='contact' color='#F2F2F2' h='100vh' fontFamily='"Red Hat Display", sans-serif' direction={'column'} alignItems={'center'} justifyContent={'space-around'}>
            <Stack alignItems={'center'} mt={{ base: '110px', sm: '110px', md: '40px', lg: '0' }}>
                <Text fontSize='6xl'>Contact</Text>
            </Stack>
            <Stack direction={'row'} width={{base: '80%', sm: '60%', md: '500px'}}>
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
            </Stack>
            <Stack>
            </Stack>
        </Stack>
    )
}

export default Contact