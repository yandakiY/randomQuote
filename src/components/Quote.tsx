import React from 'react'

interface Props{
    quote: string,
    author: string
}

const Quote: React.FC<Props> = (props) => {
  return (
    <div>
        {/* Quote part */}
        <div className='font-bold text-2xl'>
            <div className='uppercase'>
            <i
                style={{ fontSize: "45px" }}
                className="icon-quote-left"
            ></i>
                {/* <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512"><path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"/></svg> */}
                {props.quote}
            </div>
        </div>

        {/* Author of quote  */}
        <div className='flex justify-end mt-5 font-bold'>
            - {props.author}
        </div>

        {/* Button part - New Quote , Icon Twitter and Facebook */}
        <div className="mt-5 flex justify-between">
            <div className="flex gap-4 ml-4 text-4xl">
                <a><i className="icon-twitter"></i></a> |
                <a href=""><i className="icon-facebook"></i></a>
            </div>
            <button className='p-2 border rounded bg-sky-950 text-white font-bold'>Refresh</button>
        </div>
    </div>
  )
}

export default Quote