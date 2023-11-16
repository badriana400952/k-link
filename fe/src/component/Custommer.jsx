import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Container,
    Button,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { ApiData } from '../services/api';
const Custommer = () => {
    const [data, setData] = useState([]);

    const handleGetDataProduct = async () => {
        try {

            const response = await ApiData.get('/users');
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        handleGetDataProduct();
    }, []);

    console.log(data);
    return (
        <>
            <Container maxW='container.2xl'>
                <TableContainer>
                    <Table variant='simple'>
                        <Thead>
                            <Tr bg={'gray.100'}>
                                <Th>No</Th>
                                <Th>Custommer </Th>
                                <Th>Action </Th>

                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                data.map((item, index) => (
                                    <Tr key={item.id}>
                                        <Td>{index + 1}</Td>
                                        <Td>{item.firstName}</Td>
                                        <Td >
                                            <Button mx={2}>Edit</Button>
                                            <Button>Delete</Button>
                                        </Td>
                                    </Tr>
                                ))
                            }

                        </Tbody>
                    </Table>
                </TableContainer>
            </Container>
        </>
    )
}

export default Custommer
