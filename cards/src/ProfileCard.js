function ProfileCard({ title , handle }){  //option 3

    // Options 1 
    // const title = props.title;
    // const handle = props.handle;

    // Option 2
    // const { title, handle } = props;

    return(
        <div>
            <div>Title is {title}</div>
            <div>Handle is {handle}</div>
        </div>

    );
}

export default ProfileCard;

