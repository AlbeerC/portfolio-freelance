import { ProgressBar } from "react-loader-spinner"

function Loading () {

    const styles = {
        minHeight: '80vh',
        margin: '50px 0',
        display: 'flex',
        justifyContent: 'center'
    }

    return (
        <div style={styles}>
            <ProgressBar
            height="80"
            width="80"
            ariaLabel="progress-bar-loading"
            wrapperStyle={{}}
            wrapperClass="progress-bar-wrapper"
            borderColor = '#ffffff'
            barColor = '#4de5c1'
            />
        </div>

    )
}

export default Loading