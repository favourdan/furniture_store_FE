
import BestSellingCard from './Best-selling-card';


const BestSelling = () =>{
    return(
        <div className="">
            <h6 className='text-center overflow-hidden before:h-[1px] after:h-[1px] after:bg-[#959494]
           after:inline-block after:relative after:align-middle after:w-1/4 
           before:bg-[#959494] before:inline-block before:relative before:align-middle 
           before:w-1/4 before:right-2 after:left-2 text-xl p-4 mt-[4rem]'> BEST SELLING </h6>
            <div className="mt-8 flex justify-center flex-wrap gap-5">
                <BestSellingCard pName="TABLE WOOD" price="$120.00" source="../images/table_wood.png" alt="#" />
                <BestSellingCard pName="LOUNGE SOFA" price="$139.00" source='../images/lounge_sofa.png' alt="#" />
                <BestSellingCard pName="DECO LAMP" price="$125.00" source='../images/deco_lamp.png' alt="#" />
                <BestSellingCard pName="END TABLE" price="$150.00" source='../images/end_table.png' alt="#" />
            </div> 
        </div>

    );
}

export default BestSelling;


