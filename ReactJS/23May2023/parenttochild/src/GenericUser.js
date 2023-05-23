function GenericUser(props) {
    console.log("props", props);
    return (
        <div>
            <h1>GenericUser</h1>
            {props.data.name}
            {props.data.address}
            {props.data.pincode}

        </div>
    )
}
export default GenericUser;

/*
         App  (gen_usr)

          Users


   Prev              Generic ()


*/