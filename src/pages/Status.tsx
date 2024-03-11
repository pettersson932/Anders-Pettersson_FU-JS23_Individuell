import MainNav from "../nav/MainNav";
import useResponse from "../globals/Resp";

const Status = () => {
  const { resp } = useResponse();

  let DOM = "";
  if (resp) {
    DOM = (
      <div>
        <h2>{resp.ordernummer}</h2>
        <p>{resp.eta}</p>
      </div>
    );
  }
  return (
    <div>
      <MainNav />
      <h2>Status</h2>
      {DOM}
    </div>
  );
};
export default Status;
