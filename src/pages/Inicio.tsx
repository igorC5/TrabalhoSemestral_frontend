import { Button, Flex, Heading } from "@chakra-ui/react"
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Inicio = () => {
  const navigate = useNavigate();

  return (
    <Flex 
      h="100vh"
      w="100vw"
      justify='center'
      align='center'
    >
      <Button onClick={() => {
        navigate('/')
      }}>
        <ChevronLeft color="white" />
        SAIR
      </Button>
      <Heading>INICIO</Heading>
    </Flex>   
  )
}

export default Inicio;