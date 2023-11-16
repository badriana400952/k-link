import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Container,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { ApiData } from '../services/api';
const Product = () => {
    const [data, setData] = useState([]);

    const handleGetDataProduct = async () => {
        try {

            const response = await ApiData.get('/product');
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
                            <Tr>
                                <Th>No</Th>
                                <Th>Prdnm </Th>
                                <Th>Harga</Th>

                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                data.map((item,index) => (
                                    <Tr key={item.id}>
                                        <Td>{index + 1}</Td>
                                        <Td>{item.prdnm}</Td>
                                        <Td>{item.harga}</Td>
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

export default Product
