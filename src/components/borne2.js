import unlock from '../images/unlock.png';

function Borne2 ( {activeBorne} ) {

    return (
        <div className={"borne2 " + (activeBorne === "II" ? "visible" : "hidden")}>
        </div>
    );
};

export default Borne2;