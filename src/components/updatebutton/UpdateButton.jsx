import "./updateButton.css"

const UpdateButton = (props) => {
  return (
    <button className='updateButton'>
      {props.children}
    </button>
  )
}

export default UpdateButton