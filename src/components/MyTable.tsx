'use client';

import { useEffect, useState } from 'react';

import AddForm from './AddForm';
import Product from '@/types/Product';
import dynamic from 'next/dynamic';

const MyTableClient = dynamic(() => import('./MyTable'), { ssr: false });

interface Props {
    caption?: string,
}


function MyTable ({caption}: Props) {

    const [refresh, setRefresh] = useState(false);
    console.log("table component body...");
    
    let product: any[] = [];

    useEffect(() => {
        console.log("useEffect");
        
        let product = [
            { ID: 1, name: "product 1", price: 3000 },
            { ID: 2, name: "product 2", price: 1000 },
            { ID: 3, name: "product 3", price: 500 },
            { ID: 4, name: "product 4", price: 2000 },
        ];
    }, [refresh])

    const [myDataState, setMyDataState] = useState<Product[] | Array<any>>(product);

    const deleteHandler = (id: number) => {
        let result = myDataState.filter((item: Product) => {
            return item.ID !== id;
        });
        setMyDataState(result);
    }

    const refreshData = () => {
        setRefresh((prevState) => !prevState);
    }

    return (
        <>
            <button onClick={refreshData}>refresh Data</button>
            <AddForm setMyDataState={setMyDataState}/>
            <table className="w-full text-black bg-White text-center">
                {
                    // caption != null ? <caption style={{captionSide: "bottom"}}></caption>: ""
                    caption && <caption style={{captionSide: "bottom"}}></caption>
                }
                <tbody>
                    {
                        myDataState?.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td className="border">{item.ID}</td>
                                    <td className="border">{item.name}</td>
                                    <td className="border">{item.price}</td>
                                    <td className="border"><button onClick={() => {deleteHandler(item.ID)}}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )

}

export default MyTable;