const Categories = ({ categories, show }) => {
  return (
    <ul className="categories">
      {categories.map((category) => {
        return (
          <li className="list" onClick={() => show(category)}>
            {category}
          </li>
        );
      })}
    </ul>
  );
};

export default Categories;
