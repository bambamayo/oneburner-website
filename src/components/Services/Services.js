export default function Services({ imgSrc, order, textMain, textSub, bgImg }) {
  return (
    <div className="py-10 d-flex-jus width90">
      <div className="text-cont" style={{ order: order }}>
        <h3 className="text-main">{textMain}</h3>
        <p className="text-sub">{textSub}</p>
      </div>
      <div
        className="img-cont-other"
        style={{ backgroundImage: `url(${bgImg})` }}
      ></div>
    </div>
  );
}
