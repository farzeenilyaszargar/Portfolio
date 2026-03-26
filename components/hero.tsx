
import Image from "next/image";
import Link from "next/link";



export default function HeroSection()
{
    return(
        <div className="rounded flex flex-col sm:w-2/3 px-5 py-2 ">
            <div className='flex flex-row justify-between items-top'>
                <div>
                    <h1 className='font-normal text-2xl sm:text-3xl'>I&apos;m a</h1>
                    {/*<Image src='/soft-dev.gif' alt='gif' width={400} height={300}></Image>*/}
                    <h1 className='font-black text-4xl sm:text-5xl hover:border-text border-b-2 border-background transition-colors duration-50 mb-3'>Software Developer</h1>

                    <div className='flex flex-row items-center gap-2 text-base'>
                        <Image src='/icons/location-pin.png' alt='location-pin' width={15} height={15} className="hover:scale-110"></Image>
                        <p className="font-semibold">Delhi, India</p>
                    </div>
                     </div>
                <div className='flex flex-row justify-center items-center'>
                    <Link href="https://x.com/farzeenilya">
                        <Image src={'/icons/twitter.svg'} alt='linkedin' className='w-9 h-9 hover:scale-110 invert-[var(--my-invert)]' width={25} height={25} />
                    </Link>
                    <Link href="https://github.com/farzeenilyaszargar">
                        <Image src={'/icons/github.svg'} alt='github' className={`w-10 h-10  hover:scale-110  invert-[var(--my-invert)]`} width={25} height={25} />
                    </Link>
                    
                    <Link href="https://www.linkedin.com/in/farzeenilyaszargar/">
                        <Image src={'/icons/linkedin.svg'} alt='linkedin' className='w-10 h-10 hover:scale-110 invert-[var(--my-invert)]' width={25} height={25} />
                    </Link>
                </div>
                
            </div>


        </div>
    );
}
