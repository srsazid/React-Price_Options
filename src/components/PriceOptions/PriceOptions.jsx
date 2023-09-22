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
                "Fitness assessment "
            ],
            "price": "$30"
        },
        {
            "id": "standard",
            "name": "Standard Membership",
            "features": [
                "All Basic Membership features",
                "Access to group fitness classes",
                "Personal trainer consultation ",
                "Sauna and steam room access",
                "Discounts on gym merchandise"
            ],
            "price": "$50"
        },
        {
            "id": "premium",
            "name": "Premium Membership",
            "features": [
                "All Standard Membership features",
                "Unlimited personal trainer sessions",
                "Access to swimming pool",
                "Towel service",
                "Nutrition consultation "
            ],
            "price": "$80"
        }
    ]




    return (
        <div className="m-12">
            <h2 className="text-5xl text-center font-semibold mb-7">Best Prices in the town</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {
                    PriceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;