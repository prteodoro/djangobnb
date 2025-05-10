'use client'

import { useState } from "react";
import Image from "next/image";
import useSearchModal, {SearchQuery} from "./hooks/useSearchModal";

const Categories = () => {
    const searchModal = useSearchModal()
    const [category, setCategory] = useState('')

    const _setCategory = (_category: string) => {
        setCategory(_category)

        const query: SearchQuery = {
            country: searchModal.query.country,
            checkIn: searchModal.query.checkIn,
            checkOut: searchModal.query.checkOut,
            guests: searchModal.query.guests,
            bedrooms: searchModal.query.bedrooms,
            bathrooms: searchModal.query.bathrooms,
            category: _category
        }

        searchModal.setQuery(query)
    }

    return (
        <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
            <div
                onClick={() => _setCategory('')}
                className={`pb-4 flex flex-col items-center space-x-1 border-b-2 ${category == '' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-400 hover:opacity-100`}
            >
                <Image
                    src='/icn_category_beach.jpg'
                    alt='Category - All'
                    width={20}
                    height={20}
                />

                <span className="text-xs pt-2">All</span>
            </div>

            <div
                onClick={() => _setCategory('beach')}
                className={`pb-4 flex flex-col items-center space-x-1 border-b-2 ${category == 'beach' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-400 hover:opacity-100`}
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
                onClick={() => _setCategory('villas')}
                className={`pb-4 flex flex-col items-center space-x-1 border-b-2 ${category == 'villas' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-400 hover:opacity-100`}
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
                onClick={() => _setCategory('cabins')}
                className={`pb-4 flex flex-col items-center space-x-1 border-b-2 ${category == 'cabins' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-400 hover:opacity-100`}
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
                onClick={() => _setCategory('tiny_homes')}
                className={`pb-4 flex flex-col items-center space-x-1 border-b-2 ${category == 'tiny_homes' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-400 hover:opacity-100`}
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