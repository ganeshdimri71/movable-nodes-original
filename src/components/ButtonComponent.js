import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getLinePoints, getMovableNodeRatio, setRatio } from '../features/movableNodesSlice'

const ButtonComponent = () => {
    const dispatch = useDispatch()
    const linePoints = useSelector(getLinePoints);
    const ratioBetweenTwoLines = useSelector(getMovableNodeRatio)
    return (
        <div
            style={{
                position: 'absolute',
                top: '0px'
            }}>
            <div className='d-flex flex-direction-row justify-content-between'>
                <Button className="ms-2 bg-danger"
                >x1: {linePoints.x1}</Button>
                <Button className="ms-2 bg-danger"
                >
                    y1: {linePoints.y1}</Button>
                <Button className="ms-2 bg-success"
                >
                    x2: {linePoints.x2}</Button>
                <Button className="ms-2 bg-success"
                >y2: {linePoints.y2}</Button>
                <Button className="ms-2 bg-dark"
                >
                    x3: {linePoints.x3}</Button>
                <Button className="ms-2 bg-dark"
                >y3: {linePoints.y3}</Button>
                <Button className="ms-2"
                >Ratio between Two lines is {ratioBetweenTwoLines}</Button>
            </div>
        </div>

    )
}

export default ButtonComponent