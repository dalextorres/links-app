export default function Button(props) {
    return (
        <a href={props.link} className="link">
            <div className="button-wrapper" id={props.id}>
                <div>
                    <img src={props.icon} className="button-img" style={{height: 45}}/>
                </div>
            </div>
        </a>
    )
}