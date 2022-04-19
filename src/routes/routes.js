import LiveRe from "../pages/LiveRe";
import MyLiveRe from "../pages/MyLiveRe";
import Error from "../pages/Error";

const routesOptions = [
  {path: 'livere', element: <LiveRe/>},
  {path: 'mylivere', element: <MyLiveRe/>},
  {path: '*', element: <Error/>}
]

export default routesOptions;