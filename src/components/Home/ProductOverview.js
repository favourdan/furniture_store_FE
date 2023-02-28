import Card from "./Card";


const ProductOverview = () => {

    return(
        <div className='max-w-[90%] mt-[-30px] p-4 bg-white mx-auto'>
            <div className='flex flex-wrap gap-[2rem] justify-center'>
                <Card title="NEW ARRIVAL" pName="WOODEN" image="../images/wooden.png" />
                <Card title="DISCOUNT" pName="TABLE DISK" image="../images/table_Disk.png" />
                <Card title="SALE" pName="TABLE LIT" image="../images/table_lit.png" />
            </div>
        </div>
        
    );

}

export default ProductOverview;