import React, { useEffect, useState } from 'react'
import Values from 'values.js'
import toast from 'react-hot-toast';
import SingleColor from './SingleColor';

const Color = () => {
    const [color, setColor] = useState('')
    const [error, setError] = useState(false)
    const [list, setList] = useState([])
    const handleColor = (e) => {
        e.preventDefault()
        if (!color) {
            setError(true)
            toast.error('Please enter a value')
        } else {
            setError(false)
            try {
                setError(false)
                const clr = new Values(color).all(10)
                setList(clr)
            } catch (error) {
                setError(true);
                toast.error('Invalid color value')
            }



        }
    }




    return (
        <>
            <div className="container col-lg-5 mx-auto shadow p-4">
                <form>
                    <h1 className="display-4 text-center">
                        Color Generator
                    </h1>
                    <input style={{
                        border: `${error ? '2px solid red' : ''} `
                    }} type="text" placeholder='e.g Blue' className='form-control' value={color} onChange={(e) => setColor(e.target.value)} />
                    <button onClick={handleColor} className="btn btn-warning w-100 my-2">
                        Generate
                    </button>
                </form>
            </div>
            <div className="container">
                <div className="row">
                    {list.map((item, index) => {
                        return <SingleColor hex={item.hex} index={index} {...item} key={index} />
                    })}
                </div>
            </div>
        </>
    )
}

export default Color