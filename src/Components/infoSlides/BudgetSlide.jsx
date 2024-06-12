import CurrencyInput from 'react-currency-input-field';

// eslint-disable-next-line react/prop-types
export function BudgetSlide({ budget, setBudget }) {
    const prevBudget = budget == 0 ? "whats your budget?" : `Budget: $${budget}`;
    return(
        <div className="budget">
            <CurrencyInput
                className="number-budget"
                placeholder={prevBudget}
                decimalsLimit={2}
                prefix='$'
                transformRawValue={(value) => { console.log(value); return value; }}
                onValueChange={(value) => {setBudget(value); console.log(value);}}
            ></CurrencyInput>
        </div>
    );
}

