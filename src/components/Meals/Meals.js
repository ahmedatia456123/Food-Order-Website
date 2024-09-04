import MealsSummary from './MealsSummary'
import AvailabelMeals from './AvailabelMeals'
import { Fragment } from 'react'

const Meals = () => {
    return (
        <Fragment>
            <MealsSummary />
            <AvailabelMeals />
        </Fragment>
    )
}

export default Meals