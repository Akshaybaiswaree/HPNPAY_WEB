//  import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';


// const IncomeCalculator = () => {

//     window.onbeforeunload = function () {
//         window.scrollTo(0, 0);
//       }

//     return (
//         <div style={{ 
//           fontSize:"2rem",
//           textAlign: 'center', paddingTop: '100px', fontWeight:"700"  , color:"gray"}}>
//           <motion.h1
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 2 }}
//           >
//             Coming Soon!
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 2 }}
//           >
//             Exciting things are on the way. Stay tuned!
//           </motion.p>
//         </div>
        
//       )

    // const bankingData = [

    //     {
    //         benefits: "Money Transfer",
    //         Range: 4000,
    //         transaction: 1,
    //         income: 19.2,
    //         rate: 0.48
    //     },
    //     {
    //         benefits: "Aadhar ATM",
    //         Range: 3500,
    //         transaction: 1,
    //         income: 7,
    //         rate: 0.2
    //     },
    //     {
    //         benefits: "Micro ATM",
    //         Range: 3500,
    //         transaction: 1,
    //         income: 7,
    //         rate: 0.2
    //     },
    //     // {
    //     //     benefits: "Mini Statement",
    //     //     Range: "NaN",
    //     //     transaction: 1,
    //     //     income: 1
    //     // },

    //     {
    //         benefits: "Mobile Recharge",
    //         Range: 140,
    //         transaction: 1,
    //         income: 2.38,
    //         rate: 1.7
    //     },
    //     {
    //         benefits: "DTH Recharge",
    //         Range: 250,
    //         transaction: 1,
    //         income: 5,
    //         rate: 2
    //     },
    //     // {
    //     //     benefits: "Electricity BP",
    //     //     Range: 800,
    //     //     transaction: 1,
    //     //     income: 0.25,
    //     //     rate: ''
    //     // },
    //     // {
    //     //     benefits: "Gas BP",
    //     //     Range: 1000,
    //     //     rate: '',
    //     //     transaction: 1,
    //     //     income: 0.25
    //     // },
    //     // {
    //     //     benefits: "Water Bill",
    //     //     Range: 700,
    //     //     rate: '',
    //     //     transaction: 1,
    //     //     income: 0.25
    //     // },
    //     {
    //         benefits: "Credit Card BP",
    //         Range: 5000,
    //         rate: 0.5,
    //         transaction: 1,
    //         income: 25
    //     },
    //     // {
    //     //     benefits: "Post Paid BP",
    //     //     Range: 1,
    //     //     rate: 0.5,
    //     //     transaction: 1,
    //     //     income: 0.5
    //     // },
    //     {
    //         benefits: "Fast Tag Recharge",
    //         Range: 1000,
    //         rate: 0.1,
    //         transaction: 1,
    //         income: 1
    //     },
    //     {
    //         benefits: "Bike Insurance",
    //         Range: 1682,
    //         rate: 6,
    //         transaction: 1,
    //         income: 100.92
    //     },
    //     {
    //         benefits: "Car Insurance",
    //         Range: 590,
    //         rate: 5.5,
    //         transaction: 1,
    //         income: 32.45
    //     },

    //     {
    //         benefits: "Personal Accident",
    //         Range: 1000,
    //         rate: 13.5,
    //         transaction: 1,
    //         income: 135
    //     },
    //     // {
    //     //     benefits: "IRCTC Non A/C",
    //     //     Range: 500,
    //     //     rate: '',
    //     //     transaction: 1,
    //     //     income: 20
    //     // }, {
    //     //     benefits: "IRCTC A/C",
    //     //     Range: 1500,
    //     //     rate: '',
    //     //     transaction: 1,
    //     //     income: 40
    //     // },
    //     {
    //         benefits: "Bus Booking",
    //         Range: 500,
    //         rate: 6.5,
    //         transaction: 1,
    //         income: 32.5
    //     }, {
    //         benefits: "Phyical PAN Card",
    //         Range: 510,
    //         rate: 10,
    //         transaction: 1,
    //         income: 15
    //     }, {
    //         benefits: "OTT Subscription",
    //         Range: 1000,
    //         rate: 0.1,
    //         transaction: 1,
    //         income: 1
    //     }, {
    //         benefits: "Digi Smart Transfer",
    //         Range: 4000,
    //         rate: 0.63,
    //         transaction: 1,
    //         income: 25.2
    //     }, {
    //         benefits: "General Insurance Premium Amont",
    //         Range: 10000,
    //         rate: 10,
    //         transaction: 1,
    //         income: 1000
    //     },
    // ];
 

    // const [incomeValues, setIncomeValues] = useState(bankingData.map(() => '1'));
    // const [newData, setNewData] = useState([]);
    // const [incomePerDay, setIncomePerDay] = useState(0); // New state for total income

    // let totalIncome = incomePerDay * 30;

    // const handleIncomeChange = (index, value) => {
    //     const newIncomeValues = [...incomeValues];
    //     newIncomeValues[index] = value;
    //     setIncomeValues(newIncomeValues);
    // };

    // useEffect(() => {
    //     // Calculate new values based on the formula
    //     const newBankingData = bankingData.map((ele, index) => {
    //         const inputValue = parseFloat(incomeValues[index]) || 0;

    //         const newIncome = ele.Range === "Flat"
    //             ? inputValue
    //             : (ele.Range * ele.transaction * ele.rate * inputValue) / 100;
    //         return { ...ele, income: newIncome };
    //     });

    //     // Update the banking data with the new values
    //     setNewData(newBankingData);

    //     // Calculate and update the total income
    //     const newIncomePerDay = newBankingData.reduce((total, ele) => total + ele.income, 0);
    //     setIncomePerDay(newIncomePerDay);

    // }, [incomeValues]);

    // return (
    //     <Box margin={'2rem'}>
            
    //         <Box margin={'40px'}>
    //             <Heading color={'blue.700'} fontSize='5xl' font-weight="bold">Income Calculator</Heading>
    //             <Text>Home :: Income Calculator</Text>
    //             <br />
    //             <Heading color={'blue.900'} fontSize='1xl' font-weight="bold">
    //                 Add the number of transactions to calculate earnings.

    //             </Heading>
    //         </Box>
    //         <Box display={'flex'} direction={'row'}>
    //             {/* table */}
    //             <Box>
    //                 <Box margin={'40px'} width='55rem' boxShadow={'2xl'}>
    //                     <TableContainer borderRadius={'20px'}>
    //                         <Table variant='striped' colorScheme='gray.100'>
    //                             <Thead bg={'blue.700'} color='white'>
    //                                 <Tr>
    //                                     <Th color='white' fontSize={'1xl'}>Banking Services</Th>
    //                                     <Th color='white' fontSize={'1xl'}>No. of daily Transaction</Th>
    //                                     <Th color='white' fontSize={'1xl'} isNumeric>Income(₹)</Th>
    //                                 </Tr>
    //                             </Thead>
    //                             {newData.map((ele, index) => {
    //                                 return (
    //                                     <Tbody key={index} height={'100px'} >
    //                                         <Tr key={index}>
    //                                             <Td fontSize={'1xl'}>
    //                                                 <Text color={'black'} fontSize={'2xl'}>{ele.benefits}</Text>
    //                                                 <Text>Avg transaction of ₹{ele.Range}</Text>
    //                                             </Td>
    //                                             <Td w={'50px'}>
    //                                                 <Input
    //                                                     textAlign={'center'}
    //                                                     value={incomeValues[index]}
    //                                                     onChange={(e) => handleIncomeChange(index, e.target.value)}
    //                                                     borderRadius={'10px'}
    //                                                     borderColor={'black solid'}
    //                                                     _hover={"black"} />
    //                                             </Td>
    //                                             <Td isNumeric paddingRight={'60px'}>{ele.income}</Td>
    //                                         </Tr>
    //                                     </Tbody>
    //                                 )
    //                             })}
    //                         </Table>
    //                     </TableContainer>
    //                 </Box>
    //             </Box>
    //             {/* total income table */}
    //             <Box margin={'40px'}>
    //                 <Box boxShadow={'2xl'} borderRadius={'20px'} >
    //                     <Card maxW='md' borderRadius={'20px'} backgroundColor={'blue.600'}>
    //                         <Box borderRadius={'20px'} backgroundColor={'blue.900'}>
    //                             <CardHeader>
    //                                 <Center>

    //                                     <Flex spacing='4' >
    //                                         <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
    //                                             {/* <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' /> */}
    //                                             <Box >
    //                                                 <Heading size='md' color='white'>Income Per Day</Heading>
    //                                                 <Text size={'md'} color='white' fontSize={'4xl'}>{incomePerDay}</Text>
    //                                             </Box>
    //                                             <Box size='md'>
    //                                                 <Heading size='lg' height={'20px'} color='white'>x</Heading>
    //                                             </Box>
    //                                             <Box>
    //                                                 <Heading size='md' color='white'>Number of Days</Heading>
    //                                                 <Text fontSize={'4xl'} color='white'>{30}</Text>
    //                                             </Box>
    //                                         </Flex>

    //                                     </Flex>
    //                                 </Center>
    //                             </CardHeader>
    //                             <CardBody >
    //                                 <Image
    //                                     borderRadius={'20px'}
    //                                     alt={'income image'}
    //                                     src={income}

    //                                 />
    //                             </CardBody>
    //                         </Box>

    //                         <CardFooter
    //                             borderRadius={'20px'}
    //                         >

    //                             <Box>
    //                                 <Heading size='md' color='white'>Total Income</Heading>
    //                                 <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
    //                                     <Text size={'md'} color='white' fontSize={'6xl'}>{totalIncome}</Text>
    //                                     <Text size={'sm'} color='white' fontSize={'2xl'} paddingTop={'20px'} >/Month</Text>
    //                                 </Box>

    //                             </Box>
    //                         </CardFooter>
    //                         <CardFooter>

    //                             <Button
    //                                 size='lg'
    //                                 height='58px'
    //                                 width='600px'
    //                                 // border='2px'
    //                                 backgroundColor='blue.100'
    //                                 _hover={'blue.100'}
    //                             >
    //                                 Join HPNPAY
    //                             </Button>
    //                         </CardFooter>
    //                     </Card>
    //                 </Box>
    //             </Box>
    //         </Box>

    //     </Box>
    // );
// };

//  export default IncomeCalculator;


import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const IncomeCalculator = () => {
  useEffect(() => {
    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };

    // Add event listener for beforeunload
    window.addEventListener('beforeunload', handleBeforeUnload);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []); // Empty dependency array ensures that the effect runs only once on mount

  return (
    <div style={{ fontSize: "2rem", textAlign: 'center', paddingTop: '100px', fontWeight: "700", color: "gray" }}>
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        Coming Soon!
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        Exciting things are on the way. Stay tuned!
      </motion.p>
    </div>
  );
};

export default IncomeCalculator;

