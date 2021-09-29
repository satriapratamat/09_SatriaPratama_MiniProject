import { useState, useEffect } from "react";
import useVendorName from './GetDataQueryVendor'
import LoadingSvg from '../LoadingSvg'
import Vendor from './Vendor'

function Row3() {
    const { vendor, loading, error, subscribeVendorName } = useVendorName();

    useEffect ( () => {
        subscribeVendorName();
    });

    const [name, setName] = useState("");

    if (loading) {
        return <LoadingSvg/>
    }

    if (error) {
        console.log(error);
        return null;
    }

    return(
        <div className="experience-brand">
            <h1 className="today_title">Brand News Today</h1>
            <div className= "vendor-button">
                <div className="trend-gadget">
                    {vendor.map((v) => (
                        <Vendor
                            key={v.id}
                            id={v.id}
                            name={v.name}
                            />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Row3;