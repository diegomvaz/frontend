import { useState } from 'react';
import {
    Center,
    Input,
    FormControl,
    FormLabel,
    Card,
    Button,
    HStack,
    Box,
    Heading
} from '@chakra-ui/react'


function Login() {
    const [usuario, setUsuario] = useState({ nome: '', senha: '' })

    return (

        <Center h={'100vh'}>
            <Card>
                <Heading size='lg' paddingTop={10} textAlign={'center'}>Faça o Login</Heading>
                <FormControl padding={10} width={'350px'}>
                    <FormLabel>Usuário</FormLabel>
                    <Input id='nome' type='text' onChange={e => setUsuario({ ...usuario, nome: e.target.value })} />
                    <FormLabel paddingTop={10}>Senha</FormLabel>
                    <Input id='pass' type='password' onChange={e => setUsuario({ ...usuario, senha: e.target.value })} />
                    <Box marginTop={5}>
                        {/* {status != '' && <Alert status={tipoAlerta[status]}><AlertIcon />{status}</Alert>} */}
                    </Box>
                    <HStack >
                        <Button colorScheme='blue' marginTop={5} >Login</Button>
                    </HStack>
                </FormControl>
            </Card>
        </Center>
    )
}

export default Login