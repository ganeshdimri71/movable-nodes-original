import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    linePoints: {
        x1: 300,
        y1: 250,
        x2: 1000,
        y2: 250
    },

    ratio: 0.5
}

const movableNodesSlice = createSlice({
    name: 'movableNodes',
    initialState,
    reducers: {
        setXYCordinatesOfNodeAInPositiveDirection: (state, action) => {
            state.linePoints.x1 = state.linePoints.x1 + action.payload
            state.linePoints.y1 = state.linePoints.y1 + action.payload
        },
        setXYCordinatesOfNodeAInNegativeDirection: (state, action) => {
            state.linePoints.x1 = state.linePoints.x1 - action.payload
            state.linePoints.y1 = state.linePoints.y1 - action.payload
        },
        setXYCordinatesOfNodeBInPositiveDirection: (state, action) => {
            state.linePoints.x2 = state.linePoints.x2 + action.payload
            state.linePoints.y2 = state.linePoints.y2 + action.payload
        },
        setXYCordinatesOfNodeBInNegativeDirection: (state, action) => {
            state.linePoints.x2 = state.linePoints.x2 - action.payload
            state.linePoints.y2 = state.linePoints.y2 - action.payload
        },
        decreaseRatio: (state, action) => {
            const xPointOfMovableNode = (state.ratio * state.linePoints.x2 + state.linePoints.x1) / (1 + state.ratio)
            if (xPointOfMovableNode > state.linePoints.x1 && xPointOfMovableNode < state.linePoints.x2) {
                state.ratio = ((xPointOfMovableNode - action.payload) - state.linePoints.x1) / (state.linePoints.x2 - (xPointOfMovableNode - action.payload))

            } else {
                state.ratio = 0.5
            }
        },
        increaseRatio: (state, action) => {
            const xPointOfMovableNode = (state.ratio * state.linePoints.x2 + state.linePoints.x1) / (1 + state.ratio)
            if (xPointOfMovableNode > state.linePoints.x1 && xPointOfMovableNode < state.linePoints.x2) {
                state.ratio = ((xPointOfMovableNode + action.payload) - state.linePoints.x1) / (state.linePoints.x2 - (xPointOfMovableNode + action.payload))
            } else {
                state.ratio = 0.5
            }
        },
    }
});

export const { setXYCordinatesOfNodeAInPositiveDirection, setXYCordinatesOfNodeAInNegativeDirection, setXYCordinatesOfNodeBInNegativeDirection, setXYCordinatesOfNodeBInPositiveDirection, decreaseRatio, increaseRatio } = movableNodesSlice.actions
export const getLinePoints = state => state.movableNodesSlice.linePoints
export const getMovableNodeRatio = state => state.movableNodesSlice.ratio

export default movableNodesSlice.reducer