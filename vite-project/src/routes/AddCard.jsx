import { addCard, getCardName } from "../redux/createCardSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

export const AddCard = () => {
    const dispatch = useDispatch();
    const cards = useSelector((state) => state.cardName);
    const fetchedName = useSelector((state) => state.card.fetchedName);

    // Define state variables for input fields
    const [selectedVendor, setSelectedVendor] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [cvv, setCvv] = useState("");
    const [validMonth, setValidMonth] = useState("");
    const [validYear, setValidYear] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    // Handle changes in the input fields
    const handleCardNumberChange = (event) => {
        const newCardNumber = event.target.value;
        setCardNumber(newCardNumber);
    };
    const handleCvvChange = (event) => {
        const newCvv = event.target.value;
        setCvv(newCvv);
    };
    const handleValidMonthChange = (event) => {
        const newValidMonth = event.target.value;
        setValidMonth(newValidMonth);
    };
    const handleValidYearChange = (event) => {
        const newValidYear = event.target.value;
        setValidYear(newValidYear);
    };

    return (
        <div className="add-card-wrapper">
            <h2>Add a new card</h2>
            <div className="card">
                <p className="new-card-vendor">{selectedVendor}</p>
                <p className="new-card-number" id="newCardNumber">{cardNumber}</p>
                <p className="new-card-cardholder-name">{`${fetchedName.firstName.toUpperCase()} ${fetchedName.lastName.toUpperCase()}`}</p>
                <p className="new-card-valid">{`${validMonth}/${validYear}`}</p>
                <p className="new-card-cvv">{cvv}</p>
            </div>
            <div className="wrapper-add-card"></div>

            <div className="wrapper-add-card">
                <label htmlFor="cardnumber">Card number: </label>
                <br />
                <input type="text" id="cardnumber" placeholder="XXXX XXXX XXXX XXXX" pattern="[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}" onChange={handleCardNumberChange} />
                <br />
                <label htmlFor="valid">Valid month: </label>
                <br />
                <input type="text" id="validMonth" placeholder="XX" pattern="[0-9]{2}" onChange={handleValidMonthChange} />
                <br />
                <label htmlFor="valid">Valid year: </label>
                <br />
                <input type="text" id="validYear" placeholder="XX" pattern="[0-9]{2}" onChange={handleValidYearChange} />
                <br />
                <label htmlFor="cvv">CVV: </label>
                <br />
                <input type="text" id="cvv" placeholder="XXX" pattern="[0-9]{3}" onChange={handleCvvChange} />
                <br />
                <label htmlFor="vendor">Vendor: </label>
                <select name="vendor" id="vendor">
                    <option value="">Vendor</option>
                    <option value="VISA">VISA</option>
                    <option value="mastercard">mastercard</option>
                    <option value="American Express">American Express</option>
                </select>
                <br />

                <button onClick={() => {
                    console.log("click");
                    if (cards.cards.length === 4) {
                        alert("You can not add more cards")
                    } else {

                        // Dispatch the action with the updated state variables
                        dispatch(addCard({
                            vendor: selectedVendor,
                            cardNumber,
                            firstName: fetchedName.firstName,
                            lastName: fetchedName.lastName,
                            cvv,
                            validMonth,
                            validYear
                        }));

                        // Reset the state variables
                        setSelectedVendor("");
                        setCardNumber("");
                        setFirstName(fetchedName.firstName);
                        setLastName(fetchedName.lastName);
                        setCvv("");
                        setValidMonth("");
                        setValidYear("");
                    }
                    console.log(cards.cards.length);
                }
                }
                >Add card</button>
            </div>
        </div>
    );
};

