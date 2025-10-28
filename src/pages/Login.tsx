import { InputUnform } from "@/components/InputUnform";
import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import type { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // REFERENCIA DO FORMULARIO DE LOGIN
  const formRef = useRef<FormHandles>(null);

  // ESTADO QUE CONTROLA SE ESTÁ ENVIANDO SUBMIT OU NÃO
  const [enviando, setEnviando] = useState(false);

  // CONSTANTE PARA NAVEGAÇÃO ENTRE PÁGINAS
  const navigate = useNavigate();

  // ENVIA REQUISIÇÃO DO LOGIN AO BACK
  // DATA = DADOS DOS INPUTS, no caso usuario e senha
  const handleSubmit = async (data: any) => {
    console.log('teste')
    console.log(data)
    setEnviando(true);
    try {
      navigate('/home')
    } catch (error) {
    
      console.log(data)
    } finally {
      setEnviando(false);
    }
  }

  return (
    <Flex 
      w="100vw" // largura maxima
      h="100vh" // altura maxima
      justify='center' // alinha horizontalmente
      align='center' // alinha verticalmente
      bgGradient='to-br'
      gradientFrom='blue.400'
      gradientTo='purple.600'
      flexDir='column'
    >
      <Heading 
        fontSize={50}
        marginBottom={5}
      >
        LOGIN
      </Heading>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <Flex flexDir='column'>
          <Flex w="250px">
            <Text textAlign='left' fontWeight='bold'>Usuário</Text>
          </Flex>
          <InputUnform
            name="usuario" // VALOR PRO FORM
            borderRadius={10}
            w="250px"
            bg="white"
            borderWidth={2}
            borderColor="gray.800"
            outline="none"
            placeholder="Digite aqui..."
            type="text"
          />

          <Flex w="250px">
            <Text textAlign='left' fontWeight='bold'>Senha</Text>
          </Flex>
          <InputUnform
            name="senha" // VALOR PRO FORM
            borderRadius={10}
            type="password"
            w="250px"
            bg="white"
            borderWidth={2}
            borderColor="gray.800"
            outline="none"
            placeholder="Digite aqui..."
          />

          <Button
            marginTop={5}
            bgGradient='to-b'
            gradientFrom='red.400'
            gradientTo='red.600'
            type="submit"
            fontSize='120%'
          >
            LOGAR
          </Button>
        </Flex>
      </Form>
    </Flex>   
  )
}

export default Login;