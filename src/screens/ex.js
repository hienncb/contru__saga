
// import React, { Component } from 'react';
// import { View, TouchableOpacity, Text } from 'react-native';
// import { responseTodayMusic } from '../redux/actions/action';
// import { connect } from 'react-redux';
// class ex extends Component {
//     LoginSubmit = () => {
//         //    this.props.navigation.navigate('Menu')
//         this.props.getTodayMusic();

//         //this.LoadingFunction
//     }
//     render() {
//         return (
//             <View style={{ flex: 1, justifyContent: 'center' }}>
//                 <TouchableOpacity
//                     onPress={this.LoginSubmit}>
//                     <Text>LOGIN</Text>
//                 </TouchableOpacity>
//             </View>
//         );
//     }
// }

// const mapDispatchToProps = (dispatch, props) => {
//     return {
//         getTodayMusic: () => {
//             dispatch(responseTodayMusic());
//         }
//     }
// }

// const mapStateToProps = state => {
//     return {};
// }
// export default connect(mapStateToProps, mapDispatchToProps)(ex)


import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { responseTodayMusic } from '../redux/actions/action';
import { connect } from 'react-redux';
import * as action from '../redux-saga/actions/action';
// import { connect } from 'react-redux';


class ex extends Component {
    render() {
        return (
            <View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={{margin: 10}} onPress={()=>{
                        this.props.onDecrement(1);
                    }}>
                        <Text>Tru (-)</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{margin: 10}} onPress={()=>{
                        this.props.onIncrement(1);
                    }}>
                        <Text>Cong (+)</Text>
                    </TouchableOpacity>
                </View>
                <Text>cout: {this.props.times}</Text>
            </View>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        times: state.counter ? state.counter: 0
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        onDecrement: (step)=>{
            dispatch(action.decreaseAction(step))
        },
        onIncrement: (step)=>{
            dispatch(action.increaseAction(step))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ex)
