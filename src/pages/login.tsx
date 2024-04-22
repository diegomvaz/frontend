import {
    Center,
    Card,
    Box,
    Heading,
    Alert,
    AlertIcon,
    AlertDescription,
    Flex
} from '@chakra-ui/react'
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    return (
        <>
            <Center h={'100vh'}>


                <Card>
                    <Heading size='lg' paddingTop={10} textAlign={'center'}>Faça o Login</Heading>
                    <Box padding={10}>
                        <Flex direction={'column'} alignItems={'center'}>
                            <GoogleLogin
                                onSuccess={credentialResponse => {
                                    console.log(credentialResponse);
                                    navigate("/pedidos");
                                }}
                                onError={() => {
                                    <Alert status='error'>
                                        <AlertIcon />
                                        <AlertDescription>Não foi possível logar.</AlertDescription>
                                    </Alert>
                                }}
                            />
                        </Flex>
                    </Box>
                </Card>
            </Center>
        </>
    )
}

export default Login