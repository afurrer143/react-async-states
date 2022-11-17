function coinTossHandleClick (value ,results, setResults, counts, setCounts) {
    setResults([...results, value]);
    setCounts({
      ...counts,
      [value]: counts[value] + 1,
    });
}

export default coinTossHandleClick