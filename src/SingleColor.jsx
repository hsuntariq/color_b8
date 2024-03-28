import React, { useEffect, useState } from 'react'
import { MdContentCopy } from "react-icons/md";
import { IoCheckmarkDone } from "react-icons/io5";
import toast from 'react-hot-toast';

const SingleColor = ({ rgb, hex, index }) => {
    // console.log(rgb)
    // rgb(34,54,65)
    const [copied, setCopied] = useState(false);

    setTimeout(() => {
        setCopied(false)
    }, 2000)

    return (
        <>
            <div className="col-md-3  mt-5">
                <div className="card my-2 p-5 position-relative " style={{
                    background: `rgb(${rgb})`,
                    color: `${index > 10 && 'white'}`
                }}>
                    {copied ? (
                        <IoCheckmarkDone size={20} cursor="pointer" className='position-absolute ' style={{ left: '10px', top: '10px' }} />
                    ) : (
                        <MdContentCopy onClick={() => {
                            navigator.clipboard.writeText(`#${hex}`)
                            toast.success('Copied to clipboard')
                            setCopied(true)
                        }} size={20} cursor="pointer" className='position-absolute ' style={{ left: '10px', top: '10px' }} />
                    )}

                    <h3>#{hex}</h3>
                </div>
            </div>
        </>
    )
}

export default SingleColor