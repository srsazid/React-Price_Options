import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({ option }) => {
    const { name, price, features } = option;
    return (
        <div className='text-center bg-pink-500 flex-col rounded-xl text-white py-6 p-3'>
            <h2 className=''>
                <span className="text-7xl font-extrabold text-gray-800">{price}</span>
                <span className="text-3xl">/mo</span>
            </h2>
            <h4 className='text-3xl my-4'>{name}</h4>
            <div className='pl-5 mb-5'>
                {
                    features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
                }
            </div>
            <button className='bg-violet-600 py-1  w-full rounded-lg font-bold hover:bg-violet-300'>Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;