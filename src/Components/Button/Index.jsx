import "./Style.scss";

export function ButtonFirstType(props) {
  return (
    <button className="ButtonFirstType" onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export function ButtonSecondType(props) {
  return (
    <button className="ButtonSecondType" onClick={props.onClick}>
      {props.children}
    </button>
  );
}
