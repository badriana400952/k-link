import { Box, Button, Container, Flex } from "@chakra-ui/react"
import Product from "../component/Product"
import TableLaporanTransaksi from "../component/TableLaporanTransaksi"
import TableTransaksi from "../component/TableTransaksi"
import { Link } from "react-router-dom"
import Custommer from "../component/Custommer"

const Home = () => {
    return (
        <>
        <Container maxW="container.2xl">
            <Flex justifyContent={"start"} gap={5} mt={9}>
            <Button><Link to="/login">Login</Link></Button>
            <Button><Link to="/register">Register</Link></Button>
            </Flex>

            <Box my={'200px'}>
                <Custommer />

            </Box>
           
            <Box my={'200px'}>
                <TableTransaksi />

            </Box>
            <Box my={'200px'}>
                <Product />

            </Box>
            <Box my={'200px'}>
                <TableLaporanTransaksi />
            </Box>
            </Container>
        </>
    )
}

export default Home
