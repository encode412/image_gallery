import "./style.css";
// import { AiOutlineArrowRight } from 'react-icons/ai';
const Career = () => {
  return (
    <div data-theme='light' className='rounded-[20px]'>
      <div
        className='min-h-[500px]'
        style={{ backgroundImage: "url(/images/img1.jpg)" }}
        data-theme='dark'
      >
        <div className='bg-opacity-60'></div>
        <div className='text-left pl-20 pt-20 max-w-[60rem] text-white'>
          <div>
            <h1 className='md:mb-2 mb-5 md:px-5 text-4xl md:text-8xl font-bold'></h1>
            <p className='mb-5 text-2xl md:text-6xl font-normal'>
              Engineering The Future Through Technology Innovation
            </p>
            <p className='text-xl md:text-3xl'>With NXG-HUB</p>
            <button className='hover:bg-[#2596BE] hover:text-white hover:border-none border py-4 px-8 border-[#ffffff] mt-6 transition'>
              <a href='#learn'>Learn more</a>
            </button>
          </div>
        </div>
        <p className='text-center py-4 text-white'>NXG-HUB | CAREERS</p>
      </div>

      <div className='text-center pt-12'>
        <h2 className='text-[#2596BE] text-4xl'>Careers</h2>
        <span className='text-[#717171] text-xl font-normal'>
          Job Opening At NXG-HUB Digital Technologies. Apply Now!
        </span>
      </div>
      <div className='md:mx-16 mx-auto bg-white p-8 md:p-20'>
        <div className='grid md:grid-cols-2 gap-6 md:gap-[20rem] '>
          <div className='flex flex-col '>
            <div className=''>
              <input
                className='py-2 md:py-4 px-6 rounded-[32px] focus:outline-0 w-full md:w-[120%] border border-[#A8D5E5]'
                type='text'
                placeholder='Name'
              />
            </div>
            <div>
              <input
                className='py-2 md:py-4 px-6 mt-3 rounded-[32px] focus:outline-0 w-full md:w-[120%]  border border-[#A8D5E5]'
                type='tel'
                placeholder='Contact Number'
              />
            </div>
            <div>
              <input
                className='py-2 md:py-4 px-6 mt-3 rounded-[32px] focus:outline-0 w-full md:w-[120%]  border border-[#A8D5E5]'
                type='email'
                placeholder='Email'
              />
            </div>

            <div className='mt-10'>
              <input
                className='py-2 md:py-4 px-6 rounded-[32px] focus:outline-0 w-full md:w-[120%]  border border-[#A8D5E5]'
                type='number'
                placeholder='Years of Experience'
              />
            </div>

            <div>
              <textarea
                className='py-2 md:py-4 px-6 mt-3 rounded-[32px] focus:outline-0 w-full md:w-[120%]  border border-[#A8D5E5]'
                type='text'
                placeholder='Other Details'
              />
            </div>
          </div>

          <div>
            <div className='flex flex-col'>
              <h2 className='text-2xl font-medium text-[#717171]'>
                Applying for which post
              </h2>
              <div className='p-2 flex'>
                <input
                  className='mr-4'
                  type='radio'
                  name='post'
                  id='product_designer'
                  value='product_designer'
                />
                Product Designer (UI/UX)
              </div>
              <div className='p-2 flex'>
                <input
                  className='mr-4'
                  type='radio'
                  name='post'
                  id='product_manager'
                  value='product_manager'
                />
                Project/Product Manager
              </div>
              <div className='p-2 flex'>
                <input
                  className='mr-4'
                  type='radio'
                  name='post'
                  id='software_developer'
                  value='software_developer'
                />
                Software Developer
              </div>
              <div className='p-2 flex'>
                <input
                  className='mr-4'
                  type='radio'
                  name='post'
                  id='digital_marketer'
                  value='digital_marketer'
                />
                Digital Marketer
              </div>
              <div className='p-2 flex'>
                <input
                  className='mr-4'
                  type='radio'
                  name='post'
                  id='it_instructor'
                  value='it_instructor'
                />
                IT Instructor
              </div>
            </div>
            <div className='flex flex-col mt-6'>
              <h2 className='text-2xl font-medium text-[#717171]'>
                Upload your resume
              </h2>
              <input className='p-4' type='file' name='' id='' />
            </div>
          </div>
        </div>
        <div className='text-right'>
          <button className='rounded-[20px] px-6 py-2 bg-[#2596BE] text-white'>
            <a href=''>Submit</a>
            <span className='bg-white rounded-full'>/</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Career;
