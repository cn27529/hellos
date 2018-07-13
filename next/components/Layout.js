import Header from './Header'

const layoutStyle = {
    margin: 5,
    padding: 10,
    border: '0px solid #888888',
    //font: '微軟正黑體'
    
}

export default(props) => (
    <div style={layoutStyle}>
        <Header/> {props.children}
    </div>
)