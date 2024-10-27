export default function Alert(props) {
    let camelCase = (str) => {
        return str.charAt(0).toUpperCase()+str.slice(1);
    }

  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <strong>{camelCase(props.alert.type)}!</strong> {props.alert.msg}
    </div>
  );
}
