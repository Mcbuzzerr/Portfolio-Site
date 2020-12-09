import { Link as NextLink } from 'next/link'
import { Button, ButtonGroup, Link, Box, Flex, Text } from "@chakra-ui/react"

const Home = () => (<>
    <Flex>
        {/* Left half */}
        <Box w="50vw" h="100vh" backgroundColor="mycolors.4">
            <Box>    
                <Text>Alex Bates</Text>
                <h2>Web Dev</h2>
                <Link as={NextLink} href="/about" borderColor="gray.300" borderWidth="5px" bgColor="gray.300" borderRadius="2px">
                    About
                </Link>
            </Box>
        </Box>
        {/* MID */}
        <Box w="23.5vw" h="100vh" zIndex="2" position="fixed" top="0" left="0">
            <svg width="100vw" height="100vh">
                <Box as="circle" cx="50vw" cy="25vh" r="25vh" fill="mycolors.4" />
                <Box as="circle" cx="50vw" cy="75vh" r="25vh" fill="mycolors.5" />
            </svg>
        </Box>
        {/* Right half */}
        <Box w="50vw" h="100vh" backgroundColor="mycolors.5">
            {/* Link to Examples */}
            <Box>
                <Link as={NextLink} to="/">
                    <Box mr="3px" mb="3px"></Box>
                </Link>
            </Box>
            {/* Link to Contact */}
            <Box>
                <Link as={NextLink} to="/">
                    <Box mr="3px" mb="3px"></Box>
                </Link>
            </Box>
        </Box>
    </Flex>
</>
)

export default Home