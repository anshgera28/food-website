import { TiThSmallOutline } from "react-icons/ti";
import { MdFreeBreakfast } from "react-icons/md";
import { TbSoup } from "react-icons/tb";
import { CiBowlNoodles } from "react-icons/ci";
import { MdOutlineFoodBank } from "react-icons/md";
import { GiFullPizza } from "react-icons/gi";
import { PiHamburgerFill } from "react-icons/pi";

const Categories = [
    {
        id: 1,
        name: "All",
        icon: <TiThSmallOutline className="w-[50px] h-[50px] text-blue-500"/>
    },
    {
        id: 2,
        name: "breakfast",
        icon: <MdFreeBreakfast className="w-[50px] h-[50px] text-blue-500"/>
    },
    {
        id: 3,
        name: "soups",
        icon: <TbSoup className="w-[50px] h-[50px] text-blue-500"/>
    },
    {
        id: 4,
        name: "pasta",
        icon: <CiBowlNoodles className="w-[50px] h-[50px] text-blue-500"/>
    },
    {
        id: 5,
        name: "main_course",
        icon: <MdOutlineFoodBank className="w-[50px] h-[50px] text-blue-500"/>
    },
    {
        id: 6,
        name: "pizza",
        icon: <GiFullPizza className="w-[50px] h-[50px] text-blue-500"/>
    },
    {
        id: 7,
        name: "burger",
        icon: <PiHamburgerFill className="w-[50px] h-[50px] text-blue-500"/>
    },
];

export default Categories;
