const devLinkedinLink = "https://www.linkedin.com/in/matias-ramos-computacion/";
const copyLinkedinLink = "https://www.linkedin.com/in/noelia-fernanda-7b3054263/";

const DevCredits = () => (
    <div id="devCredits">
        <span>
            <i>
                Developer:{" "}
                <a href={devLinkedinLink} target="_blank" rel="noopener noreferrer">
                    Matias Ramos
                </a>
            </i>
        </span>
        <span>
            <i>
                Copywriter:{" "}
                <a href={copyLinkedinLink} target="_blank" rel="noopener noreferrer">
                    Noelia Fernanda
                </a>
            </i>
        </span>
    </div>
)
export default DevCredits;