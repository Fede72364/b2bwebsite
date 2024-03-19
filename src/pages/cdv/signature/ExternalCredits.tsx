const svgBackgroundsLink = "https://www.svgbackgrounds.com/set/free-svg-backgrounds-and-patterns/";
const flaticonLink = "https://www.flaticon.com/free-icons/approved";


const ExternalCredits = () => (
    <span className="d-flex justify-content-center" id="externalCredits">
        <i>
            Design resources:
            <ul>
                <li>
                    <a className="px-1" href={svgBackgroundsLink} target="_blank" rel="noopener noreferrer">
                        svgbackgrounds
                    </a>
                </li>
                <li>
                    <a href={flaticonLink} target="_blank" rel="noopener noreferrer">
                        flaticon
                    </a>
                </li>
            </ul>
        </i>
    </span>
)
export default ExternalCredits