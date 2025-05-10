import Image from 'next/image'

interface CategoriesProps {
    dataCategory: string
    setCategory: (category: string) => void
}

const Categories: React.FC<CategoriesProps> = ({
    dataCategory,
    setCategory
}) => {
    return (
        <>
            <div className="pt-3 cursor-pointer pb-6 flex item-center space-x-12">
                <div 
                    onClick={() => setCategory('beach')}
                    className={`pb-4 flex flex-col items-center space-x-1 border-b-2 ${dataCategory == 'beach' ? 'border-gray-800' : 'border-white'} opacity-60 hover:border-gray-400 hover:opacity-100`}
                >
                    <Image
                        src='/icn_category_beach.jpg'
                        alt='Category - Beach'
                        width={20}
                        height={20}
                    />
    
                    <span className="text-xs pt-2">Beach</span>
                </div>
    
                <div 
                    onClick={() => setCategory('villas')}
                    className={`pb-4 flex flex-col items-center space-x-1 border-b-2 ${dataCategory == 'villas' ? 'border-gray-800' : 'border-white'} opacity-60 hover:border-gray-400 hover:opacity-100`}
                >
                    <Image
                        src='/icn_category_villas.jpg'
                        alt="Category - Villas"
                        width={20}
                        height={20}
                    />
    
                    <span className="text-xs pt-2">Villas</span>
                </div>
    
                <div 
                    onClick={() => setCategory('cabins')}
                    className={`pb-4 flex flex-col items-center space-x-1 border-b-2 ${dataCategory == 'cabins' ? 'border-gray-800' : 'border-white'} opacity-60 hover:border-gray-400 hover:opacity-100`}
                >
                    <Image
                        src='/icn_category_cabins.jpg'
                        alt="Category - Cabins"
                        width={20}
                        height={20}
                    />
    
                    <span className="text-xs pt-2">Cabins</span>
                </div>
    
                <div 
                    onClick={() => setCategory('tiny_homes')}
                    className={`pb-4 flex flex-col items-center space-x-1 border-b-2 ${dataCategory == 'tiny_homes' ? 'border-gray-800' : 'border-white'} opacity-60 hover:border-gray-400 hover:opacity-100`}
                >
                    <Image
                        src='/icn_category_tinyhomes.jpg'
                        alt="Category - Tiny homes"
                        width={20}
                        height={20}
                    />
    
                    <span className="text-xs pt-2">Tiny homes</span>
                </div>
            </div>
        </>
    )
}

export default Categories
