import { useState } from "react";
import Categories from "./Categories";
import Meal from "./Meal";

const Menu = ({ meals }) => {
  const [mealsToShow, setMealsToShow] = useState(meals);

  const categ = meals.map((meal) => meal.category);
  const categories = categ.filter(
    (category, index, self) => self.indexOf(category) === index
  );

  function show(category) {
    if (category == "all") {
      setMealsToShow(meals);
    } else {
      const toShow = meals.filter((meal) => {
        return meal.category == category;
      });
      setMealsToShow(toShow);
    }
  }

  return (
    <section>
      <Categories categories={["all", ...categories]} show={show} />
      {mealsToShow.map((meal) => (
        <Meal meal={meal} />
      ))}
    </section>
  );
};

export default Menu;
