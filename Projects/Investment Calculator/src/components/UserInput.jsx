export default function UserInput({ onInput, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <div>
          <label htmlFor="">Initial Investment</label>
          <input
            type="number"
            min="0"
            required
            value={userInput.initialInvestment}
            onChange={(event) =>
              onInput("initialInvestment", event.target.value)
            }
          />
        </div>
        <div>
          <label htmlFor="">Annual Investment</label>
          <input
            type="number"
            min="0"
            required
            value={userInput.annualInvestment}
            onChange={(event) =>
              onInput("annualInvestment", event.target.value)
            }
          />
        </div>
      </div>
      <div className="input-group">
        <div>
          <label htmlFor="">Expected Return</label>
          <input
            type="number"
            min="-100"
            max="100"
            required
            value={userInput.expectedReturn}
            onChange={(event) => onInput("expectedReturn", event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Duration</label>
          <input
            type="number"
            min="0"
            required
            value={userInput.duration}
            onChange={(event) => onInput("duration", event.target.value)}
          />
        </div>
      </div>
    </section>
  );
}
