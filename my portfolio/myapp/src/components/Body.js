import Bodyimg from '../assets/R 1.png';
import { FaSquareXTwitter, FaSquareGithub,FaLinkedin } from "react-icons/fa6";

export default function Body(){
    return <section id='body'>
        <div className="flex px-5 py-44 bg-body justify-center">
        <div className="md:w-1/2 flex flex-col">
        <h1 className=' text-4xl font-body-font'><span className='bg-text'>Hi,</span><br/>Iam Ajay Narayanan <p className='text-2xl'>iam a full-stack developer</p></h1>
        <div className='flex py-5'>
            <a href='#'className='pr-4 hover:text-white'>< FaSquareXTwitter size={40}/></a>
            <a href='#'className='pr-4 hover:text-white'>< FaSquareGithub size={40}/></a>
            <a href='#'className='hover:text-white'>< FaLinkedin size={40}/></a>
        </div>
         </div>
        <img className='md:w-1/3' src={Bodyimg}/>
        </div>
    </section>
}