import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

    const PriceOptions = [
        {
            "id": "basic",
            "name": "Basic Membership",
            "features": [
                "Access to gym facilities",
                "Cardio equipment usage",
                "Locker room access",
                "24/7 gym access",
                "Fitness assessment (1 session/month)"
            ],
            "price": "$30/month"
        },
        {
            "id": "standard",
            "name": "Standard Membership",
            "features": [
                "All Basic Membership features",
                "Access to group fitness classes",
                "Personal trainer consultation (1 session/month)",
                "Sauna and steam room access",
                "Discounts on gym merchandise"
            ],
            "price": "$50/month"
        },
        {
            "id": "premium",
            "name": "Premium Membership",
            "features": [
                "All Standard Membership features",
                "Unlimited personal trainer sessions",
                "Access to swimming pool",
                "Towel service",
                "Nutrition consultation (1 session/month)"
            ],
            "price": "$80/month"
        }
    ]




    return (
        <div>
            <h2 className="text-5xl">Best Prices in the town</h2>
            {
                PriceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
        </div>
    );
};

export default PriceOptions;