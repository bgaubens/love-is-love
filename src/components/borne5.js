import unlock from '../images/unlock.png';

function Borne5 ( {activeBorne} ) {

    return (
        <div className={"borne5 " + (activeBorne === "V" ? "visible" : "hidden")}>
        </div>
    );
};

export default Borne5;