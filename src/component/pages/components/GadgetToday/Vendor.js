export default function Vendor({
    id,
    name,
}) {
    return(
        <div className="vendor-item" data-key={id}>
            {name}
        </div>
    )
}