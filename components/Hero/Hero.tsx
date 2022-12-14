import {
    Box,
    Flex,
    Image,
    SimpleGrid,
    Text,
    useColorModeValue,
    VStack,
} from "@chakra-ui/react"
import React from "react"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import { Engine } from "tsparticles-engine"
import TextTransition, { presets } from "react-text-transition"
import { motion } from "framer-motion"

const options = {
    fullScreen: { enable: false, zIndex: -1 },

    fpsLimit: 60,
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                area: 800,
            },
        },
        color: {
            value: ["#F0FFFF", "#90CDF4", "#0000FF", "#3182CE", "#0096FF"],
        },
        opacity: {
            value: 0.5,
            random: true,
        },
        size: {
            value: 3,
            random: true,
        },
        move: {
            enable: true,
            speed: 6,
            random: false,
        },
    },

    background: {
        // image: "radial-gradient(#3182CE, ##1a202c)",
    },
    detectRetina: true,
}

const Hero = () => {
    const particlesInit = async (main: Engine) => {
        await loadFull(main)
    }
    const [index, setIndex] = React.useState(0)

    React.useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            3000
        )
        return () => clearTimeout(intervalId)
    }, [])

    const text = [
        "A Front-End Web Developer",
        "An iOS App Developer",
        "A Python Developer",
    ]
    const bg = useColorModeValue(
        "linear-gradient(to bottom, #3182CE, #F7FAFC)",
        "linear-gradient(to bottom, #3182CE, #1a202c)"
    )

    const text1 = "Hi, I'm"
    const name = "Geeth"
    const text2 =
        " Freshman at The University of Texas at Dallas, experience in modern programming languages like Swift, JavaScript &  Python"
    return (
        <>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="800px"
                position="sticky"
                zIndex="1"
                overflow="hidden"
                _before={{
                    content: "''",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: bg,
                    zIndex: -1,
                }}
                id="home"
            >
                <Particles
                    init={particlesInit}
                    options={options}
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        width: "100%",
                        height: "100%",
                    }}
                />
                <Flex justifyContent="center" alignItems="center">
                    <Box
                        //overlay the box on the top of the particles
                        position="absolute"
                        zIndex="3"
                        display="flex"
                        // flexDirection="row"
                        alignItems="center"
                        justifyContent="center"
                        width="100%"
                    >
                        {" "}
                        <SimpleGrid
                            columns={{ base: 1, md: 2 }}
                            //reverse the order of the grid
                            flexDirection={{
                                base: "column-reverse",
                                md: "row",
                            }}
                            spacing={0}
                            width="100%"
                            maxWidth="7xl"
                        >
                            <Flex
                                justifyContent="center"
                                alignItems="center"
                                overflow="hidden"
                            >
                                <Image
                                    as={motion.img}
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.8 }}
                                    transition="linear 0.5s"
                                    src="/CircleGGUTD.png"
                                    alt="Geeth"
                                    height={{ base: "250px", md: "550px" }}
                                    width={{ base: "100%", md: "100%" }}
                                    objectFit="contain"
                                    objectPosition={[
                                        "center",
                                        "center",
                                        "right",
                                    ]}
                                    align={["center", "center", "right"]}
                                    display={["block", "block", "block"]}
                                    overflow="hidden"
                                />
                            </Flex>

                            <Flex
                                justifyContent="center"
                                alignItems="center"
                                padding={10}
                            >
                                <VStack
                                    align={{ base: "center", md: "flex-start" }}
                                    spacing={0}
                                    justifyContent="center"
                                >
                                    <Text
                                        fontSize={["2xl", "3xl", "4xl"]}
                                        fontWeight="bold"
                                        color="#ffffffce"
                                    >
                                        {text1.split("").map((char, index) => {
                                            return (
                                                <motion.span
                                                    key={index}
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{
                                                        delay: index * 0.03,
                                                    }}
                                                >
                                                    {char}
                                                </motion.span>
                                            )
                                        })}
                                    </Text>
                                    <Text
                                        fontSize={["6xl", "7xl", "8xl"]}
                                        fontWeight="bold"
                                        color="white"
                                    >
                                        {name.split("").map((char, index) => {
                                            return (
                                                <motion.span
                                                    key={index}
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{
                                                        delay: index * 0.05,
                                                    }}
                                                >
                                                    {char}
                                                </motion.span>
                                            )
                                        })}
                                    </Text>
                                    {/* //@ts-ignore */}

                                    <TextTransition
                                        springConfig={presets.wobbly}
                                    >
                                        <Text
                                            fontSize={["xl", "2xl"]}
                                            fontWeight="bold"
                                            color="white"
                                        >
                                            {" "}
                                            {text[index % text.length]}
                                        </Text>
                                    </TextTransition>
                                    <Text
                                        fontSize={["lg", "xl"]}
                                        color="white"
                                        textAlign={["center", "center", "left"]}
                                        mt={-10}
                                    >
                                        {text2.split("").map((char, index) => {
                                            return (
                                                <motion.span
                                                    key={index}
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{
                                                        delay: index * 0.01,
                                                    }}
                                                >
                                                    {char}
                                                </motion.span>
                                            )
                                        })}
                                    </Text>
                                </VStack>
                            </Flex>
                        </SimpleGrid>
                    </Box>
                </Flex>
            </Box>
        </>
    )
}

export default Hero
