import unlock from '../images/unlock.png';

function Borne1 ( {activeBorne} ) {

    return (
        <div className={"borne1 " + (activeBorne === "I" ? "visible" : "hidden")}>
            <input type="number" pattern="[0-9]{4}" min="0000" max="9999" placeholder="####"></input>
            <button>ACCÉDER À LA BORNE I</button>
        </div>
    );
};

export default Borne1;