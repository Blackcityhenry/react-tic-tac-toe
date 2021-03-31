function Meta({winner, turn}){

  return (
    <div className="meta">
      {winner !== ''
      ? <h1>{winner} is Winner</h1>
      : <h2>{turn}'s Turn</h2>}
    </div>
  )


}

export default Meta;
