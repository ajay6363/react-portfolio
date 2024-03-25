
import Aboutimg from '../assets/R 7.png';
import ResumePdf from '../assets/ajay Cv.pdf'; // Import the resume file

export default function Resume() {
    const handleDownload = () => {
        // Create a temporary anchor element
        const link = document.createElement('a');
        link.href = ResumePdf; // Use the imported resume file
        link.download = 'resume.pdf'; // Set the filename for the download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section id='resume'>
            <div className="flex px-5 py-44 bg-resume justify-center">
                <img className='md:w-1/2 h-[350px] w-[200px]' src={Aboutimg} alt="Resume" />
                <div className="md:w-1/2 flex justify-center">
                    <div className='flex flex-col '>
                        <h1 className=' text-4xl font-body-font border-b-4 border-[#eccb6a] mb-5'>RESUME</h1>
                        <div className='font-about-font'>
                            <p className='text-2xl pb-3 font-about-font'>
                                You can view my resume <a className="btn" href="#" onClick={handleDownload}>Download</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
