import africa from "../../assets/images/africa.svg";

export default function RegionalPresence() {
  return (
    <section className="region">
      <h3 className="region__header">Our Regional Presence</h3>
      <p className="region__subheader">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer{" "}
      </p>
      <img
        src={africa}
        alt="map showing regions oneburner is present"
        className="region__map"
      />
    </section>
  );
}
