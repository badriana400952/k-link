import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, Input, Text } from "@chakra-ui/react"
import { useState } from "react"
import { Link, useNavigate,   } from "react-router-dom"
import { ApiData } from "../../services/api"
const Login = () => {
  const navigate = useNavigate()
  const [logins, setLogins] = useState({
    email: '',
    password: ''
  })
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogins({ ...logins, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("newData", logins)
    try {
        const datas = await ApiData.post(`/login`, logins)
        console.log("datas", datas)
        navigate('/')
        alert("login success")
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <Container maxW="container.2xl" bg={"blackAlpha.200"} h={"100vh"}>
        <Flex justifyContent={"center"}>
          <Box mt={10} bg={"white"} p={10} w={"40%"} minW={"400px"} color={"#BD0707"} borderRadius={"10px"}>
          <Heading as={"h2"} size="lg" mb={5} color={"#BD0707"}>Login</Heading>
          <form onSubmit={handleSubmit}>
            <FormControl py={3}>
              <FormLabel>Email</FormLabel>
              <Input type='email' name="email"  padding={"10px"} border={"3px solid #BD0707"} onChange={handleChange}/>
            </FormControl>

            <FormControl py={3}>
              <FormLabel>Password</FormLabel>
              <Input type='password' name="password" padding={"10px"}  border={"3px solid #BD0707"} onChange={handleChange}/>
            </FormControl>

            <FormControl py={3}>
              <Button type='submit' bg={"#BD0707"} color={"white"} w={"100%"}>Register</Button>
            </FormControl>
            <Text fontSize={"2sm"} textAlign={"center"} color={"black"} >don`t have an account yet ?  <Link to="/register">Klik <span style={{fontWeight:"bold"}}>Here</span></Link></Text>
          </form>
          </Box>
        </Flex>
      </Container>
    </>
  )
}

export default Login
