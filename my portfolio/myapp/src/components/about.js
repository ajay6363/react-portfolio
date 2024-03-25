import Aboutimg from '../assets/R 2.png';
export default function About(){
    return<section id='about'>
        <div className="flex px-5 py-44 bg-about justify-center">
        <img className='md:w-1/2' src={Aboutimg}/>
        <div className="md:w-1/2 flex justify-center">
        <div className='flex flex-col '>
        <h1 className=' text-4xl font-body-font border-b-4 border-[#eccb6a] mb-5'>ABOUT ME</h1>
        <div className='font-about-font'>
           <p className='text-2xl pb-3 font-about-font'>Hi,my name is Ajaynarayanan,Iam a fullstack developer who built websites with PHP,Laravel,React etc...</p>
           <p className='text-2xl pb-3'>Iam proficient in HTML,CSS,javascript,jquery,bootstrap,PHP,Laravel,React and more.</p>
           <p className='text-2xl pb-3'>Iam a BCA graduate and finished an certification course in PHP/Laravel.</p>
           <p className='text-2xl pb-3'>Skilled in collabrating with multidisciplinary team to achieve common goals.</p>
           <p className='text-2xl pb-3'>Effective communicator with the ability to convey technical concepts to non-technical stakeholders.</p>
           </div>
        </div>
        </div>
           
    
        </div>
    </section>
}