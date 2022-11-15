import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Meta from '../public/Meta.svg';

export default function Success() {
    const router = useRouter();

    return (
        <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-screen flex items-center justify-center">
            <div className="bg-white/75 shadow-2xl rounded-lg lg:w-1/2 font-avenirBook text-gray-800 p-16">
                <Link href="/">
                    <div className="flex items-center justify-between h-14 w-14 rounded-lg">
                        <Image className="h-full" src={Meta} alt="Meta Logo" />
                        <div className="flex flex-col px-2 pt-2">
                            <span className="text-5xl font-avenirRoman">Meta</span>
                        </div>
                    </div>
                </Link>
                <h1 className="text-3xl mt-7 pb-2 font-avenirRoman">
                    Thanks for signing up &#123; {router.query.name} &#125;
                </h1>
                <p className="text-lg text-gray-600 mt-3">
                    We have sent you an email at &#123; {router.query.email} &#125;. We will be in touch with relevant information about the metaverse.
                </p>
            </div>
        </motion.main>
    )
}