export function Post(props) {
  return (
    <>
      <b>
        {props.author}
      </b>
      <p>
        {props.content}
      </p>
    </>
  )
}