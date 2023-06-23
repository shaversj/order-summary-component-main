import hero from './assets/images/illustration-hero.svg'
import music from './assets/images/icon-music.svg'

const OrderSummary = () => {
    return (
        <div
            className={"bg-white w-[327px] lg:w-[413px] font-Red-Hat-Display grid place-items-center rounded-3xl drop-shadow-2xl"}>
            <img className={"rounded-t-3xl"} src={hero} alt={""}/>
            <h1 className={"text-[22px] font-extrabold text-dark-blue pt-7 pb-4 lg:text-[26px] lg:pt-10"}>Order
                Summary</h1>
            <div className={"mx-8 pb-6 lg:pb-4"}>
                <p className={"text-desaturated-blue text-center lg:text-[15.8px]"}>You can now listen to millions of
                    songs, audiobooks, and podcasts on any
                    device anywhere you like!</p>
            </div>

            <div
                className={"w-[280px] lg:w-[325px] lg:text-[15.8px] bg-very-pale-blue flex items-center justify-center mx-4 p-4 lg:p-6 rounded-xl text-sm mb-6"}>
                <img className={"lg:w-[42px]"} src={music} alt={""}/>
                <div className={"ml-5"}>
                    <span className={"font-bold text-dark-blue lg:leading-relaxed"}>Annual Plan</span>
                    <span className={"block text-desaturated-blue"}>$59.99/year</span>
                </div>

                <button className={"font-bold text-custom-purple underline text-[13px] ml-auto hover:no-underline"}>
                    Change
                </button>
            </div>

            <button
                className={"w-[280px] h-[50px] lg:w-[325px] lg:h-[46px] lg:text-sm text-white bg-bright-blue font-semibold rounded-xl mb-4 text-[15px] hover:bg-custom-purple drop-shadow-2xl"}>
                <span>Proceed to Payment</span>
            </button>

            <button
                className={"w-[280px] h-[50px] lg:w-[325px] lg:h-[46px] lg:mb-7 lg:text-sm font-bold text-desaturated-blue text-[15px] mb-4 hover:text-dark-blue"}>
                <span>Cancel Order</span>
            </button>
        </div>
    );
};

export default OrderSummary;