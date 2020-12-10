import { Link as NextLink } from 'next/link'
import { Button, ButtonGroup, Link, Box, Flex, Text, Heading } from "@chakra-ui/react"

// read 3 books for what you are trying to learn
// First book makes no sense. third book starts making sense, 
//third book makes sense because you've learned the same thing from 3 different perspectives



const Home = () => (<>
        {/* Left half */}
        <Box w="50vw" h="100vh" backgroundColor="mycolors.4" position="fixed" left="o" zIndex="-1"></Box>
        {/* MID */}
        <Box w="23.5vw" h="100vh" position="fixed" top="0" left="0">
            <svg width="100vw" height="100vh">
                <Box as="circle" cx="50vw" cy="25vh" r="25vh" fill="mycolors.4" />
                <Box as="circle" cx="50vw" cy="75vh" r="25vh" fill="mycolors.5" />
            </svg>
        </Box>
        {/* Right half */}
        <Box w="50vw" h="100vh" backgroundColor="mycolors.5" position="fixed" left="50vw" zIndex="-1"></Box>
        {/*<Box>    
                <Heading size="4xl" color="mycolors.5">Alex Bates</Heading>
                <Heading size="3xl" color="mycolors.5">Web Dev</Heading>
            </Box>
            <Link 
                as={NextLink} 
                href="/about"
                borderColor="mycolors.5" 
                borderWidth="5px" 
                bgColor="mycolors.5" 
                borderRadius="2px" 
                color="mycolors.4"
                zIndex="1"
            >
                About Me
            </Link>
// Link to Examples
<Box>
<Link as={NextLink} to="/">
    <Box mr="3px" mb="3px"></Box>
</Link>
</Box>
// Link to Contact
<Box>
<Link as={NextLink} to="/">
    <Box mr="3px" mb="3px"></Box>
</Link>
</Box>*/}
</>
)

export default Home