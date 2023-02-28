
const BestSellingCard = (props) =>{
    return(
        <div className='mx-w-[800px] p-2 flex flex-col items-center'>
            <div className='bg-[#f5f5f5] mx-w-[400px]'>
                <img className="w-[200px] md:w-[250px] sm:w-[300px]" src={props.source} alt={props.alt} />
            </div>
            <div className='flex flex-col items-center'>
                <h5 className="mt-4 md:text-2xl sm:text-2xl text-1xl font-bold">{props.pName}</h5>
                <p className="mb-4 mt-3 text-1xl font-bold text-[brown]">{props.price}</p>
                <button className="" type='button'>ADD TO CART</button>
            </div>
        </div>
    );
}

export default BestSellingCard;