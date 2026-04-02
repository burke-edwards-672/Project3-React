
export default function PanelItem({className, pic, label, onClick}) {
    return (
        <div className="col-sm-4" onClick={onClick}>
            <div className={className}>
                <img src={pic} />
                <h3 className="card-title my-3">{label}</h3>
            </div>
        </div>
    )
}