import React from 'react'
import { getLinePoints, getMovableNodeRatio } from './features/movableNodesSlice'
import { useSelector, useDispatch, ReactReduxContext, Provider } from 'react-redux'
import { Stage, Layer, Group, Line, Circle } from 'react-konva'
import ButtonComponent from './components/ButtonComponent'

const App = () => {
  const linePoints = useSelector(getLinePoints)
  const ratioBetweenTwoLines = useSelector(getMovableNodeRatio)
  console.log('ratioBetweenTwoLines', ratioBetweenTwoLines);

  return (
    <>
      <ReactReduxContext.Consumer>
        {({ store }) => (
          <Stage
            style={{ backgroundColor: '#f7e5e5' }}
            height={window.innerHeight}
            width={window.innerWidth}
          >
            <Provider store={store}>
              <Layer>
                <Group>
                  <Line
                    points={[linePoints.x1, linePoints.y1, linePoints.x2, linePoints.y2]}
                    stroke="#777777"
                    strokeWidth={2}
                  />
                  {/* End Points Circle */}
                  <Circle
                    x={linePoints.x1}
                    y={linePoints.y1}
                    radius={10}
                    fill="red"
                  />
                  <Circle
                    x={linePoints.x2}
                    y={linePoints.y2}
                    radius={10}
                    fill="black"
                  />
                  {/* Movable Node Circle */}
                  <Circle

                    x={(ratioBetweenTwoLines * linePoints.x2 + linePoints.x1) / (1 + ratioBetweenTwoLines)}
                    y={(ratioBetweenTwoLines * linePoints.y2 + linePoints.y1) / (1 + ratioBetweenTwoLines)}
                    radius={10}
                    fill="green"
                  />
                </Group>
              </Layer>
            </Provider>

          </Stage>

        )}

      </ReactReduxContext.Consumer>
      <ButtonComponent />
    </>

  )
}

export default App