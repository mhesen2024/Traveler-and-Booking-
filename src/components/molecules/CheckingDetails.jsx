    import Hotel from "../../asserts/PNG/Hotel.png";
    import Star from "..//../asserts/PNG/star.png";
    import halfStar from "../../asserts/PNG/half-star.png";

    export default function Checking() {
    return (
        <div className="max-w-sm max-h-[420px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <img className="rounded-t-lg" src={Hotel} alt="Hotel" /> {/* Use the imported image */}
        </a>
        <div className="p-5">
            <a href="#">
            <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
            Lakeside Motel Warefront
            </h5>
            <div className="rating flex"
            >
            <img src={Star} />
            <img src={Star} />
            <img src={Star} />
            <img src={Star} />
            <img src = {halfStar} />
            <p
            style={{
                marginLeft: "10px",
                fontWeight: "400",
                fontSize: "14px",
                color: "#4F4F4F",
            }}
            >4.5 (1200 Reviews)</p>
            </div>
            </a>
            <div className="cardTextContent my-6 text-sm ">
            <p className="text-sm leading-8  font-normal text-rose-600">
            Non refundable 
            </p>
            <p style={{
                lineHeight: "32px",
                color: "#4F4F4F",
            }}>Check in: Sunday, March 18, 2022</p>
            <p
            style={{
                lineHeight: "32px",
                color: "#4F4F4F",
            }}
            >Check out: Tuesday, March 20, 2022</p>
            <p
            style={{
                lineHeight: "32px",
                color: "#4F4F4F",
            }}
            >2 night stay</p>
            </div>
        </div>
        </div>
    );
    }

