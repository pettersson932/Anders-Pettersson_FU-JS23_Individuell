import MainNav from "../nav/MainNav";
import PostOrder from "../hooks/PostOrder";
import useResponse from "../globals/Resp";

const Landing = () => {
  const { resp } = useResponse();
  return (
    <div>
      <MainNav />
      <h2>Landing</h2>
    </div>
  );
};
export default Landing;
