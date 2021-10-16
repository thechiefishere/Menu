const Meal = ({ meal }) => {
  return (
    <article>
      <img className="image" src={meal.img} alt={meal.title} />
      <div className="details">
        <div className="price">
          <h3 className="list">{meal.title}</h3>
          <p className="list">${meal.price}</p>
        </div>
        <div className="desc">
          <hr />
          <p>{meal.desc}</p>
        </div>
      </div>
    </article>
  );
};

export default Meal;
