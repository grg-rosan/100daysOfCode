

const Ui = ({ quote }) => {
  return (
    <div>
        {quote?quote.quote:"loading"}
    </div>
  )
}

export default Ui