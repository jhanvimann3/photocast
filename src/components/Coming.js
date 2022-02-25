const Coming = ({name,due,comment}) => {
  return (
    <div className="coming">
      {name}<br/>
      due on {due}<br/>
      {comment}
    </div>
  )
}

export default Coming
