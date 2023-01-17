import classes from "./MeetupList.module.css";
import MeetupItem from "./MeetupItem";

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.items.map((item) => (
        <MeetupItem
          key={item.id}
          id={item.id}
          image={item.image}
          description={item.description}
          title={item.title}
          address={item.address}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
