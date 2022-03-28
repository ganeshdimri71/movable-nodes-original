import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { setXYCordinatesOfNodeAInNegativeDirection, setXYCordinatesOfNodeAInPositiveDirection, setXYCordinatesOfNodeBInNegativeDirection, setXYCordinatesOfNodeBInPositiveDirection, increaseRatio, decreaseRatio, getMovableNodeRatio } from '../features/movableNodesSlice'

const ButtonComponent = () => {
    const dispatch = useDispatch()
    const ratioBetweenTwoLines = useSelector(getMovableNodeRatio)
    return (
        <div
            style={{
                position: 'absolute',
                top: '0px'
            }}>
            <div className='d-flex flex-direction-row justify-content-between'>
                <Button className="ms-2 bg-danger"
                    onClick={() => dispatch(setXYCordinatesOfNodeAInPositiveDirection(20))}
                >+</Button>
                <Button className="ms-2 bg-danger"
                    onClick={() => dispatch(setXYCordinatesOfNodeAInNegativeDirection(20))}
                >-</Button>
                <Button className="ms-2 bg-success"
                    onClick={() => dispatch(decreaseRatio(20))}
                >
                    -</Button>
                <Button className="ms-2 bg-success"
                    onClick={() => dispatch(increaseRatio(20))}
                >
                    +</Button>
                <Button className="ms-2 bg-dark"
                    onClick={() => dispatch(setXYCordinatesOfNodeBInPositiveDirection(20))}
                >+</Button>
                <Button className="ms-2 bg-dark"
                    onClick={() => dispatch(setXYCordinatesOfNodeBInNegativeDirection(20))}
                >-</Button>


                <Button className="ms-2">Ratio between Two lines is {ratioBetweenTwoLines}</Button>
            </div>
        </div>

    )
}

export default ButtonComponent