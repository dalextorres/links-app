export default function Button(props) {
    return (
        <a href={props.link} className="link">
            <div className="button-wrapper" id={props.id}>
                <div>
                    <img src={props.icon} style={{height: 45}}/>
                </div>
                <p className="button-title">{props.description}</p>
            </div>
        </a>
    )
}