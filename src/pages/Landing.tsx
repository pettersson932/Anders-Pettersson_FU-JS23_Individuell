import MainNav from "../nav/MainNav";
import PostOrder from "../hooks/PostOrder";
import useResponse from "../globals/Resp";
import Header from "../header/Header";

const Landing = () => {
  const { resp } = useResponse();
  return (
    <div>
      <MainNav />
      <Header />
      <h2>Landing</h2>
    </div>
  );
};
export default Landing;
