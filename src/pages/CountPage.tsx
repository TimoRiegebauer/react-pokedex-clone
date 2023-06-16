import { useSelector, useDispatch } from "react-redux";
import { increment } from "../redux/slices/countSlice";
import MyButton from "../components/MyButton";

const CountPage = () => {
  const count = useSelector((state: any) => state.count.value);
  const dispatch = useDispatch();

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-b from-gray-900 to-gray-600">
      <MyButton label={`Count: ${count}`} onclick={() => dispatch(increment())} />
    </div>
  );
}

export default CountPage;