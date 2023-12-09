
export const photoUrls = [
    'https://pro-photos-stored.s3.eu-north-1.amazonaws.com/rain_swimmer.jpg',
    'https://pro-photos-stored.s3.eu-north-1.amazonaws.com/lazy_summer_daze.jpg',
    'https://pro-photos-stored.s3.eu-north-1.amazonaws.com/red_arrows_fan.jpg',
    'https://pro-photos-stored.s3.eu-north-1.amazonaws.com/the_watchkeeper.jpg',
    'https://pro-photos-stored.s3.eu-north-1.amazonaws.com/walkers_on_a_misty_beach.jpg'
];

function Photo() {
    return (
        <div style={{"width":"200px", "height":"150px"}}>
            {photoUrls.map((url, index) => (
                <img key={index} src={url} alt={`Photo ${index+1}`} style={{"width":"200px", "height":"150px" }} />
            ))}
        </div>
    )
};

export default Photo;
