
function NotFound () {

    const styles = {
        textAlign: 'center',
        textTransform: 'uppercase',
        color: '#ffffff',
        fontSize: '4rem',
        paddingTop: '5rem'
    }

    return (
        <div style={{minHeight: '80vh'}}>
            <h2 style={styles}>404 NOT FOUND</h2>
        </div>
    )
}

export default NotFound