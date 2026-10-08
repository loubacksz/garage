import briefing from '/briefing.mp4';

function Briefing() {

    return(
        <div>
            <video width={500} height={500} src={briefing} type="video/mp4" autoplay>
            </video>
        </div>
    );
}

export default Briefing;