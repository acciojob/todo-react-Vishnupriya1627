import './List.css'

const List = ({ list, onDelete }) => {
  return (
    <>
      <div id="list_container">
        {list.map((item, index) => (
          <div key={index} id="list_item">
            <ul>
                <li>{item}</li>
            </ul>
            <button onClick={() => onDelete(index)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default List;
