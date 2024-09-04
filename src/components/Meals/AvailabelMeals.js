import Card from '../UI/Card';
import MealItem from './MealItem';
import classes from './AvailableMeals.module.css';
import {useEffect,useState} from 'react'

const AvailableMeals = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [meals, setMeals] = useState([])
  let DUMMY_MEALS = [
    {
      id: 1,
      name: "Meat Lover",
      description: "Smoaked Beef - Parmesan",
      price:8
    },
    {
      id: 2,
      name: "Frut Lover",
      description: "Tomato - Calamari - Mashroom",
      price:8
    },
    {
      id: 3,
      name: "Veggie Lover",
      description: "Olives - Bresaola - Parmesan",
      price:8
    },
    
  ]
  const getMeals = async () =>{
 
  } 

  useEffect(() => {
    getMeals()
    console.log(DUMMY_MEALS)
  },[])
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
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