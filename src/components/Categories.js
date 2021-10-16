const Categories = ({ categories, show }) => {
  return (
    <ul>
      {categories.map((category) => {
        return <li onClick={() => show(category)}>{category}</li>;
      })}
    </ul>
  );
};

export default Categories;
