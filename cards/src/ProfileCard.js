function ProfileCard({ title , handle, image, desc }){  //option 3
    // console.log(title, handle, image );
    // Options 1 
    // const title = props.title;
    // const handle = props.handle;

    // Option 2
    // const { title, handle } = props;

    return(
        <div>
            <div className = "card">
                <div class="card-image">
                    <figure class="image is-4by3">
                        <img src={image} alt = "image"/>
                    </figure>
                </div>
                <div className='media-content'>
                    <div className = 'title is-4'>{title} </div>
                    <div className = 'title is-6'>{handle} </div>
                </div>
                <div className = 'content'>
                    {desc}
                </div>
            </div>
            
        </div>

    );
}

export default ProfileCard;

