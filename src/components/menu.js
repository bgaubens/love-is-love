import placeholder from '../images/placeholder.png'
import arrow from '../images/arrow.png'

const numArray = ["I", "II", "III", "IV", "V"]

function Menu ( {handleClickedBorne, activeBorne} ) {

    return (
        <div className={"menu " + (activeBorne === "" ? "visible" : "hidden")}>
            <h2>Les énigmes</h2>    
            {numArray.map((num) => {
                return (
                    <div className="borne"
                    onClick={() => handleClickedBorne(num)}>
                        <div className="borne-title">
                            <img src={placeholder} className="placeholder" alt="image placeholder" />
                            <li>Borne {num}</li>
                        </div>
                        <button>&#8594;</button>
                    </div>
                );
            })}
        </div>
    );
};

export default Menu;