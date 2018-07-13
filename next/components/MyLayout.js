import Header from './Header'

const layoutStyle = {
    margin: 5,
    padding: 10,
    border: '1px solid #888888',
    //font: '微軟正黑體'
    height: 500
}

export default(props) => (
    <div style={layoutStyle}>
        <Header/> {props.children}
    </div>
)