// deleltes the last row of coin toss table (and -1 from the object count)
function deleteLastRow(results, counts, setResults, setCounts) {
    const last = results[results.length - 1];
    const list = results.slice(0, -1);
  
    setResults(list);
    if (last) {
      setCounts({
        ...counts,
        [last]: counts[last] - 1,
      });
    }
}

export default deleteLastRow