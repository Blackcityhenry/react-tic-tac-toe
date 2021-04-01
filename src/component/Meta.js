function Meta({winner, turn, isDraw}){

  return (
    <div className="meta">
      { isDraw
        ? <h1>Draw</h1>
        : winner === ''
          ? <h2>{turn}'s Turn</h2>
          : <h1>{winner} is Winner</h1>
      }
    </div>
  )


}

export default Meta;
