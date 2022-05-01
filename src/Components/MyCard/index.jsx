import './styles.scss';

function MyCard(props) {
  return <div className="my-card">{props.children}</div>;
}

export default MyCard;
