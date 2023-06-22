import hero from './assets/images/illustration-hero.svg'
import music from './assets/images/icon-music.svg'
const OrderSummary = () => {
    return (
        <div className={"bg-white w-[327px] font-Red-Hat-Display grid place-items-center rounded-3xl"}>
            <img className={"rounded-t-3xl"} src={hero} alt={""}/>
            <h1 className={"text-[22px] font-extrabold text-dark-blue pt-7 pb-4"}>Order Summary</h1>
            <div className={"mx-8 pb-6"}>
                <p className={"text-desaturated-blue text-center"}>You can now listen to millions of songs, audiobooks, and podcasts on any
                    device anywhere you like!</p>

            </div>



            <div className={"w-[280px] bg-very-pale-blue flex items-center justify-center mx-4 p-4 rounded-xl text-sm mb-6"}>
                <img className={""} src={music} alt={""}/>
                <div className={"ml-5"}>
                    <span className={"font-bold text-dark-blue"}>Annual Plan</span>
                    <span className={"block text-desaturated-blue"}>$59.99/year</span>
                </div>




                <button className={"font-bold text-custom-purple underline text-[13px] ml-auto"}>
                    Change
                </button>

            </div>


            <button className={"w-[280px] h-[50px] text-white bg-bright-blue font-semibold rounded-xl mb-4 text-[15px] "}>
                <span>Proceed to Payment</span>
            </button>

            <button className={"w-[280px] h-[50px] font-bold text-desaturated-blue text-[15px] mb-4"}>
                <span>Cancel Order</span>
            </button>

        </div>
    );
};

export default OrderSummary;