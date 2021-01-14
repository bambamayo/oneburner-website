import paystack from "../../assets/images/Paystack.svg";
import egyptair from "../../assets/images/egyptair.svg";
import dngote from "../../assets/images/dngote.svg";
import stanbic from "../../assets/images/stanbic.svg";
import mtn from "../../assets/images/MTN.svg";
import skooleeo from "../../assets/images/skooleeo.svg";
import gtbank from "../../assets/images/gtbank.svg";

export default function Clients() {
  return (
    <section className="clients">
      <div className="clients__inner">
        <h3 className="clients__header">
          Over 500+ companies bond teams together with Oneburner
        </h3>
        <div className="clients__list">
          <img src={paystack} alt="paystack logo" className="clients__logo" />
          <img src={egyptair} alt="egyptair logo" className="clients__logo" />
          <img src={dngote} alt="dangote logo" className="clients__logo" />
          <img src={stanbic} alt="stanbic logo" className="clients__logo" />
          <img src={mtn} alt="mtn logo" className="clients__logo" />
          <img src={gtbank} alt="gtbank" className="clients__logo" />
          <img src={skooleeo} alt="skooleeologo" className="clients__logo" />
        </div>
      </div>
    </section>
  );
}
