import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    linePoints: {
        x1: 300,
        y1: 250,
        x2: 600,
        y2: 250,
        x3: 1000,
        y3: 250,
    },

    ratio: 0.75,
    // yRatio: 1
}

const movableNodesSlice = createSlice({
    name: 'movableNodes',
    initialState,
    reducers: {
        setXYCordinatesOfNodeA: (state, action) => {
            state.linePoints.x1 = action.payload.xPos
            state.linePoints.y1 = action.payload.yPos
            state.linePoints.x2 = ( state.ratio * state.linePoints.x3 + state.linePoints.x1 ) / ( 1 + state.ratio )
            state.linePoints.y2 = ( state.ratio * state.linePoints.y3 + state.linePoints.y1 ) / ( 1 + state.ratio )
            // state.linePoints.y2 = action.payload.yPos
        },
        setXYCordinatesOfNodeB: (state, action) => {
            state.linePoints.x2 = action.payload.xPos
            state.linePoints.y2 = action.payload.yPos
        },
        setXYCordinatesOfNodeC: (state, action) => {
            state.linePoints.x3 = action.payload.xPos
            state.linePoints.y3 = action.payload.yPos
            state.linePoints.x2 = ( state.ratio * state.linePoints.x3 + state.linePoints.x1 ) / ( 1 + state.ratio )
            state.linePoints.y2 = ( state.ratio * state.linePoints.y3 + state.linePoints.y1 ) / ( 1 + state.ratio )
            // state.linePoints.y2 = action.payload.yPos
        },
        setRatio: (state) => {
            state.ratio = ( state.linePoints.x2 - state.linePoints.x1 ) / ( state.linePoints.x3 - state.linePoints.x2 )
            // state.yRatio = Math.abs( ( state.linePoints.y2 - state.linePoints.y1 ) / ( state.linePoints.y3 - state.linePoints.y2 ) )

            // if ( state.linePoints.y2 > state.linePoints.y1 ) {
            //     state.linePoints.y2 = ( state.y3 * state.yRatio + state.y1 ) / ( 1 + state.yRatio )
            // }
            // else if ( state.linePoints.y1 > state.linePoints.y2 ) {
            //     state.linePoints.y2 = ( state.y1 - state.y3 * state.yRatio ) / ( 1 - state.yRatio )
            // }
            // else if ( state.linePoints.y2 > state.linePoints.y3 ) {
            //     state.linePoints.y2 = ( state.y1 + state.y3 * state.yRatio ) / ( state.yRatio - 1 )
            // }
            // state.linePoints.x2 = ( state.ratio * state.linePoints.x3 + state.linePoints.x1 ) / ( 1 + state.ratio )
            // state.linePoints.y2 = ( state.ratio * state.linePoints.y3 + state.linePoints.y1 ) / ( 1 + state.ratio )
        },
    }
});

export const { setXYCordinatesOfNodeA, setXYCordinatesOfNodeB, setXYCordinatesOfNodeC, setRatio } = movableNodesSlice.actions
export const getLinePoints = state => state.movableNodesSlice.linePoints
export const getMovableNodeRatio = state => state.movableNodesSlice.ratio
export const getMovableNodeYRatio = state => state.movableNodesSlice.yRatio

export default movableNodesSlice.reducer