function CoinTossCounter({results, handleCoinTossClick, handleDeleteLast, counts}) { 
    const list = results.map((result, index) => (
        <li key={`toss-${index}`}>{result === "H" ? "Heads" : "Tails"}</li>
      ));

    return (
      <section>
        <div>
          <button onClick={() => handleCoinTossClick("H")}>Heads</button>
          <button onClick={() => handleCoinTossClick("T")}>Tails</button>
          <button onClick={handleDeleteLast}>Delete Last</button>
        </div>
        <ul>
            <li><strong>Heads:</strong> {counts["H"]}</li>
            <li><strong>Tails:</strong> {counts["T"]}</li>            
            {list}
        </ul>
      </section>
    );
  }

export default CoinTossCounter