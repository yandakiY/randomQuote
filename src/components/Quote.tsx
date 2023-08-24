import html2canvas from 'html2canvas';
import React , {useRef} from 'react'

interface Props{
    quote: string,
    author: string
}

const Quote: React.FC<Props> = (props) => {

    const quoteRef = useRef(null);

    const captureScreenshot = () => {
        if (quoteRef.current) {
          html2canvas(quoteRef.current).then((canvas) => {
            // `canvas` is the captured screenshot
            // You can do something with the canvas, like display it or save it as an image
            const screenshot = canvas.toDataURL("image/png");
            const downloadLink = document.createElement("a");
            downloadLink.href = screenshot;
            downloadLink.download = "screenshot.png";
            downloadLink.click();
          });
        }
      };

    const refresh = () =>{
        window.location.reload()
    }
  return (
    <>
        {!props.quote ? 
            <div className='text-3xl'>
                Loading...
                <p className='text-sm'>Refresh <a className='text-blue-500 underline' target='_blank' href="/">here</a> if a quote is not loaded</p>
            </div> :
            <div>
                {/* part to screen  */}
                <div ref={quoteRef} className='p-4'>
                    {/* Quote part */}
                    <div className='font-bold text-xl'>
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
                </div>
                {/* Button part - New Quote , Icon Twitter and Facebook */}
                <div className="mt-5 flex justify-between">
                    <div className="flex gap-4 ml-4 text-4xl">
                        <a className='cursor-pointer' title='Share on Twitter' href={`http://twitter.com/intent/tweet/?text="${props.quote} - By ${props.author}"`}><i className="icon-twitter"></i></a> |
                        <a className='cursor-pointer' title='Screenshot the quote' onClick={captureScreenshot}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg>
                        </a>
                    </div>
                    <button onClick={refresh} className='p-2 border rounded bg-sky-950 text-white font-bold'>Refresh</button>
                </div>
            </div>
        }
        {/* Quote we not see in html page */}
        
    </>
  )
}

export default Quote