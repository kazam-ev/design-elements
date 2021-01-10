const Card = (props) => {
  return (
    <div>
      <div>
        <section id="facilities ">
          <div className="">
            <div className="cd">
              <div className="card-text-center">
                <img src={props.imgUrl} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{props.cardTitle}</h5>
                  <p className="card-text">{props.cardText}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Card;
