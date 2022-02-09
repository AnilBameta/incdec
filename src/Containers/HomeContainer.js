import Home from '../Components/Home';
import {connect} from 'react-redux';
import {add,subt} from '../Service/Actions/HomeAction'

const mapStateToProps=state=>({
     data:state
})
const mapDispatchToProps=dispatch=>({
    increaseValue:()=>dispatch(add()),
    decreaseValue :()=>dispatch(subt())
})
export default connect(mapStateToProps,mapDispatchToProps)(Home)

