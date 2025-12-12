import { useLoaderData } from 'react-router';

const UpdateDetails = () => {

    const loadedUser = useLoaderData()


    function handleOnSubmit (event)
    {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const Obj = {name,email}
        console.log(Obj);

        fetch(`http://localhost:5000/users/${loadedUser._id}`,{
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(Obj)
        })
        .then(res=> res.json())
        .then(data => {
            console.log(data);
        })
    }

    return (
        <div>
            <h3>Update Information</h3>
            <form onSubmit={handleOnSubmit} action="">
                <input type="text" name='name' defaultValue={loadedUser.name} />
                <br />
                <input type="email" defaultValue={loadedUser.email} name='email' />
                <br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default UpdateDetails;