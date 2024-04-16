import { Divider, HStack, Heading } from "@chakra-ui/react";


function Header() {
  return (
    <>
      <HStack height={'100px'} >
        <Heading paddingRight={20}>
          Capinhas Android
        </Heading>
      </HStack>
      <Divider />
    </>
  )
}

export default Header