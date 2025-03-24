import Image from "next/image";

const Categories = () => {
    return (
        <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
            <div className="pb-4 flex flex-col items-center space-x-1 border-b-2 border-white opacity-60 hover:border-gray-400 hover:opacity-100"
        >
                <Image
                    src='/icn_category_beach.jpg'
                    alt='Category - Beach'
                    width={20}
                    height={20}
                />

                <span className="text-xs pt-2">Beach</span>
            </div>

            <div className="pb-4 flex flex-col items-center space-x-1 border-b-2 border-white opacity-60 hover:border-gray-400 hover:opacity-100"
            >
                <Image
                    src='/icn_category_villas.jpg'
                    alt="Category - Villas"
                    width={20}
                    height={20}
                />

                <span className="text-xs pt-2">Villas</span>
            </div>

            <div className="pb-4 flex flex-col items-center space-x-1 border-b-2 border-white opacity-60 hover:border-gray-400 hover:opacity-100"
            >
                <Image
                    src='/icn_category_cabins.jpg'
                    alt="Category - Cabins"
                    width={20}
                    height={20}
                />

                <span className="text-xs pt-2">Cabins</span>
            </div>

            <div className="pb-4 flex flex-col items-center space-x-1 border-b-2 border-white opacity-60 hover:border-gray-400 hover:opacity-100"
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
    )
}

export default Categories;