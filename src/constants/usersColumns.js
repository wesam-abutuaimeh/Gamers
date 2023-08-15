const USERS_COLUMNS = (data, handleDelete) => [
  {
    key: "_id",
    title: "User Id",
  },
  {
    key: "name",
    title: "Name",
  },
  {
    key: "email",
    title: "Email",
  },
  {
    key: "actions",
    title: "Actions",
    render: (data) => (
      <div onClick={(e) => e.stopPropagation()}>
        <button
          style={{
            backgroundColor: "#c0392b",
            color: "white",
            padding: "10px",
            borderRadius: "4px",
            border: "none",
            cursor: "pointer",
            margin: "0 5px",
          }}
          onClick={() => handleDelete(data._id)}
        >
          Delete
        </button>
      </div>
    ),
  },
];

export default USERS_COLUMNS;
