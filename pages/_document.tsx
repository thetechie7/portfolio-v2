import { ColorModeScript } from "@chakra-ui/react"
import NextDocument, { Html, Head, Main, NextScript } from "next/document"
import { theme } from "../theme/theme"

export default class Document extends NextDocument {
    render() {
        return (
            <Html lang="en">
                <Head>
                    {" "}
                    <meta charSet="utf-8" />
                    <link rel="icon" href="/CircleGGUTD.png" />
                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap"
                        rel="stylesheet"
                    />
                    <link rel="apple-touch-icon" href="/CircleGGUTD.png" />
                    <meta property="og:title" content="Geeth Gunnampalli" />
                    <meta
                        name="image"
                        property="og:image"
                        content="/CircleGGUTD.png"
                    />
                    <meta name="author" content="Geeth Gunnampalli" />
                    <meta
                        property="og:description"
                        content="Geeth Gunnampalli, rising freshman at The University of
                                        Texas at Dallas, experience in modern
                                        programming languages like Swift,
                                        JavaScript & Python"
                    />
                    <meta property="og:url" content="https://geethg.com" />
                </Head>
                <body>
                    {/* 👇 Here's the script */}
                    <ColorModeScript
                        initialColorMode={theme.config.initialColorMode}
                    />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
