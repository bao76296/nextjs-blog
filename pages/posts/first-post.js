import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/layout';

export default function FirstPost() {
    return <>
    <Layout>
        <Head>
            <title>First Post1</title>
            

            {/* <script src="https://connect.facebook.net/en_US/sdk.js" /> */}
        </Head>
        {/* <Script 
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={()=>{
                    alert(1)
                    console.log('script loaded sorrectly')
                }}
            /> */}
        <h1>First Post</h1>
        <h2>
            <Link href="/">back to home</Link>
        </h2>
        </Layout>
    </>
}