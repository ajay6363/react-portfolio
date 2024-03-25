import Bodyimg from '../assets/R 4.png';
import project1 from '../assets/p1.png'
import project2 from '../assets/p2.png'
import project3 from '../assets/p3.png'
export default function Projects() {
    return <section id='project' className="flex flex-col py-5 px-5 justify-center bg-project">
        <div className="flex justify-center w-1/2" >
          <h1 className='border-b-4 border-[#8f9bf6] text-4xl font-body-font'>Projects</h1>
        </div>
        <div className=" flex px-10 py-10 gap-5 ">
        <div className='relative'>
            <img className='h-[200px] pb-4 'src={project1}/>
            <div className='absolute left-0 right-0 bottom-[15px] top-0 bg-hover opacity-0 duration-500 hover:opacity-80'>
                <p className='text-center py-5'>Country Side Cafe is a cofee shop website built with Php and Mysql</p>
            </div>
        </div>
        <div className='relative'>
            <img className='h-[200px] pb-4' src={project2}/>
            <div className='absolute left-0 right-0 bottom-[15px] top-0 bg-hover opacity-0 duration-500 hover:opacity-80'>
                <p  className='text-center py-5'>AB supermarket is an Ecommerce website,Built with Laravel</p>
            </div>
        </div>
        <div className='relative'>
            <img className='h-[200px] pb-4' src={project3}/>
            <div  className='absolute left-0 right-0 bottom-[15px] top-0 bg-hover opacity-0 duration-500 hover:opacity-80'>
                <p className='text-center py-5'>The above shown is an adminpanel, Built with MYsql and Php</p>
            </div>
         </div>
        </div>
       
        <div className='flex flex-row justify-center'>
        <div>
        <img className='w-1/2 h-[350px] w-[400px]' src={Bodyimg}/>
        </div>
        <div className='w-1/4 font-about-font '>
           <p className='text-3xl pb-2 font-about-font'>These are some of my best projects.I have built these with Php, Laravel, Mysql, bootstrap, Jquery, javascript, React etc..</p>
          
           
           </div>
        </div>
    </section>
}