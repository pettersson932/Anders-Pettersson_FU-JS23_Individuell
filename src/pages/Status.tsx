import MainNav from "../nav/MainNav";
import useResponse from "../globals/Resp";
import DroneNoOrder from "../assets/images/droneNoDeliver.png";
import DroneOrder from "../assets/images/droneDeliver.png";
import "./PageStyles.scss";

const Status = () => {
  const { resp } = useResponse();

  return (
    <div className="page__status">
      <MainNav />
      <p>Ordernummer: {resp && resp.ordernummer}</p>
      <img src={resp.orderInProgress ? DroneOrder : DroneNoOrder} alt="drone" />
      <p>Din beställning är på väg!</p>
      <p>{resp && resp.eta} minuter till leverans</p>
      <button>Ok, cool!</button>
      {resp.orderInProgress ? "true" : "false"}
    </div>
  );
};
export default Status;
