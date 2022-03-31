import React from "react";
import {
  useSelector,
  useDispatch,
  ReactReduxContext,
  Provider,
} from "react-redux";
import { Stage, Layer, Group, Line, Circle } from "react-konva";
import {
  setXYCordinatesOfNodeA,
  setXYCordinatesOfNodeB,
  setXYCordinatesOfNodeC,
  getMovableNodeRatio, getLinePoints, setRatio, getMovableNodeYRatio
} from "../src/features/movableNodesSlice";
import ButtonComponent from './components/ButtonComponent'

const App = () => {
  const linePoints = useSelector(getLinePoints);
  const dispatch = useDispatch()
  const ratioBetweenTwoLines = useSelector(getMovableNodeRatio);
  const ratioBetweenTwoLinesinYDirection = Math.abs( useSelector( getMovableNodeYRatio ) );
  console.log("ratioBetweenTwoLines", ratioBetweenTwoLines);
  const dragStartRed = (e) => {
    const { x, y } = e.target.getStage().getPointerPosition();
    dispatch(
      setXYCordinatesOfNodeA({
        xPos: x,
        yPos: y,
      })
    );
    // dispatch(setRatio())
  };
  const dragStartGreen = (e) => {
    const { x, y } = e.target.getStage().getPointerPosition();
    dispatch(
      setXYCordinatesOfNodeB({
        xPos: x,
        yPos: y,
      })
    );
    dispatch(setRatio())
  };
  const dragStartBlack = (e) => {
    const { x, y } = e.target.getStage().getPointerPosition();
    dispatch(
      setXYCordinatesOfNodeC({
        xPos: x,
        yPos: y,
      })
    );
  };


  return (
    <>
      <ReactReduxContext.Consumer>
        {({ store }) => (
          <Stage
            style={{ backgroundColor: "#f7e5e5" }}
            height={window.innerHeight}
            width={window.innerWidth}
          >
            <Provider store={store}>
              <Layer>
                <Group>
                  <Line
                    points={[
                      linePoints.x1,
                      linePoints.y1,
                      linePoints.x2,
                      linePoints.y2
                    ]}
                    stroke="#777777"
                    strokeWidth={2}
                  />
                  <Line
                    points={[
                      linePoints.x2,
                      linePoints.y2,
                      linePoints.x3,
                      linePoints.y3,
                    ]}
                    stroke="#777777"
                    strokeWidth={2}
                  />
                  <Circle
                    x={linePoints.x1}
                    y={linePoints.y1}
                    radius={10}
                    fill="red"
                    draggable
                    onDragStart={(e) => dragStartRed(e)}
                    onDragMove={(e) => dragStartRed(e)}
                    onDragEnd={(e) => dragStartRed(e)}
                  />
                  <Circle
                    x={ linePoints.x2 }
                    y={linePoints.y2}
                    radius={10}
                    fill="green"
                    draggable
                    onDragStart={(e) => dragStartGreen(e)}
                    onDragMove={(e) => dragStartGreen(e)}
                    onDragEnd={(e) => dragStartGreen(e)}
                  />
                  <Circle
                    x={linePoints.x3}
                    y={linePoints.y3}
                    radius={10}
                    fill="black"
                    draggable
                    onDragStart={(e) => dragStartBlack(e)}
                    onDragMove={(e) => dragStartBlack(e)}
                    onDragEnd={(e) => dragStartBlack(e)}
                  />
                  {/* Movable Node Circle */}
                </Group>
              </Layer>
            </Provider>
          </Stage>
        )}
      </ReactReduxContext.Consumer>
      <ButtonComponent />
    </>
  );
};

export default App;
