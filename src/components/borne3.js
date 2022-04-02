import unlock from '../images/unlock.png';

function Borne3 ( {activeBorne} ) {

    return (
        <div className={"borne3 " + (activeBorne === "III" ? "visible" : "hidden")}>
        </div>
    );
};

export default Borne3;