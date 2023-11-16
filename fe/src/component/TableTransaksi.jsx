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
const TableTransaksi = () => {
    const [data, setData] = useState([]);

    const handleGetData = async () => {
        try {

            const response = await ApiData.get('/transaksi');
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        handleGetData();
    }, []);

    console.log(data);
    return (
        <>
            <Container maxW='container.2xl'>
                <TableContainer>
                    <Table variant='simple'>
                        <Thead>
                            <Tr>
                                <Th>No </Th>
                                <Th>Invoice Number </Th>
                                <Th>invoice Date</Th>
                                <Th>Custommer</Th>
                                <Th>QTY</Th>
                                <Th>Total Anmount</Th>
                                <Th>Total Count</Th>
                                <Th>Product Detail</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                data.map((item,index) => (
                                    <Tr key={item.id}>
                                        <Td>{index+1}</Td>
                                        <Td>{item.invoice_number}</Td>
                                        <Td>{item.invoice_date}</Td>
                                        <Td>{item.customer}</Td>
                                        <Td>{item.qty}</Td>
                                        <Td>{item.total_amount}</Td>
                                        <Td>{item.total_count}</Td>
                                        <Td>{item.product_detail}</Td>
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

export default TableTransaksi
