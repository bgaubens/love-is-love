import unlock from '../images/unlock.png';

function Borne4 ( {activeBorne} ) {

    return (
        <div className={"borne4 " + (activeBorne === "IV" ? "visible" : "hidden")}>
        </div>
    );
};

export default Borne4;