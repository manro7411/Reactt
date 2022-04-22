/* eslint-disable jsx-a11y/alt-text */
// props >> import any file or img in the web page
import "./Picture"
function Picture(props) {
    const{ Pict } = props;
    return (
        <div>
            <img className='tattoo-item' src={Pict.thumbnailUrl} />
            <h4>{Pict.title}</h4>
        </div>
    );

}
export default Picture;