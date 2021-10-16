const Meal = ({ meal }) => {
  return (
    <article>
      <img src={meal.img} alt={meal.title} />
      <div>
        <h3>{meal.title}</h3>
        <p>{meal.price}</p>
      </div>
      <p>{meal.desc}</p>
    </article>
  );
};

export default Meal;
