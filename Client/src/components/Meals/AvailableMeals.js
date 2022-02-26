import { useEffect, useState } from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMeals(data);
      });
  }, []);

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal._id}
      id={meal._id}
      name={meal.title}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
