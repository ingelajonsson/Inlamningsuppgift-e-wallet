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
    const handleSelectedVendor = (event) => {
        const newSelectedVendor = event.target.value;
        setSelectedVendor(newSelectedVendor);
    };

    // const handleErrors = () => {
    //     if (cardNumber.length !== 16 || cvv.length !== 3) {
    //         setError("Card number must be 16 digits and CVV must be 3 digits.");
    //         return;
    //     }
    //     if (expirationMonth.length === "" || expirationYear.length === "") {
    //         setError("Please enter the validation");
    //         return;
    //     }
    //     if (cardUser.cards.length >= 4) {
    //         setError("You can't add more than 4 cards");
    //         return;
    //     }
    // }

    return (
        <div className="add-card-wrapper">
            <h2>Add a new card</h2>
            <div className="card">
                <p className="new-card-number" id="newCardNumber">{cardNumber}</p>
                <p className="new-card-cardholder-name">{`${fetchedName.firstName.toUpperCase()} ${fetchedName.lastName.toUpperCase()}`}</p>
                <div className="wrapper-valid-cvv-vendor">
                    <p className="new-card-valid">
                        {validMonth.length === 2 ? `${validMonth}/` : validMonth}
                        {validYear}
                    </p>
                    <p className="new-card-cvv">{cvv}</p>
                    <p className="new-card-vendor">{selectedVendor}</p>
                </div>
            </div>

            <div className="wrapper-add-card">
                <label htmlFor="cardnumber">Card number: </label>
                <br />
                <input type="text" id="cardnumber" placeholder="XXXX XXXX XXXX XXXX" pattern="[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}" maxLength={16} onChange={handleCardNumberChange} />
                <br />
                <label htmlFor="valid">Firstname: </label>
                <br />
                <input type="text" id="cardholderFirstName" placeholder={fetchedName.firstName.toUpperCase()} readOnly />
                <br />
                <label htmlFor="valid">Lastname: </label>
                <br />
                <input type="text" id="cardholderLastName" placeholder={fetchedName.lastName.toUpperCase()} readOnly />
                <br />
                <label htmlFor="valid">Valid month: </label>
                <br />
                <input type="text" id="validMonth" placeholder="XX" pattern="[0-9]{2}" maxLength={2} onChange={handleValidMonthChange} />
                <br />
                <label htmlFor="valid">Valid year: </label>
                <br />
                <input type="text" id="validYear" placeholder="XX" pattern="[0-9]{2}" maxLength={2} onChange={handleValidYearChange} />
                <br />
                <label htmlFor="cvv">CVV: </label>
                <br />
                <input type="text" id="cvv" placeholder="XXX" pattern="[0-9]{3}" maxLength={3} onChange={handleCvvChange} />
                <br />
                <label htmlFor="vendor">Vendor: </label>
                <br />
                <select name="vendor" id="vendor" onChange={handleSelectedVendor}>
                    <option value="" selected disabled >Vendor</option>
                    <option value="VISA">VISA</option>
                    <option value="mastercard">mastercard</option>
                    <option value="American Express">American Express</option>
                </select>
                <br />

                <button onClick={() => {
                    if (cards.cards.length === 4) {
                        alert("You can not add more cards")
                    } if (cardNumber.length !== 16) {
                        alert("Card number must contain 16 digits")
                    } if (validMonth.length !== 2) {
                        alert("Valid month must contain 2 digits")
                    } if (validYear.length !== 2) {
                        alert("Valid year must contain 2 digits")
                    } if (cvv.length !== 3) {
                        alert("CVV must contain 3 digits")
                    } if (vendor.value === "") {
                        alert("You must choose a vendor")
                    } else {

                        // Dispatch the action with the updated state variables
                        dispatch(addCard({
                            cardNumber,
                            firstName: fetchedName.firstName,
                            lastName: fetchedName.lastName,
                            vendor: selectedVendor,
                            cvv,
                            validMonth,
                            validYear,
                            activeCard: false
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
                    console.log(cards);
                }
                }
                    className="add-btn" >Add card</button>
            </div>
        </div>
    );
};

