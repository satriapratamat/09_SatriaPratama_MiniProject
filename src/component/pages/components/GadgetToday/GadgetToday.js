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
        <div className="container">
            <h1 className="today_title">Gadget News Trend Today</h1>
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
    )
}

export default Row3;