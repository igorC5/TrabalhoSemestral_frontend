import { Flex, Heading, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const handleVoltarInicio = () => {
    navigate('/')
  }

  return (
    <Flex>
      <Heading>Página não encontrada :c</Heading>
      <Flex onClick={handleVoltarInicio} cursor="pointer">
        <Text color="blue.700">VOLTAR</Text>
      </Flex>
    </Flex>   
  )
}

export default NotFound;  