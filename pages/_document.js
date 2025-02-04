import Document, {Head, Html, Main, NextScript} from "next/document";

export default class Doc extends Document{
    render(){
        return(
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>

        )
    }
}